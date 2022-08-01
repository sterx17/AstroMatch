
# AstroMatch: Um Tinder Wannabe

A escola Labenu me desafiou a criar um Tinder Wannabe em ReactJS, com as seguintes regras:
- Precisa conter uma tela inicial, onde os perfis serão exibidos
- Precisa conter uma tela de matches, com a lista de todas as combinações.
- Precisa ter um botão de reset para recomeçar a busca por perfis.

## Demonstração

Insira um gif ou um link de alguma demonstração


## Dependências

Para rodar o projeto localmente, você precisará do Styled Components e do Axios.

Rode para instalar tudo:

``
npm install
``
## Documentação da API

#### Retorna todos os itens

```http
  GET /api/items
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna um item

```http
  GET /api/items/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### add(num1, num2)

Recebe dois números e retorna a sua soma.


## Autores

- [@sterx17](https://www.github.com/sterx17)


## Referência

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

