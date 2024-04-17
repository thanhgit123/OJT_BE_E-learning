import { Course } from "src/modules/courses/entities/course.entity";
import { User } from "src/modules/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class WishList {
    @PrimaryGeneratedColumn({type:"bigint"})
    id: number;

    @ManyToOne(()=>User,(item)=>item.wishList)
    @JoinColumn({name:"user_id"})
    user: User

    @ManyToOne(()=>Course,(item)=>item.wishList)
    @JoinColumn({name:"course_id"})
    course: Course

}
