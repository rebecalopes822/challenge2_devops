Node.js com PostgreSQL - DevOps Tools e Cloud Computing



**Descrição do Projeto**

Este projeto demonstra uma aplicação simples em Node.js que se conecta a um banco de dados PostgreSQL. Ele foi criado para a disciplina de DevOps Tools e Cloud Computing, com o objetivo de exercitar o uso de Docker, Docker Compose e o deployment em uma máquina virtual na nuvem. O projeto é configurado para rodar em ambiente de produção usando Docker e pode ser facilmente implementado em qualquer provedor de nuvem.



**Estrutura do Projeto**

\- Express: Servidor Node.js para manipulação de rotas.

\- PostgreSQL: Banco de dados relacional para armazenar informações.

\- Docker e Docker Compose: Para facilitar o deployment e gerenciamento de contêineres.

\- Cloud Provider: Implementado em uma VM na nuvem (exemplo: Azure, AWS ou Google Cloud).



**Requisitos**

\- Node.js

\- Docker e Docker Compose

\- Conta em um provedor de nuvem com suporte a máquinas virtuais



**Configuração e Deploy**

Passo 1: Provisionar a VM na Nuvem

1\. No seu provedor de nuvem, crie uma máquina virtual com sistema operacional Linux ou Windows.

2\. Configure as dependências necessárias, como Docker e Docker Compose, na VM.

3\. Assegure-se de monitorar a saúde da VM, desempenho e dependências de rede.

Passo 2: Clonar o Repositório

Clone este repositório na máquina virtual:

git clone https://github.com/seu-usuario/nome-do-repositorio.git

cd nome-do-repositorio

Passo 3: Configurar Variáveis de Ambiente

Configure as variáveis de ambiente necessárias para o PostgreSQL no arquivo docker-compose.yml. Certifique-se de alterar os valores de POSTGRES\_USER, POSTGRES\_PASSWORD e POSTGRES\_DB conforme desejado.

Passo 4: Construir e Iniciar os Contêineres

Execute os seguintes comandos para construir e iniciar os contêineres:

docker-compose up --build -d

Isso criará e iniciará dois contêineres:

\- app: A aplicação Node.js, que estará acessível na porta 8080.

\- db: O banco de dados PostgreSQL.

Passo 5: Testar a Aplicação

\- Para verificar se a aplicação está funcionando, acesse http://localhost:8080/ na VM.

\- Para testar a conexão com o banco de dados, acesse http://localhost:8080/db.





**Estrutura de Arquivos**

\- app.js: Código principal da aplicação em Node.js.

\- Dockerfile: Instruções para construir a imagem Docker do aplicativo.

\- docker-compose.yml: Arquivo de configuração para orquestrar os contêineres da aplicação e do banco de dados.

\- package.json: Configurações e dependências da aplicação Node.js.





**Instruções para o Dockerfile e Docker Compose**

\- O projeto utiliza uma imagem base node:14-slim para o contêiner da aplicação.

\- Para o PostgreSQL, utiliza postgres:13-alpine, uma imagem leve e otimizada.

\- A aplicação é executada em um usuário não-administrativo para maior segurança.





**Deploy**

Após os testes, o projeto pode ser configurado para deployment em produção. Para isso:

Remova os contêineres de teste com docker-compose down.

Realize as configurações adicionais de segurança na VM.

Configure backups automáticos do banco de dados.

