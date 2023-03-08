import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { KelasService } from './kelas.service';
import { CreateKelasDTO } from './dto/create-kelas.dto';
import { UpdateKelasDTO } from './dto/update-kelas.dto';


@Controller('kelas')
export class KelasController {
    constructor(private kelasService:KelasService){}
  
    @Get('all')
    findAll(){
        return this.kelasService.findall()
    }

    @Get(':id')
    findOne(@Param('id')id:string){
        
        return this.kelasService.findOne(Number(id))
    }

    @Post('new')
    create(@Body() cKelas:CreateKelasDTO){
         this.kelasService.createKelas(cKelas)   
    }

    @Put('update')
    update(@Body() uKelas:UpdateKelasDTO) {
        this.kelasService.updateKelas(uKelas)
    }

    @Delete('delete/:id')
    delete(@Param('id')id:number){
        this.kelasService.removeKelas(Number(id))
    }

}
