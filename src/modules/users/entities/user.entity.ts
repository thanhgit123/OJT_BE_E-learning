import { Blog } from "src/modules/blog/entities/blog.entity";
import { CourseMy } from "src/modules/course_my/entities/course_my.entity";
import { WishList } from "src/modules/wish_list/entities/wish_list.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ nullable: true })
    create_by: string;

    @Column({ type: 'timestamp', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
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
    phone: string;
  
    @Column({ nullable: true }) 
    username:string;
  
    @Column({ nullable: true }) 
    voided: number;
  
    @Column({ nullable: true }) 
    active: number;
  
    @OneToMany(()=>Blog,(item)=>item.user)
    blog:Blog;

    @OneToMany(()=>WishList,(item)=>item.user)
    wishList:WishList;

    @OneToMany(()=>CourseMy,(item)=>item.user)
    courseMy:CourseMy
}
