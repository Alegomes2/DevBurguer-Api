# 🍔 DevBurguer API

**API REST para gerenciamento de usuários, produtos, categorias e pedidos de uma hamburgueria.**

Desenvolvida com **Node.js, Express, Sequelize e PostgreSQL**, esta API é responsável pelas regras de negócio, autenticação, persistência de dados e comunicação com o frontend do DevBurguer.

**Status:** Fluxo principal implementado, publicado e validado em produção.

## 🌐 Links do projeto

- **Frontend:** https://devburguer-interface-lovat.vercel.app/
- **Repositório Frontend:** https://github.com/Alegomes2/devburguer-interface
- **Repositório Backend:** https://github.com/Alegomes2/DevBurguer-Api
- **API publicada:** https://devburguer-api-v0t5.onrender.com

> A API está hospedada no plano gratuito da Render e pode apresentar um tempo maior de resposta após períodos de inatividade.

---

## 🎯 Objetivo

Desenvolver o backend de uma aplicação Full Stack para hamburgueria, oferecendo recursos para autenticação, gerenciamento de produtos e processamento de pedidos.

O projeto foi construído com foco no aprendizado prático de desenvolvimento de APIs REST, integração com banco de dados relacional e implantação em ambiente de produção.

## ⚙️ Funcionalidades

### Autenticação e usuários
- Cadastro de usuários
- Login e autenticação com JWT
- Proteção de endpoints que exigem autenticação

### Produtos e categorias
- Cadastro e gerenciamento de produtos
- Organização dos produtos por categorias
- Upload e disponibilização de imagens
- Consulta de produtos pelo frontend

### Pedidos
- Recebimento de pedidos realizados pelos clientes
- Registro dos produtos e quantidades
- Persistência dos pedidos no banco de dados
- Consulta dos pedidos pelo painel administrativo
- Atualização do status dos pedidos

## 🛠️ Tecnologias utilizadas

| Tecnologia | Finalidade |
|---|---|
| Node.js | Ambiente de execução JavaScript |
| Express | Framework para construção da API |
| PostgreSQL | Banco de dados relacional |
| Sequelize | ORM para comunicação com o banco |
| JWT | Autenticação por tokens |
| Multer | Processamento de uploads |
| Git e GitHub | Versionamento de código |

### Infraestrutura de produção

- **Render:** hospedagem da API
- **Aiven:** hospedagem do PostgreSQL
- **Vercel:** hospedagem do frontend

## 🏗️ Arquitetura

A API utiliza uma organização baseada em controllers, models, rotas e middlewares.

O Express recebe as requisições HTTP, os controllers processam as operações e o Sequelize realiza a comunicação com o PostgreSQL.

O JWT é utilizado para autenticar requisições que exigem acesso autorizado.

### Fluxo de uma requisição

```text
Frontend React
      |
      v
Requisição HTTP (Axios)
      |
      v
API Node.js + Express
      |
      v
Rotas e Middlewares
      |
      v
Controllers
      |
      v
Sequelize ORM
      |
      v
PostgreSQL
```

## 🔌 API REST

A API disponibiliza recursos para autenticação, produtos, categorias e pedidos.

Entre as operações implementadas estão:

- Cadastro e autenticação de usuários
- Consulta e gerenciamento de produtos
- Consulta e gerenciamento de categorias
- Criação e consulta de pedidos
- Atualização do status dos pedidos

Algumas operações exigem autenticação JWT.

## 💻 Executando localmente

### Pré-requisitos

- Node.js
- Gerenciador de pacotes utilizado pelo projeto
- Banco de dados PostgreSQL configurado

### Instalação

Clone o repositório:

```bash
git clone https://github.com/Alegomes2/DevBurguer-Api.git
```

Acesse a pasta:

```bash
cd DevBurguer-Api
```

Instale as dependências:

```bash
pnpm install
```

Configure as variáveis de ambiente necessárias para a conexão com o banco de dados, autenticação e demais serviços utilizados pela aplicação.

Inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

> Os comandos e as variáveis de ambiente devem ser conferidos no `package.json` e na configuração atual do projeto.

## 🔐 Segurança e configuração

A aplicação utiliza:

- Autenticação baseada em JWT
- Proteção de endpoints
- Configuração de CORS para comunicação com o frontend
- Variáveis de ambiente para informações sensíveis
- Conexão SSL com o banco de dados em produção

**Importante:** credenciais, tokens, certificados privados e senhas não devem ser publicados no repositório.

## 🚀 Deploy e validação

O backend está publicado na Render e conectado a um banco PostgreSQL hospedado no Aiven.

O fluxo principal foi testado em produção:

1. Usuário realiza um pedido pelo frontend.
2. O frontend envia os dados para a API.
3. A API registra o pedido no banco de dados.
4. O pedido aparece no painel administrativo.
5. O status é atualizado.
6. A alteração permanece registrada após atualizar a página.

Esses testes confirmaram o funcionamento da integração principal entre frontend, backend e banco de dados.

## 🧠 Desafios técnicos e aprendizados

Durante o desenvolvimento e a publicação, trabalhei com:

- Integração entre React e API REST
- Configuração de CORS em produção
- Autenticação com JWT
- Persistência de dados utilizando Sequelize
- Conexão segura com PostgreSQL hospedado na nuvem
- Configuração de variáveis de ambiente
- Correção das URLs de imagens para o ambiente publicado
- Diagnóstico e resolução de problemas de deploy

### Limitações conhecidas

O armazenamento local de arquivos na hospedagem gratuita da Render não é persistente. Novas imagens enviadas podem ser perdidas após reinicializações ou novos deploys.

Para uso comercial, seria necessário adotar armazenamento persistente de arquivos e ampliar os testes de segurança e confiabilidade.

## 👨‍💻 Desenvolvedor

**Alexandre Gomes**

Desenvolvedor Full Stack em formação, com foco em aplicações web, APIs e automações.

**GitHub:** https://github.com/Alegomes2