import { Role } from "src/modules/roles/entities/role.entity";
import { User } from "src/modules/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"user_role"})
export class UserRole {

   
    @PrimaryColumn()   
     user_id:number;

     @PrimaryColumn()
    role_id:number;
   
}

