import { Course } from 'src/modules/courses/entities/course.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: 255 })
  create_by: string;

  @Column({ type: 'date' })
  create_date: Date;

  @Column({ type: 'varchar', length: 255 })
  modify_by: string;

  @Column({ type: 'date' })
  modify_date: Date;

  @Column({ type: 'bit',default:0 })
  voided: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  specialize: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @Column({ type: 'varchar', length: 255 })
  image: string;

  @OneToMany(() => Course, (course) => course.teacher_id)
  course: Course[];
}
