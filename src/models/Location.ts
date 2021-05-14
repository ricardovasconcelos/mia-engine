import { Column, Entity, JoinColumn, ManyToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid} from 'uuid'
import { User } from "./User";

@Entity('locations')
class Location {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_id: string;

  @ManyToMany(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column('timestamp with time zone')
  created_at: Date

  constructor(){
    if(!this.id){
      this.id = uuid()
    }
  }
}

export { Location }