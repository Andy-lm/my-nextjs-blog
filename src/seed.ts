import { AppDataSource } from "./data-source";
import { Comment } from "./entity/Comment";
import { Post } from "./entity/Post";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async (connection) => {
    console.log("===connection");
    const { manager } = connection;
    const u1 = new User();
    u1.username = "南橘北枳";
    u1.passwordDigest = "123456";
    await manager.save(u1);
    const p1 = new Post();
    p1.title = "我的第一篇博客";
    p1.content = "### xxx Hello World";
    p1.author = u1;
    await manager.save(p1);
    const c1 = new Comment();
    c1.content = "真棒";
    c1.post = p1;
    c1.user = u1;
    await manager.save(c1);
    console.log("===数据生成完成，OK！");
    connection.close();
  })
  .catch((error) => console.log(error));
