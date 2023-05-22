# Teste para a entrevista da Licitar Digital

Frontend: http:localhost:5173

backend: http:localhost:3001

## Frontend Requisitos:

[X] Desenvolver utilizando React e TypeScript.

[] Usar MaterialUI como framework UI. (opcional)

[X] Usar Formik para gerenciamento de formulários. (opcional)

[X] Usar Yup para validação de dados. (opcional)

[X] Usar Axios para realizar requisições ao backend. (opcional)

[X] Implementar WebSocket para atualização em tempo real. (opcional)

## Funcionalidades do Frontend:

[X] Tela de login: uma tela onde o usuário deve fazer login para acessar a tela de
disputa.

[X] Tela de disputa: uma tela onde os usuários logados podem participar de uma
disputa de lance.

[X] Ao enviar um lance, o sistema deve verificar se o valor é menor que o valor de
referência e menor que o último lance, respeitando o intervalo entre lances.

[X] O usuário deve receber um alerta em caso de erro e sucesso no seu lance.

## Funcionalidades do Backend:

[] Implementar uma API que permita a criação de disputas e lances.

[] As disputas devem iniciar automaticamente após o término da anterior, com um limite de tempo de 10 minutos para cada disputa.

## Requisitos do teste:

[X] Entrega em 5 dias corridos;

[X] Desenvolver utilizando Nestjs e TypeScript.

[X] Implementar autenticação JWT para permitir apenas usuários logados acessem a aplicação

[X] Usar um banco de dados SQL para armazenar dados do aplicativo. (Opcional)

[X] Implementar WebSocket para atualização em tempo real. (Opcional)

[X] Usar Class Validator para validar dados de entrada de requisições. (Opcional)

## Rodando com Docker

- Na primeira vez, altere a configuração do arquivo src/database.providers.ts
 Coloque o campo synchronize como true "synchronize: true". Após, volte este campo para false.

- Também na primeira vez que rodar, talvez o backend se monte antes do banco de dados.
 Pois, o banco ainda está montando os arquivos.

 Se isto ocorrer, é parar os conteiners e rodar de novo.

```bash

$ docker-compose up --build

# Depois os apps estarão disponíveis nos endereços abaixo:
# frontend: http://localhost:5173/
# backend: http://localhost:3001/api-docs

```
## Installation

## Instalação sem docker

```bash

# Configurar/Instalar mysql or mariadb ou suba o mysql com "docker-compose up db"
# Setar .env file usando o .env.exemple as exemple

$ npm i

```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm i
$ npm run test

# e2e tests
# Está precisando subir o dbtest em separado
$ docker-compose up dbtest
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Author - [Renan Torres](https://www.linkedin.com/in/renan-torres-3ba43560/)



