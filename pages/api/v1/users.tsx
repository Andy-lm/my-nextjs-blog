import { getDatabaseConnection } from "lib/getDatabaseConnection";
import md5 from "md5";
import { NextApiHandler } from "next";
import { User } from "src/entity/User";

const Users: NextApiHandler = async (request, response) => {
  const body = request.body;
  const { username, password, passwordConfirmation } = body;
  response.setHeader("Content-Type", "application/json");
  const errors = {
    username: [] as string[],
    password: [] as string[],
    passwordConfirmation: [] as string[],
  };
  if (username.trim() === "") {
    errors.username.push("用户名不能为空");
  }

  if (!/[a-zA-Z0-9_]/.test(username.trim())) {
    errors.username.push("用户名格式不合法，应只包括数字、字母、下划线");
  }

  if (username.trim().length > 42) {
    errors.username.push("用户名太长");
  }
  if (username.trim().length <= 3) {
    errors.username.push("用户名太短");
  }
  if (password.length < 6) {
    errors.username.push("密码太短");
  }
  if (password.length > 16) {
    errors.username.push("密码太长");
  }
  if (password.length === 0) {
    errors.username.push("密码不能为0");
  }

  if (passwordConfirmation !== password) {
    errors.passwordConfirmation.push("密码不匹配");
  }
  const hasErrors = Object.values(errors).find((v) => v.length > 0);
  if (hasErrors) {
    response.statusCode = 422; // 422 状态码表示服务器理解请求实体的内容类型，并且请求实体的语法是正确的，但是服务器无法处理所包含的指令，用于密码不一致很适合
    response.write(JSON.stringify(errors));
  } else {
    const connection = await getDatabaseConnection();
    const user = new User();
    user.username = username;
    user.passwordDigest = md5(password);
    await connection.manager.save(user);
    response.statusCode = 200;
    response.write(JSON.stringify(user));
  }
  response.end();
};

export default Users;
