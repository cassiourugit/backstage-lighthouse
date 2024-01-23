# POC - Backstage with Lighthouse Plugin

Esse projeto é uma POC do Backstage rodando em conjunto com o plugin do Lighthouse

## Requisitos
    Node v18
    Docker
    Yarn
## Como instalar o projeto principal?

    yarn install

## Como instalar o server do lighthouse

    cd lighthouse-server
    yarn install

## Como subir o docker com o PostgreSQL

    docker compose up

## Como criar a tabela do lighthouse no banco

Descubra o código do seu container utilizando o comando abaixo
    
    docker ps

Entre no container através do comando abaixo
    
    docker exec -it codigoDoContainer bash

Digite o comando abaixo para criar a tabela

    createdb -O dbuser -U dbuser -w lighthouse_audit_service

## Suba o serviço do lighthouse
Em um novo terminal, na raiz do projeto

    cd lighthouse-server
    node app.js

## Rodar o backstage
Em um novo terminal, na raiz do projeto

    yarn dev

Se tudo ocorreu bem, o backstage irá abrir no seu navegador, nesse endereço

    localhost:3000

Para rodar um teste, basta ir até o menu Components, escolher um dos componentes, clicar na aba Lighthouse clicar no botão para executar um novo teste