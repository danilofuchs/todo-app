db-up:
	docker run -p 3306:3306 --name todo-app-db -e MYSQL_ROOT_PASSWORD=batata -d mysql:latest

migrate:
	docker cp ./server/db/schema.sql todo-app-db:/schema.sql
	docker exec -i todo-app-db sh -c "mysql -u root -pbatata < schema.sql"
