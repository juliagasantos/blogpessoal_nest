<p align="center">
  <a href="https://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<h1 align="center">📝 Blog Pessoal API</h1>

<p align="center">
API desenvolvida com <b>NestJS</b> para gerenciamento de postagens 🚀
</p>

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-Framework-red" />
  <img src="https://img.shields.io/badge/TypeScript-Language-blue" />
  <img src="https://img.shields.io/badge/MySQL-Database-orange" />
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow" />
</p>

---

## 📌 Sobre o projeto

API REST desenvolvida com **NestJS**, focada no gerenciamento de postagens de um blog pessoal.

O projeto segue boas práticas de desenvolvimento backend, com arquitetura modular e integração com banco de dados.

---

## 🚀 Tecnologias

* NestJS
* TypeScript
* TypeORM
* MySQL
* Insomnia

---

## 📥 Como baixar e rodar o projeto

### 🔹 1. Clonar o repositório

```bash
git clone https://github.com/juliagasantos/blogpessoal_nest.git
```

### 🔹 2. Entrar na pasta do projeto

```bash
cd blogpessoal
```

### 🔹 3. Instalar as dependências

```bash
npm install
```

---

## ⚙️ Configuração do ambiente

### 🔹 4. Criar o banco de dados

Abra o MySQL Workbench e execute:

```sql
CREATE DATABASE db_blogpessoal;
```

### 🔹 5. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=sua_senha
DB_NAME=db_blogpessoal
```

---

## ▶️ Rodando a aplicação

### 🔹 6. Iniciar o servidor

```bash
npm run start:dev
```

Se aparecer:

```
Application is running on: http://localhost:3000
```

✅ Tudo funcionando corretamente

---

## 🗄️ Verificando o banco

Após rodar o projeto:

1. Abra o MySQL Workbench
2. Acesse o banco `db_blogpessoal`
3. Vá em **Tables**

Você verá a tabela:

* `tb_postagem`

---

## ➕ Inserindo dados para teste

Execute no MySQL Workbench:

```sql
INSERT INTO tb_postagem (titulo, texto, data)
VALUES 
('Primeiro post', 'Conteúdo teste', NOW()),
('Segundo post', 'Outro conteúdo', NOW());
```

---

## 📌 Status

🚧 Projeto em desenvolvimento

