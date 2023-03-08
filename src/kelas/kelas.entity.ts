import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Kelas{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nama:string;

    @Column()
    walikelas:string;

}