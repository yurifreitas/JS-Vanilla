# API de Autenticação Simples

Esta é uma API de autenticação simples que permite que os usuários façam login e se registrem em um sistema. A API é construída com Node.js, Express e PostgreSQL.

## Configuração do Ambiente de Desenvolvimento

Certifique-se de ter o seguinte software instalado em sua máquina:

- Node.js: [Download e Instalação](https://nodejs.org/)
- Docker: [Download e Instalação](https://www.docker.com/)

```bash
docker-compose up
```

Isso iniciará um contêiner PostgreSQL com as seguintes configurações:

- Usuário: postgres
- Senha: teste123
- Banco de Dados: user_db
- Porta: 5432 (exposta na porta 5432 da sua máquina local)

A API estará em execução na porta 3000.

## Endpoints

A API possui os seguintes endpoints:

- `POST /login`: Permite que os usuários façam login fornecendo um nome de usuário e senha no corpo da solicitação JSON.

- `POST /register`: Permite que os usuários se registrem fornecendo um nome de usuário e senha no corpo da solicitação JSON.
