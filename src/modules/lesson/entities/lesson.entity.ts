import { Chapter } from 'src/modules/chapter/entities/chapter.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lesson {
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

  @Column({type:'longtext'})
  description: string;

  @Column({type:'varchar', length: 255})
  resources:string

  @Column({type:'varchar', length: 255})
  title:string

  @Column({type:'varchar', length: 255})
  video:string

  @Column({type:'bit',default:0}) 
  voided:number

  @Column({type:'longtext'})
  document:string

  @ManyToOne(() => Chapter, (chapter) => chapter.lessons)
  @JoinColumn({ name: 'chapter_id' })
  chapter: Chapter[];


}
