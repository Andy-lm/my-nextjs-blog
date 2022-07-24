import { AppDataSource } from "./dataSource";

const connection = (async () => {
  const c = await AppDataSource.initialize();
  console.log("====创建连接");
  return c
})();

export const getDatabaseConnection = async () => {
  return connection;
};
