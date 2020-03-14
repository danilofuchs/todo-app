# todo-app

Todo app to tinker with GraphQL, Apollo Client, NestJS and Prisma2

**This is a personal project, and a work in progress**

## Getting started

### MySQL

In your terminal, with docker, run:

```bash
docker run -p 3306:3306 --name todo-app-db -e MYSQL_ROOT_PASSWORD=batata -d mysql:latest
```

To migrate the schema:

```bash
docker cp ./server/db/schema.sql todo-app-db:/schema.sql
docker exec -i todo-app-db sh -c "mysql -u root -pbatata < schema.sql"
```

Create a .env file at server/prisma/.env:

```
DATABASE_URL="mysql://root:batata@localhost:3306/todo_app"
```
