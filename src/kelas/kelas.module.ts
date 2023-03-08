import { Module } from '@nestjs/common';
import { KelasController } from './kelas.controller';
import { KelasService } from './kelas.service';
import { Kelas } from './kelas.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Kelas])],
  controllers: [KelasController],
  providers: [KelasService]
})
export class KelasModule {}
