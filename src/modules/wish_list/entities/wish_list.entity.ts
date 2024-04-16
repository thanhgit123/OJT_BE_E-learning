import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class WishList {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id:number

    @Column({type: 'bigint'})
    user_id:number

    @Column({type:'bigint'})
    course_id:number
}
