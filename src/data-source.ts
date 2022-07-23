import "reflect-metadata"
import { DataSource } from "typeorm"
// import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "blog",
    password: "",
    database: "blog_development",
    synchronize: false, // 该值设置为false，避免我们在修改数据的时候导致一些数据被删除
    logging: false,
    entities: ["dist/entity/**/*.js"],
    // entities: [User],
    migrations: ["dist/migration/**/*.js"],
    subscribers: ["dist/subscribers/**/*.js"],
})
