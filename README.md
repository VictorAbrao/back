# BACK

Projeto back crud de cards.

## Configurações

As configurações do projeto podem ser definidas no arquivo `.env`. Para iniciar o projeto, crie uma cópia do arquivo `.env.example` e renomeie-a para `.env`. Em seguida, atualize as configurações no arquivo `.env` conforme necessário.

## Instalando dependências

Para instalar as dependências do projeto, execute o comando `npm install`.

## Compilando o projeto

Para compilar o projeto, execute o comando `npm run build`. Isso irá compilar o código TypeScript em JavaScript e gerar o código compilado na pasta `dist`.

## Executando o projeto

Para executar o projeto, siga as etapas abaixo:

1. Execute o comando `docker-compose up -d` para iniciar o banco de dados e a aplicação em contêineres separados.

2. Execute o comando `npm run typeorm:migration:run` para aplicar as migrações do banco de dados.

3. Execute o comando `npm run dev` para aplicar as migrações do banco de dados.

Depois de concluir essas etapas, a aplicação deve estar acessível em `http://localhost:PORT`, onde `PORT` é a porta definida no arquivo `.env`.

## Estrutura de pasta

- `src`: Contém o código-fonte da aplicação.

- `src/app.ts`: O ponto de entrada da aplicação.

- `src/config`: Contém as configurações da aplicação.

- `src/controllers`: Contém os controladores da aplicação.

- `src/entities`: Contém as definições de entidades do TypeORM.

- `src/middlewares`: Contém os middlewares da aplicação.

- `src/migrations`: Contém as migrações do TypeORM.

- `src/repositories`: Contém os repositórios do TypeORM.

- `src/routes`: Contém as definições de rotas da aplicação.

- `tsconfig.json`: As configurações do TypeScript.

- `Dockerfile`: O arquivo de configuração do Docker para a aplicação.

- `docker-compose.yml`: O arquivo de configuração do Docker Compose para o projeto.

- `.env`: O arquivo de configuração para as variáveis de ambiente da aplicação.

- `.env.example`: Um exemplo de arquivo `.env`.

## Comandos úteis

- `npm install`: Instala as dependências do projeto.

- `npm run build`: Compila o código TypeScript em JavaScript e gera o código compilado na pasta `dist`.

- `npm start`: Inicia a aplicação em modo de produção.

- `npm run typeorm:migration:run`: Aplica as migrações do TypeORM.

- `docker-compose up -d`: Inicia o banco de dados e a aplicação em contêineres separados.