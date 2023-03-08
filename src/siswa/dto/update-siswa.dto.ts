import { PartialType } from "@nestjs/swagger";
import { CreateSiswaDTO } from "./create-siswa.dto";

export class UpdateSiswaDTO extends(PartialType(CreateSiswaDTO)){
    id:number
}