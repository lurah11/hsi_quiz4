import { Kelas } from "src/kelas/kelas.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Siswa {
    @PrimaryGeneratedColumn()
    id:number 

    @Column()
    nama:string

    @Column({type:'date'})
    lahir:string

    @ManyToOne(type=>Kelas,kelas=>kelas.id)
    kelas:Kelas

}