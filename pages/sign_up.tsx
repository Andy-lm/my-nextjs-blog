import Axios, { AxiosResponse } from "axios";
import { useCallback, useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConfirmation: "",
  });

  const [errors, setErrors] = useState({
    username: [],
    password: [],
    passwordConfirmation: [],
  });

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      Axios.post("/api/v1/users", formData).then(
        (data) => {
          console.log(data);
        },
        (error) => {
          const response: AxiosResponse = error.response;
          if (response.status === 422) {
            console.log("response.data");
            console.log(response.data);
            setErrors({ ...errors, ...response.data });
          }
        }
      );
    },
    [formData]
  );

  return (
    <div>
      {JSON.stringify(formData)}
      <hr />
      {JSON.stringify(errors)}
      <hr />
      <h1>注册</h1>
      <form onSubmit={onSubmit} autoComplete={"on"}>
        <div>
          <label>
            用户名
            <input
              type="text"
              value={formData.username}
              onChange={(e) => {
                setFormData({ ...formData, username: e.target.value });
              }}
            />
          </label>
          {errors.username?.length > 0 && (
            <div>{errors.username.join(",")}</div>
          )}
        </div>
        <div>
          <label>
            密码
            <input
              type="password"
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
            />
          </label>
          {errors.password?.length > 0 && (
            <div>{errors.password.join(",")}</div>
          )}
        </div>
        <div>
          <label>
            再次输入密码
            <input
              type="password"
              value={formData.passwordConfirmation}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  passwordConfirmation: e.target.value,
                });
              }}
            />
          </label>
          {errors.passwordConfirmation?.length > 0 && (
            <div>{errors.passwordConfirmation.join(",")}</div>
          )}
        </div>
        <div>
          <button type="submit">注册</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
