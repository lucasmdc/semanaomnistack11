# Be The Hero

Projeto criado para ajudar as ONGs em sua divulgação, facilitando assim com que as pessoas as encontrem e contribuam com essas entidades através de doações.

## Introdução

Saudações!!!

Esse projeto foi construído durante a  __11ª Semana OmniStack__ realizada pela [Rocketseat](https://rocketseat.com.br/).

## Observações

* A termo __dispositivo móvel__, durante todo a leitura desse arquivo `readme.md`, refere-se apenas aos __smartphones__ e __tablets__;

* Na seção [__Organização do Projeto__](#organização-do-projeto), detalhei quais são as partes que compõem esse projeto pois, dessa forma, ficará claro compreender quais são seus respectivos __escopos__. 

## Organização do Projeto

O projeto está dividido em três partes, são essas:

* __Backend__, em que encontra-se a __regra de negócio__ e as __funcionalidades__ desse projeto;

* __Frontend__, em que encontra-se a __interface__ usada em __navegadores web__ e, por último o;

* __Mobile__, em que encontra-se a __interface__ usada pelo __App__ em __dispositivos móveis__.

__Frontend__ refere-se ao uso da __interface a partir de navegadores web__, ___indiferentemente_ do tamanho e/ou resolução de tela__, ou seja, esse acesso pode ocorrer também a partir de __navegadores web__ presentes em __dispositivos móveis__

__Mobile__ refere-se ao uso da __interface a partir de um App de dispositivo móvel__.

Em resumo, entenda que o __Frontend__ e o __Mobile__ ___são coisas diferentes___. Na verdade, a ___única_ coisa em comum__ é que o __Backend _serve_ recursos__ tanto para o __Frontend__ quanto ao __Mobile__, porém cada um deles as utilizam de acordo com seu respectivo __escopo__.

## Tecnologias

Abaixo segue a lista com as principais tecnologias dentre todas aquelas que foram utilizadas nesse projeto:

* [Celebrate](https://github.com/arb/celebrate) - Validador de dados presentes na requisição a partir de uma rota que disponibiliza um determinado recurso
* [Express](https://expressjs.com/) - Framework JavaScript responsável pela construção do servidor HTTP
* [Knex](http://knexjs.org/) - Abstração a partir de funções JavaScript para o uso de diferentes Banco de Dados
* [Sqlite3](https://github.com/kriasoft/node-sqlite) - Banco de Dados
* [Axios](https://github.com/axios/axios) - Centralizador dos endpoints da api em uma mesma `BASE_URL` para auxilar na criação das requisições no código
* [React](https://reactjs.org/) - Framework JavaScript responsável pela construção da SPA (Single Page Application) no __Frontend__
* [React Native](https://reactnative.dev/) - Framework JavaScript responsável pela construção do App para dispositivos móveis no __Mobile__
* [Expo](https://expo.io/) - Ferramenta que auxilia na construção do App para dispositivos móveis

> Quando digo "principais tecnologias" não estou dizendo que as demais presentes no projeto (em especial as que são __dependenciais de desenvolvimento__ como [Jest](https://jestjs.io/) e [Supertest](https://github.com/visionmedia/supertest)) são desnecessárias. Só não dei ênfase a elas pois eu não as integrei de forma completa ao projeto e ainda preciso estudar mais a fundo elas.
