import { Course } from "src/modules/courses/entities/course.entity";
import { User } from "src/modules/users/entities/user.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CourseMy {
    @PrimaryGeneratedColumn({type:"bigint"})
    id: number;

    @ManyToOne(()=>User,(item)=>item.courseMy)
    @JoinColumn({name:"user_id"})
    user: User

    @ManyToOne(()=>Course,(item)=>item.courseMy)
    @JoinColumn({name:"course_id"})
    course: Course
}
