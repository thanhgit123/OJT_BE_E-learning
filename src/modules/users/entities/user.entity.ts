import { Blog } from "src/modules/blog/entities/blog.entity";
import { WishList } from "src/modules/wish_list/entities/wish_list.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ nullable: true })
    create_by: string;

    @Column()
    create_date: string;
  
    @Column({ nullable: true })
    modify_date: string;
  
    @Column()
    full_name: string;
  
    @Column({ nullable: true })
    is_active: number;
  
    @Column()
    password: string;
  
    @Column() 
    phone: number;
  
    @Column({ nullable: true }) 
    username:string;
  
    @Column() 
    voided: number;
  
    @Column({ nullable: true }) 
    active: number;
  
    @OneToMany(()=>Blog,(item)=>item.user)
    blog:Blog;

    @OneToMany(()=>WishList,(item)=>item.user)
    wishList:WishList
}
