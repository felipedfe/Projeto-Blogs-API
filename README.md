# Blogs API

## •Descrição
Projeto de uma API e um banco de dados para a produção de conteúdo para um Blog usando Node.js e o pacote Sequelize para fazer um CRUD de posts. 

## •Tecnologias e bibliotecas
- Javascript
- Node.js
- Express

## •Executando a aplicação
- Clone o repositório em sua máquina
- No terminal, instale as dependência da aplicação: ```npm install```
- Agora é só colocar a aplicação para rodar: ```npm start```
- Criar um arquivo .env na raiz do projeto com as variáveis de ambiente:
```#### SERVER VARS
NODE_ENV=development
API_PORT=3000

#### DATABASE VARS
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DB_NAME=blogs-api
MYSQL_USER=root
MYSQL_PASSWORD=password

#### SECRECT VARS
JWT_SECRET=secretJWT```
