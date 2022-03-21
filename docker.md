# Docker

Comandos ultra básicos de docker para colocar banco de dados em container.

1. docker pull <IMAGE_NAME> baixa a imagem
2. docker network create <NETWORK_NAME> cria network
3. docker run --name <CONTAINER_NAME> --net <NETWORK_NAME> --restart unless-stopped -d -p <PORT_NUMBER>:<PORT_NUMBER> <IMAGE_NAME> cria um container com a imagem baixada
4. docker logs <CONTAINER_NAME> caso dê erro na criação do container
5. docker exec -it <CONTAINER_NAME> /bin/bash executa a imagem do container do docker

Exemplos:
1. PostgreSQL:
  - docker pull postgres
  - docker run --name some-postgres --net some-postgres-network --restart unless-stopped -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
2. MySQL
  - docker pull mysql
  - docker run --name some-mysql --net some-mysql-network --restart unless-stopped -e MYSQL_ROOT_PASSWORD=my-secret-pw -d -p 3306:3306 mysql
3. MongoDB
  - docker pull mongo
  - docker run -it -v mongodata:/data/db -p 27017:27017 --name mongodb --restart unless-stopped -d mongo
4. PgAdmin4
  - docker pull dpage/pgadmin4
  - docker run --name pgadmin --network=some-postgres-network -p 5050:80 -e "PGADMIN_DEFAULT_EMAIL=emailforlogin" -e "PGADMIN_DEFAULT_PASSWORD=secretpasswordforlogin" -d dpage/pgadmin4
