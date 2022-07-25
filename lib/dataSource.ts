// reflect-metadata的作用是让我们可以在声明的时候添加和读取元数据
import "reflect-metadata";
import { Post } from "src/entity/Post";
import { User } from "src/entity/User";
import { Comment } from "src/entity/Comment";
import { DataSource } from "typeorm";

// 注意：DataSource的参数也可以放在ormconfig.json文件里作为全局配置
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "blog",
  password: "",
  database: "blog_development",
  synchronize: false, // 该值设置为false，避免我们在修改数据的时候导致一些数据被删除
  logging: false,
  //   entities: ["dist/entity/**/*.js"],
  entities: [Post, User, Comment], // 通过reflect-metadata就可以拿到Post、User、 Comment这些entity上的属性名、属性值类型
  migrations: ["dist/migration/**/*.js"],
  subscribers: ["dist/subscribers/**/*.js"],
});
