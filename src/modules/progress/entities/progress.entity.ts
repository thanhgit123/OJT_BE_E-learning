import { Lesson } from 'src/modules/lesson/entities/lesson.entity';
import { User } from 'src/modules/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Progress {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Lesson)
  @JoinColumn({ name: 'sessionId' })
  session: Lesson;

  @Column()
  isCompleted: boolean;

  @CreateDateColumn()
  completedAt: Date;

  @Column({ nullable: true })
  notes: string;
}
