import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kelas } from './kelas.entity';
import { CreateKelasDTO } from './dto/create-kelas.dto';
import { UpdateKelasDTO } from './dto/update-kelas.dto';

export interface errorku {
    msg:string
}

@Injectable()
export class KelasService {
    constructor(
        @InjectRepository(Kelas)
        private kelasRepository:Repository<Kelas>,
    ){}

    findall(): Promise<Kelas[]>{
        return this.kelasRepository.find();
    }

    async findOne(id: number): Promise<Kelas|errorku>{
        console.log(typeof(id))
        try {
           const result =  await this.kelasRepository.findOneBy({id});      
           if (!result){
               return {msg:"Data tidak ditemukan guyss"}
           }   
           return result
        } 
        catch(e:any){
            return {msg:"Errorr.... tidak tahu apa yang terjadi "}
        }
    }
    
    async createKelas(cKelas: CreateKelasDTO):Promise<void>{
        const newKelas: Kelas = this.kelasRepository.create({
            nama:cKelas.nama,
            walikelas:cKelas.walikelas
        })
        await this.kelasRepository.save(newKelas)
    }
    async updateKelas(uKelas:UpdateKelasDTO):Promise<void|errorku>{
        try {               
            await this.kelasRepository.update(uKelas.id,{nama:uKelas.nama,walikelas:uKelas.walikelas})
        }
        catch(e:any) {
            return {msg:"Error, cek kembali format data atau hub developer"}
        }
        
    }
    async removeKelas(id:number):Promise<void|errorku>{
        try {
            await this.kelasRepository.remove(await this.kelasRepository.findOneBy({id}))
        }
        catch (e:any) {
            return {msg:"Error, cek kembali ID yang anda masukkan atau hub developer"}
        }
    }

    

}
