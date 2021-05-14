import {
  Column,
  Entity,
  JoinColumn,
  PrimaryColumn,
  ManyToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Disease } from "./Disease";
import { User } from "./User";

@Entity("users_diseases")
class UserDisease {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_id: string;

  @ManyToMany(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  disease_id: string;

  @ManyToMany(() => Disease)
  @JoinColumn({ name: "disease_id" })
  disease: Disease;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column('timestamp with time zone')
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { UserDisease };
