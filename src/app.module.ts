import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SiswaModule } from './siswa/siswa.module';
import { KelasModule } from './kelas/kelas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kelas } from './kelas/kelas.entity';
import { Siswa } from './siswa/siswa.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'lurah11',
    password:'123',
    database:'Sekolah',
    entities:[Kelas,Siswa],
    synchronize:true
  }),SiswaModule, KelasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
