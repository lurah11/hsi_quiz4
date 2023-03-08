import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { get } from 'http';
import { CreateKelasDTO } from 'src/kelas/dto/create-kelas.dto';
import { UpdateKelasDTO } from 'src/kelas/dto/update-kelas.dto';
import { CreateSiswaDTO } from './dto/create-siswa.dto';
import { SiswaService } from './siswa.service';
import { UpdateSiswaDTO } from './dto/update-siswa.dto';

@Controller('siswa')
export class SiswaController {
    constructor(private siswaService:SiswaService) {
        
    }
    
    @Get('all')
    findall(){
        return this.siswaService.findAll()
    }
    @Get(':id')
    findOne(@Param('id') id:string){
        return this.siswaService.findOne(Number(id))
    }

    @Post('new')
    async create(@Body() cSiswa:CreateSiswaDTO){
        return await this.siswaService.createSiswa(cSiswa)
    }

    @Put('update')
    async update(@Body() uSiswa:UpdateSiswaDTO) {
        return await this.siswaService.updateSiswa(uSiswa)
    }

    @Delete('delete/:id')
    async remove(@Param('id') id:number) {
        return await this.siswaService.RemoveSiswa(id)
    }

}
