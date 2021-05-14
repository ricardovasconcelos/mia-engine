import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid} from 'uuid'

@Entity('diseases')
class Disease {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  constructor(){
    if(!this.id){
      this.id = uuid()
    }
  }
}

export { Disease }