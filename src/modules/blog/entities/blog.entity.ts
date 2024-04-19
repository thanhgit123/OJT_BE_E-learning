import { User } from 'src/modules/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Blog {
    @PrimaryGeneratedColumn({type:"bigint"})
    id: number;

    @Column({type:"varchar", length:255})
    create_by:string;

    @Column({type:'date'})
    create_date:Date;

    @Column({type:'varchar', length:255})
    modify_by:string;

    @Column({type:'date'})
    modify_date:Date;

    @Column({ type: 'int'})
    voided:number;

    @Column({type:'varchar', length:255})
    content:string;

    @Column({type:'varchar', length:255})
    image:string;

    @Column({ type: 'int'})
    likes:number;

    @Column({type:"varchar", length:255})
    tags:string;

    @Column({type:'varchar', length:255})
    title:string;

    @ManyToOne(()=>User,(item)=>item.blog)
    @JoinColumn({name:"user_id"})
    user: User

}
