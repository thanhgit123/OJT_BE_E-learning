import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  create_by: string;

  @Column({ type: 'date' })
  create_date: Date;

  @Column({ type: 'varchar', length: 255 })
  modify_by: string;

  @Column({ type: 'date' })
  modify_date: Date;

  @Column({type:'varchar',length:255})
  content:string
  
  @Column()
  lesson_id:number

  @Column()
  user_id:number

  @Column({type:'bit',default:0})
  voided:number
}
