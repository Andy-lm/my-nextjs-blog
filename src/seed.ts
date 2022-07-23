import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(async (connection) => {
    console.log(connection, "===connection");
    connection.close();
  })
  .catch((error) => console.log(error));
