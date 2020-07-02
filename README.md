# Be The Hero

Projeto criado para ajudar as ONGs em sua divulgação, facilitando assim com que as pessoas as encontrem e contribuam com essas entidades através de doações.

## Introdução

Saudações!!!

Esse projeto foi construído durante a  __11ª Semana OmniStack__ realizada pela [Rocketseat](https://rocketseat.com.br/).

## Observações

* O termo __dispositivo móvel__, durante todo a leitura desse arquivo `readme.md`, refere-se apenas aos __smartphones__ e __tablets__;

* Na seção [__Organização do Projeto__](#organização-do-projeto), detalhei quais são as partes que compõem esse projeto pois, dessa forma, ficará claro compreender quais são seus respectivos __escopos__. 

## Organização do Projeto

O projeto está dividido em três partes, são essas:

* __Backend__, em que encontra-se a __regra de negócio__ e as __funcionalidades__ desse projeto;

* __Frontend__, em que encontra-se a __interface__ usada em __navegadores web__ e, por último o;

* __Mobile__, em que encontra-se a __interface__ usada pelo __App__ em __dispositivos móveis__.

__Frontend__ refere-se ao uso da __interface a partir de navegadores web__, ___indiferentemente_ do tamanho e/ou resolução de tela__, ou seja, esse acesso pode ocorrer também a partir de __navegadores web__ presentes em __dispositivos móveis__.

__Mobile__ refere-se ao uso da __interface a partir de um App de dispositivo móvel__.

Em resumo, entenda que o __Frontend__ e o __Mobile__ ___são coisas diferentes___. Na verdade, a ___única_ coisa em comum__ é que o __Backend _serve_ recursos__ tanto para o __Frontend__ quanto ao __Mobile__, porém cada um deles as utilizam de acordo com seu respectivo __escopo__.

## Tecnologias

Abaixo segue a lista com as principais tecnologias dentre todas aquelas que foram utilizadas nesse projeto:

* [Celebrate](https://github.com/arb/celebrate) - Validador de dados presentes na requisição a partir de uma rota que disponibiliza um determinado recurso;
* [Express](https://expressjs.com/) - Framework JavaScript responsável pela construção do servidor HTTP;
* [Knex](http://knexjs.org/) - Abstração a partir de funções JavaScript para o uso de diferentes BD (Banco de Dados);
* [Sqlite3](https://github.com/kriasoft/node-sqlite) - SGBD (Sistema Gerenciador de Banco de Dados);
* [Axios](https://github.com/axios/axios) - Centralizador dos endpoints da api em uma mesma `BASE_URL` para auxilar na criação das requisições no código;
* [React](https://reactjs.org/) - Framework JavaScript responsável pela construção da SPA (Single Page Application) no __Frontend__;
* [React Native](https://reactnative.dev/) - Framework JavaScript responsável pela construção do App para dispositivos móveis no __Mobile__;
* [Expo](https://expo.io/) - Ferramenta que auxilia na construção do App para dispositivos móveis.

> Quando digo "principais tecnologias" não estou dizendo que as demais presentes no projeto (em especial as que são __dependenciais de desenvolvimento__ como [Jest](https://jestjs.io/) e [Supertest](https://github.com/visionmedia/supertest)) são desnecessárias. Só não dei ênfase a elas pois eu não as integrei de forma completa ao projeto e ainda preciso estudar mais a fundo elas.

## Pré-requisitos

Para rodar esse projeto é necessário ter as tecnologias abaixo com suas respectivas versões:

* [Node.js 12.13.0](https://nodejs.org/download/release/v12.13.0/)
* NPM 6.12.0

> Por padrão, quando se instala o Node.js, ele vem com o NPM também disponível para uso sem a necessidade de instalá-lo. 

Certifique-se de, quando for instalar o `Node.js 12.13.0`, ele venha com a versão `6.12.0` do `NPM`. Podemos coferir isso com o seguinte comando:

```sh
$ npm -v
```

## Instalação

Com a versão correspondente daquelas tecnologias definidas em [__Pré-requisitos__](#pre-requisitos), entre dentro das pastas `/backend`, `/frontend` e `/mobile` e execute, em cada uma delas, o seguinte comando:

```sh
$ npm install
```

### /backend
----

#### API

As APIs serão usadas para fazermos requisições ao servidor HTTP presente no __backend__. Abaixo segue uma tabela com cada uma delas:

| Verbo  | API                              | Descrição                                                                                     |
|--------|----------------------------------|-----------------------------------------------------------------------------------------------|
| GET    | `http://localhost:3333/incidents`  | Busca por todas os __Casos__ cadastradas. ~~Veja o exemplo~~ (**_Em breve_**)                 |
| GET    | `http://localhost:3333/ongs`       | Busca por todas as __ONGs__ cadastradas.  ~~Veja o exemplo~~ (**_Em breve_**)                 |
| GET    | `http://localhost:3333/profile`    | Busca pelo __Perfil__ da __ONG__ cadastrada com seus respectivos __Casos__. ~~Veja o exemplo~~ (**_Em breve_**) |
| POST   | `http://localhost:3333/incidents`  | Cria um novo registro de __Caso__.  ~~Veja o exemplo~~ (**_Em breve_**)                       |
| POST   | `http://localhost:3333/ongs`       | Cria um novo registro de __ONG__.  ~~Veja o exemplo~~ (**_Em breve_**)                        |
| POST   | `http://localhost:3333/profile`    | Cria um novo vínculo de __Caso__. associado a uma respectiva __ONG__.  ~~Veja o exemplo~~ (**_Em breve_**)       |
| DELETE | `http://localhost:3333/incidents` | Deleta um __Caso__ cadastrado.  ~~Veja o exemplo~~ (**_Em breve_**)                                            |

#### Banco de Dados

Temos que ter um BD do projeto rodando na máquina local, do contrário, não será possível fazer as operações de `Create` (Criação), `Read` (Consulta), `Update` (Atualização) e `Delete` (Destruição) ou, de forma abreviada, o `CRUD` que corresponde as opereções principais que fazemos ao usar o BD.

Nesse projeto, quem se incumbe de cuidar da criação do BD e das suas operações CRUD é o `Knex.js`. 

Dado a sua necessidade, dentro da pasta `/backend`, execute o comando a seguir:

```sh
# Instala na máquina, de forma 'global', o 'CLI' do 'knex'

$ npm install knex -g

# Executa o(s) arquivo(s) de criação do BD que estão dentro da pasta 'src/database/migrations'

$ knex migrate:latest
```

Após a criação do BD, podemos comaçar a usar as operações CRUD ___mas___, antes disso, temos que colocar o `servidor HTTP` para trabalhar. Isso é necessário pois essa será a forma que o __Frontend__ e o __Mobile__ consiguirá fazer as requisições ao __Backend__ e ele, por sua vez, irá processar, preparar e responder a quem a solicitou.

Dado as informações acima, execute:

```sh
# Inicia o "servidor HTTP" presente no "/backend"

$ npm start
```

### /frontend
----

```sh
# Inicia o "/frontend"

$ npm start
```

### /mobile
----

```sh
# Instala na máquina, de forma 'global', o 'CLI' do 'expo'

$ npm install -g expo-cli

# Inicia o "/mobile"

$ npm run start
```


