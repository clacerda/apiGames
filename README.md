# API DE GAMES

Esta API é utilizada para cadastrar, alterar, buscar e deletar games. Ela é desenvolvida com NODE.JS, Sequelize, Express, MySQL e autenticação com JWT.

## EndPoints

### GET/games
Responsável por retonar a listagem de games cadastrados no banco de dados.
#### Parâmetros:
Nenhum
#### Respostas:
##### 200 - > OK, 401 - > Falha na autenticação
Exemplo de resposta 200 (ok)
```
{
        "id": 1,
        "title": "mega mario 23",
        "year": 2020,
        "price": 100,
        "createdAt": "2022-05-02T03:00:00.000Z",
        "updatedAt": "2022-05-07T17:09:52.000Z"
    },
    {
        "id": 2,
        "title": "Super mario bross",
        "year": 1989,
        "price": 200,
        "createdAt": "2022-05-02T03:00:00.000Z",
        "updatedAt": "2022-05-02T03:00:00.000Z"
    },
    {
        "id": 3,
        "title": "pokemon gb gold",
        "year": 2000,
        "price": 50,
        "createdAt": "2022-05-02T03:00:00.000Z",
        "updatedAt": "2022-05-02T03:00:00.000Z"
    }

```

### GET/game/:id
Responsável por retornar um game de acordo com o ID passado.
#### Parâmetros:
Id - Integer

#### Respostas:
##### 200 - > OK, 400 -> Valor enviado incorreto, 404 -> Não encontrado, 401 - > Falha na autenticação

Exemplo de resposta:
```
{
    "id": 2,
    "title": "Super mario bross",
    "year": 1989,
    "price": 200,
    "createdAt": "2022-05-02T03:00:00.000Z",
    "updatedAt": "2022-05-02T03:00:00.000Z"
}
```

### POST/game
Rota responsável pela criação de um novo game.
#### Parâmetros:
Title - String (Exemplo: Super Mario Bros, Sonic, Battledield)
Year - String (Exemplo: 2010, 1989, 2001)
Price - String (Exemplo: 100, 200, 300)

#### Respostas:
##### 200 - > OK, 400 -> Valor enviado incorreto, 401 - > Falha na autenticação 

### DELETE/game/:id
Rota responsável pelo delete de um game já existente no banco de dados.
#### Parâmetros:
Title - String (Exemplo: Super Mario Bros, Sonic, Battledield)
Year - String (Exemplo: 2010, 1989, 2001)
Price - String (Exemplo: 100, 200, 300)
#### Respostas:
##### 200 - > OK, 400 -> Valor enviado incorreto, 401 - > Falha na autenticação 
Exemplo de chamada:
```
DELETE: http://localhost:8080/game/11
```
Return:
```
OK
```

### PUT/game/:id
Responsável por alterar um game já existente no banco de dados.
#### Parâmetros:
Title - String (Exemplo: Super Mario Bros, Sonic, Battledield)
Year - String (Exemplo: 2010, 1989, 2001)
Price - String (Exemplo: 100, 200, 300)

#### Respostas:
##### 200 - > OK, 400 -> Valor enviado incorreto, 401 - > Falha na autenticação

