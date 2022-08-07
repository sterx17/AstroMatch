
# AstroMatch: Um Tinder Wannabe

A escola Labenu me desafiou a criar um Tinder Wannabe em ReactJS, com as seguintes regras:
- Precisa conter uma tela inicial, onde os perfis serão exibidos
- Precisa conter uma tela de matches, com a lista de todas as combinações.
- Precisa ter um botão de reset para recomeçar a busca por perfis.

## Demonstração

http://quick-skate.surge.sh/


## Dependências

Para rodar o projeto localmente, você precisará do Styled Components e do Axios.

Rode para instalar tudo:

``
npm install
``
## Documentação da API

#### Retorna todos os itens

```http
  GET /stephany/matches
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `aluno` | `string` | **Obrigatório** stephany |

#### Retorna um perfil não visto

```http
  GET /stephany/person
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `aluno`      | `string` | **Obrigatório** stephany |


## Autores

- [@sterx17](https://www.github.com/sterx17)