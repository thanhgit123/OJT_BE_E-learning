import { UserRole } from 'src/modules/user_role/entities/user_role.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name:'roles'})
export class Role {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
    length: 255,
    default: null,
  })
  create_by: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_date: Date;
  @Column({
    type: 'varchar',
    length: 255,
    default: null,
  })
  modify_by: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  modify_date: Date;
  @Column({
    type: 'tinyint',
    default: 0,
  })
  role_name: number;
  @Column()
  void:number
  @ManyToMany(() => User, { cascade: true })
  users: User[];
}
