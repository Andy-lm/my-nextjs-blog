# 初始代码

## 项目启动
1. 清空之前的开发环境
```
docker kill 容器id
docker rm 容器id

rm -rf blog-data
如果是旧版docker用户
docker container prune
docker volume rm blog-data

```


2. 创建项目数据库目录
```bash 
mkdir blog-data
``` 
3. 通过docker启动postgresql容器
```bash
docker run -v "$PWD/blog-data":/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2
```
如是旧版Docker用户：
```bash
docker run -v "blog-data":/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2
```
4. 进入postgresql并创建数据库
```bash
// 进入容器
docker exec -it 容器id bash
// 进入数据库
psql -U blog

```
5. 创建数据库
```bash
CREATE DATABASE database_name ENCODING 'UTF8' LC_COLLATE 'en_US.utf8' LC_CTYPE 'en_US.utf8';
```
注：为了区分开发、生产、测试环境，应将以上代码中的database_name换为blog_development、blog_production、blog_test执行三次

6. 创建数据表
```bash
npm run dev

npm run m:run
```

