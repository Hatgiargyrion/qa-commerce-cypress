# qa-commerce-cypress

Projeto de automação de testes utilizando **Cypress** com **Cucumber (BDD)**, focado em testes para aplicações **Web (UI)** e **API**.

---

## ✅ Pré-requisitos

Antes de rodar o projeto, você precisa ter instalado na sua máquina:

- [Node.js](versão 14 ou superior)
- [Git]
- Um terminal (ex: Git Bash, CMD, Terminal do VSCode)

---

## ⚠️ Dependência do Projeto Web

Este projeto depende do site que será testado. É necessário clonar e executar outro projeto que contém a aplicação web para que os testes funcionem corretamente.

## Clone o projeto da aplicação web

```bash
git clone https://github.com/fabioaraujoqa/qa-commerce.git
```
Entre na pasta do projeto web

```bash
cd qa-commerce-web
```

Instale as dependências

```bash
npm install
```

Execute a aplicação

```bash
npm start
```

A aplicação web ficará disponível em http://localhost:3000 (ou a porta configurada no projeto web).

---

## 🚀 Como clonar o projeto

1. Abra o terminal.
2. Navegue até a pasta onde deseja salvar o projeto.
3. Execute os comandos:

Clone o projeto

```bash
git clone https://github.com/Hatgiargyrion/qa-commerce-cypress.git
```

Entre na pasta

```bash
cd qa-commerce-cypress
```

Após clonar o projeto e entrar na pasta, instale as dependências com:

```bash
npm install
```

Após instalar as dependências, abra o cypress:

```bash
npm run cypress:open
```

Para rodar todos os testes gerando report:

```bash
npm run test:all
```

---

## Configuração antes de rodar

O projeto conta com um arquivo de configuração, presente na raiz do projeto "cypress.env.json". Nesse arquivo é possível configurar ambiente, tags e urls. 

⚠️ Certifique-se que estão apontando para o ambiente correto