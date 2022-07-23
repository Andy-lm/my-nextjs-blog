import { AppDataSource } from "./data-source";
import { Post } from "./entity/Post";

AppDataSource.initialize()
  .then(async (connection) => {
    const post = await connection.manager.find(Post);
    console.log(post, "=====post1");
    if (post.length === 0) {
      for (let i = 1; i <= 10; i++) {
        await connection.manager.save(
          new Post({ title: `Title ${i}`, content: `Andy的第${i}篇内容` })
        );
      }
    }
    console.log("数据填充完成");
    const post2 = await connection.manager.find(Post);
    console.log(post2, "=====post1");
    connection.close();
  })
  .catch((error) => console.log(error));
