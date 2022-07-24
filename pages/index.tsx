import { GetServerSideProps, NextPage } from "next";
import { UAParser } from "ua-parser-js";
import { useEffect, useState } from "react";
import { getDatabaseConnection } from "../lib/getDatabaseConnection";
import { Post } from "src/entity/Post";

type Props = {
  posts: Post[];
  browser: {
    name: string;
    version: string;
    major: string;
  };
};

const index: NextPage<Props> = (props) => {
  const { browser, posts } = props;
  const [width, setWidth] = useState(0);
  console.log(posts, "===posts");
  useEffect(() => {
    setWidth(document.documentElement.clientWidth);
  }, []);

  return (
    <div>
      <span>你的浏览器是 {browser.name}</span>
      <span>你的浏览器窗口大小是 {width} 像素</span>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <div>{post.content}</div>
          </div>
        );
      })}
    </div>
  );
};
export default index;

// getServerSideProps会在请求来的时候运行一次
export const getServerSideProps: GetServerSideProps = async (context) => {
  let connection = await getDatabaseConnection();
  const p1 = await connection.manager.find(Post);
  const ua = context.req.headers["user-agent"];
  const result = new UAParser(ua).getResult();
  return {
    props: {
      browser: result.browser,
      posts: JSON.parse(JSON.stringify(p1)),
    },
  };
};
