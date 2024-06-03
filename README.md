CRUD de Usuários

Este é um aplicativo de CRUD (Create, Read, Update, Delete) de usuários desenvolvido em Node.js com Express e utilizando um banco de dados PostgreSQL.
Funcionalidades

    Listar Usuários: Endpoint para listar todos os usuários cadastrados.
    Buscar Usuário por ID: Endpoint para buscar um usuário específico pelo seu ID.
    Criar Usuário: Endpoint para criar um novo usuário.
    Atualizar Usuário: Endpoint para atualizar os dados de um usuário existente.
    Excluir Usuário: Endpoint para excluir um usuário do sistema.

Pré-requisitos

    Node.js instalado na máquina local
    Banco de dados PostgreSQL em execução

Instalação

    Clone este repositório para sua máquina local.
    Instale as dependências usando o comando npm install.
    Configure as variáveis de ambiente no arquivo .env.
    Inicie o servidor usando o comando npm start.
Uso

    Use um cliente HTTP (como Postman ou Insomnia) para enviar requisições aos endpoints da API.
    Os endpoints estão definidos em src/routes/userRoutes.ts.
    Os controladores correspondentes estão em src/controllers/userController.ts.
    A lógica de negócios está implementada em src/services/userService.ts.

Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.
Licença

Este projeto está licenciado sob a MIT License. 

Before running the project, make sure you have the following installed:
Node.js v18.19.0
npm (Node Package Manager)
Prisma CLI
Docker (for running Prisma with Docker)

npm install

4.Para rodar os containers em segundo plano (modo "detached")

docker compose up -d

5.Rodar migrate do prisma pra sincronizar a base

npx prisma migrate dev

6.Start the server:

npm run dev

7.Rodar para criar o Container