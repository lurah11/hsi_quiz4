import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KelasController } from 'src/kelas/kelas.controller';
import { KelasModule } from 'src/kelas/kelas.module';
import { KelasService } from 'src/kelas/kelas.service';
import { SiswaController } from './siswa.controller';
import { Siswa } from './siswa.entity';
import { SiswaService } from './siswa.service';
import { Kelas } from 'src/kelas/kelas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Siswa,Kelas]),KelasModule],
  controllers: [SiswaController,KelasController],
  providers: [SiswaService,KelasService]
})
export class SiswaModule {}
