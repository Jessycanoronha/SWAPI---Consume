# Star Wars the game by Jéssyca
<img src="/capa.png" alt="image"/>
Repositório criado para star wars the game, que consite no desenvolvimento de um jogo para descobrir o nome de um planeta de uma das franquias mais conhecidas do mundo, Star Wars. No card, são exibidas as informações de nome, terreno, clima e em quantos filmes esse planeta aparece.

Star wars game desenvolvido com react, react router e axios.

### Conteúdo
- Visão geral do conteúdo
    - [Tecnologias e recursos utilizados](#tecnologias)
    - [Documentação da SWAPI API](#documentação)
    - Informações iniciais
    - Clonando o repositório
    - [Versão compilada](#versão compilada)
    - [Como instalar](#instalando dependências)
        + Browser
        + Local
  

### Visão geral do projeto

#### Tecnologias
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5)
- [SCSS](https://sass-lang.com/documentation/syntax)
- [React.js](https://www.reactjs.org)
- Axios, para fazer requisições a API
- Um pouco de[Jquery](https://jquery.com/)
- Photoshop
- Figma para o [protótipo](https://www.figma.com/file/o5wZP76U80DLHAfiobQswT/SWAPI?node-id=0%3A1)
- [Background parallax](https://codemyui.com/parallax-pixel-stars-using-pure-css/)
- [Intro star wars](https://dev.to/christopherkade/developing-the-star-wars-opening-crawl-in-htmlcss-2j9e)
- [Loader](https://codepen.io/XABOK/pen/OXAzXP) 

### Recursos externos
- [Create-react-app](https://github.com/facebook/create-react-app) 
- [Spin Kit](https://tobiasahlin.com/spinkit/)
- [Netlify](https://www.netlify.com/), para hospedar 

### Documentação Swapi API

A documentação da API utilizada está disponível em :[SWAPI](https://swapi.co)

#### Para realizar as ações a seguir, é necessário ter instalado em seu computador o _git_ e e o _nodejs_.

* [_Git_](https://git-scm.com)
* [_Node.js - Windows/Mac_](http://nodejs.org/en/download)
* [_Node.js - unix systems_](http://nodejs.org/en/download)

### Clonando o repositório

Para efetuar as alterações de código, é necessário que efetue a clonagem do repositório. ANtes de clonar é necessário que realize um _fork_, criar uma cópia para o seu github. Para isso é necessário subir a página e clicar no botão com o nome _fork_ e aguardar uns minutos. Logo apóes é só clicar em _clone or download_ e copiar a url do repositório
Abrindo o git bash para clonar o repositório, é necessário digitar a seguinte linha de código e informar a URL copiada anteriormente.

```
git clone <url-do-repositorio>

```
### Instalando as dependências
Basta abrir o prompt de comando do Node.js, caso seja linux utilize o terminal. Entre na pasta do repositório e insira o seguinte comando.
```
yarn install
```
## Servidor de desenvolvimento
```
yarn run serve
```
O código vai rodar o plugin _serve_ e gerar um servidor de desenvolvimento (```http://localhost:8080```)


### Versão compilada

Use o seguinte comando para obter a versão compilada, ou, build do projeto. Essa pasta foi a que usei para dar deploy no netlify.
```yarn run build```

## Melhorias

Pesquisei e vi que seria interessante armazenar o cache, para não ser necessário fazer muitas requisições, o que pode afetar na performance.

