# Login Consumer - A GraphQL Angular Project

<div align="center">
  <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular" width="80" />
  <img src="https://www.apollographql.com/docs/apollo-server/assets/apollo-server-social.png" alt="Apollo Server" width="80" />
  <img src="https://graphql.org/img/logo.svg" alt="GraphQL" width="80" />
</div>

## Visão Geral

Este projeto foi desenvolvido para consumir a API [User-Auth-Nestjs-Graphql](https://github.com/Colherinhas/User-Auth-Nestjs-Graphql), utilizando o [Angular CLI](https://github.com/angular/angular-cli) versão 18.1.3 em conjunto com o [Apollo Client](https://www.apollographql.com/docs/react/) para gerenciar as requisições GraphQL.

## Tecnologias Utilizadas

- **Angular 18.1.3**: Framework para o desenvolvimento front-end
- **GraphQL**: Linguagem de consulta para APIs
- **Apollo Client**: Cliente para integração com GraphQL
- **SCSS**: Pré-processador CSS para estilização

## Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) e [npm](https://www.npmjs.com/) instalados
- [Git](https://git-scm.com/) para clonar o repositório
- API back-end [User-Auth-Nestjs-Graphql](https://github.com/Colherinhas/User-Auth-Nestjs-Graphql) em execução

### Instalação e Execução

1. Clone este repositório para o seu ambiente local
2. Execute `npm run main` para instalar as dependências e iniciar o projeto
   - Os comandos específicos estão detalhados na seção `scripts` do arquivo `package.json`
3. Aguarde até ver a mensagem "Application bundle generation complete"
4. Acesse a aplicação em [http://localhost:4200/](http://localhost:4200/)

Para inicializações subsequentes, você pode utilizar simplesmente `ng serve` ou `npm start`. A aplicação será recompilada automaticamente sempre que os arquivos forem modificados.

## Estrutura do Projeto

- **Arquitetura Modular**: O projeto não utiliza componentes stand-alone, mas sim uma estrutura baseada em módulos
- **Estilização**: Implementada com SCSS para uma melhor organização dos estilos
- **Navegação**: Utiliza o `RouterModule` para gerenciamento de rotas entre telas
- **Formulários**: Algumas páginas utilizam `FormsModule` e `CommonModule` para comportamentos específicos
- **Comunicação com API**: As requisições GraphQL são gerenciadas pelo Apollo Client
  - A configuração da URL da API pode ser modificada no arquivo `graphql.module.ts`
- **Organização**: O projeto é dividido em módulos que são importados no `app.module.ts`
- **Autenticação**: O módulo GraphQL configura o serviço Apollo com as configurações necessárias para autenticação e envio de contexto
