import { Chapter } from 'src/modules/chapter/entities/chapter.entity';
import { Course } from 'src/modules/courses/entities/course.entity';
import { Lesson } from 'src/modules/lesson/entities/lesson.entity';
import { User } from 'src/modules/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Progress {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  lessionId: number;

  @Column()
  courseId: number;

  @Column()
  chapterId: number;

  @Column()
  isCompleted: boolean;

  @CreateDateColumn()
  completedAt: Date;

  @Column({ nullable: true })
  notes: string;
}
