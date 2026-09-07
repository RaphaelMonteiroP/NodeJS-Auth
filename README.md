# Node-Auth

Sistema de autenticação (registro e login) construído para praticar fundamentos de backend com Node.js, TypeScript, Express e Prisma. Serve como base de estudo para autenticação em projetos futuros.

🔗 **Demo ao vivo:** [nodejs-auth-3lc7.onrender.com](https://nodejs-auth-3lc7.onrender.com/)

## Funcionalidades

- Registro de usuário (nome, email e senha)
- Login com email e senha
- Senhas armazenadas com hash (bcrypt), nunca em texto puro
- Validação de campos obrigatórios
- Proteção contra vazamento de dados sensíveis nas respostas da API

## Stack

- **Node.js** + **TypeScript**
- **Express** — servidor e rotas
- **EJS** — renderização das páginas (registro e login)
- **Prisma** — ORM
- **PostgreSQL** — banco de dados
- **Docker Compose** — banco local em desenvolvimento
- **bcrypt** — hash de senhas

## Arquitetura

O projeto segue uma separação em camadas:

```
Controller → Service → Repository → Banco de dados
```

- **Controller**: recebe a requisição HTTP, valida campos obrigatórios e formata a resposta
- **Service**: contém a regra de negócio (checagem de duplicidade, hash de senha, comparação de senha)
- **Repository**: única camada que conversa com o banco, via Prisma

## Como rodar localmente

### Pré-requisitos

- Node.js
- Docker

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/RaphaelMonteiroP/NodeJS-Auth.git
cd NodeJS-Auth
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` na raiz, com base no exemplo abaixo:

```
POSTGRES_USER=admin
POSTGRES_PASSWORD=admin123
POSTGRES_DB=node_auth
DATABASE_URL="postgresql://admin:admin123@localhost:5432/node_auth?schema=public"
```

4. Suba o banco de dados com Docker:

```bash
docker compose up -d
```

5. Rode as migrations do Prisma:

```bash
npx prisma migrate dev
```

6. Compile o TypeScript:

```bash
npx tsc
```

7. Inicie o servidor:

```bash
npm run dev
```

O servidor sobe em `http://localhost:process.env.port`.

## Rotas

| Método | Rota        | Descrição                      |
| ------ | ----------- | ------------------------------ |
| GET    | `/register` | Página de registro (HTML)      |
| POST   | `/register` | Cria um novo usuário           |
| GET    | `/login`    | Página de login (HTML)         |
| POST   | `/login`    | Autentica um usuário existente |
