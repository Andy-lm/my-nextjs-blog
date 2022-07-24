import {
  Entity,
  CreateDateColumn,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { User } from "./User";
import { Comment } from "./Comment";

@Entity("posts")
export class Post {
  @PrimaryGeneratedColumn("increment")
  id: string;
  @Column("varchar")
  title: string;
  @Column("text")
  content: string;
  @Column("varchar")
  authorId: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @ManyToOne(() => User, (user) => user.posts)
  author: User;
  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];
}
