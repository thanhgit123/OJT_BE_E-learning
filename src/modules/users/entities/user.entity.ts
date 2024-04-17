
import { Blog } from 'src/modules/blog/entities/blog.entity';
import { Role } from 'src/modules/roles/entities/role.entity';
import { UserRole } from 'src/modules/user_role/entities/user_role.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({
    type:"bigint"
  })
  id: number;
  @Column({ nullable: true })
  create_by: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_date: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  modify_date: Date;

  @Column()
  full_name: string;

  @Column({ nullable: true })
  is_active: number;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  username: string;

  @Column({ nullable: true })
  voided: number;

  @Column({ nullable: true })
  active: number;

  @OneToMany(() => Blog, (blog) => blog.user)
  blog: Blog[]; // Corrected property name to match the relationship
  @ManyToMany(() => Role, { cascade: true })
  @JoinTable({
    name: 'user_role', // Tên bảng phụ
    joinColumn: { name: 'user_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' },
  })
  rol: Role[];
}
