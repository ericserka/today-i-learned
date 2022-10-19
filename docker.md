# Docker

Basic docker commands.

1. `docker pull <IMAGE_NAME>` pull the image;
2. `docker network create <NETWORK_NAME>` creates a network;
3. `docker run --name <CONTAINER_NAME> -d -p <PORT_NUMBER>:<PORT_NUMBER> <IMAGE_NAME>`: create a container with the corresponding image;
4. `docker logs <CONTAINER_NAME>`: shows container logs. Useful in case there is an error in the creation of the container or something like that. To follow the logs, the command can be used with the -f or --follow flag: `docker logs -f <CONTAINER_NAME>`;
5. `docker exec -it <CONTAINER_NAME> /bin/bash`: run docker container image;
6. `docker ps`: list containers;
7. Generally, commands in containers can be executed by either <CONTAINER_NAME> or <CONTAINER_ID>.

Examples:

1. PostgreSQL:

- `docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres`

2. MySQL:

- `docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d -p 3306:3306 mysql`

3. Redis:

- `docker run --name some-redis -d redis`
- `docker exec -it <CONTAINER_NAME> redis-cli`: run redis CLI.
