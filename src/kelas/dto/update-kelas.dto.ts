import { PartialType } from "@nestjs/swagger";
import { CreateKelasDTO } from "./create-kelas.dto";

export class UpdateKelasDTO extends PartialType(CreateKelasDTO) {
    id:number
}