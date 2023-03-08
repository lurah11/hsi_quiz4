import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSiswaDTO } from './dto/create-siswa.dto';
import { Siswa } from './siswa.entity';
import { Kelas } from 'src/kelas/kelas.entity';
import { UpdateSiswaDTO } from './dto/update-siswa.dto';

export interface errorku {
    msg:string
}


@Injectable()
export class SiswaService {
    constructor(
        @InjectRepository(Siswa)
        private siswaRepository : Repository<Siswa>,
        @InjectRepository(Kelas)
        private kelasRepository:Repository<Kelas>
    ){}

    async findAll():Promise<Siswa[]> {
        return await this.siswaRepository.find({relations:['kelas']})
    }

    async findOne(id:number):Promise<Siswa> {
        return await this.siswaRepository.findOne({where:{id},relations:['kelas']})
    }

    async createSiswa(cSiswa:CreateSiswaDTO):Promise<void|errorku> {

        try {
            const kelasnya = await this.kelasRepository.findOneBy({id:Number(cSiswa.kelas)})
  
            const newSiswa = this.siswaRepository.create({
                nama:cSiswa.nama,
                lahir:cSiswa.lahir,
                kelas:kelasnya
            })

            await this.siswaRepository.save(newSiswa)
        }
        catch(e:any) {
            return {msg:"Errrroooroororororo"}
        }
    }

    async updateSiswa(uSiswa:UpdateSiswaDTO):Promise<Siswa|errorku>{
        try {     
            console.log("agusssssss")
            const kelasID = uSiswa.kelas 
            if(kelasID) {
                const kelas = await this.kelasRepository.findOneBy({id:Number(uSiswa.kelas)})                
                const updSiswa = await this.siswaRepository.findOneBy({id:Number(uSiswa.id)})              
                updSiswa.kelas = kelas                
                await this.siswaRepository.save(updSiswa)
                try {
                    await this.siswaRepository.update(uSiswa.id,{nama:uSiswa.nama,lahir:uSiswa.lahir}) 
                    const returnSiswa = await this.siswaRepository.findOne({where:{id:Number(uSiswa.id)},relations:['kelas']}) 
                    return returnSiswa      
                }
                catch(e:any){
                    const returnSiswa = await this.siswaRepository.findOne({where:{id:Number(uSiswa.id)},relations:['kelas']})
                    return returnSiswa
                }          

            }  
         
            await this.siswaRepository.update(uSiswa.id,{nama:uSiswa.nama,lahir:uSiswa.lahir})
            const returnSiswa = await this.siswaRepository.findOneBy({id:Number(uSiswa.id)})
            return returnSiswa
            
        }
        catch(e:any){
            return {msg:e}
        }
    }

    async RemoveSiswa(id:number):Promise<void|errorku>{
        try {
            await this.siswaRepository.remove(await this.siswaRepository.findOneBy({id:Number(id)}))
        }
        catch(e:any){
            return {msg:e}
        }
    }

    
}
