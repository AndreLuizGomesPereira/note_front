# Iniciaremos o nosso projeto
- **npx create-react-app (myapp)** para rodar o React.
- Para rodar o projeto poderemos usar **npm start** ou **yarn start**.
- Arquivo principal src/app.js.

# Instalando as principais bibliotecas do projeto.
- **npm i react-router-dom --save** para utilizarmos roteamento.
- **npm i axios --save** para fazermos chamadas web dentro do projeto.
- **npm i node-sass --save** para estilirmos o nosso projeto.
- **npm i bulma --save** estilização do projeto.
- **npm i rbx --save** utilizaremos para estilizar e componentes.
- **npm i moment --save** utilizaremos para formatar datas.
- **npm i @fortawesome/fontawesome-svg-core --save** Fontes para icones.
- **npm i @fortawesome/free-solid-svg-icons --save** Fontes para icones.
- **npm i @fortawesome/react-fontawesome --save** Fontes para icones.

# Organizar pastas do nosso projeto.
- Primeiro criar esse diretório src/assets/images.
- Segundo criar outro diretório src/components.
- Terceiro criar outro diretprio src/screens.
- Por utlimo criaremos um diretório src/styles.
- Dentro da pasta styles, precisaremos criar um arquivo _custom_colors.scss.
- No nosso app.js nos vamos importar os componentes que estão disponiveis na documentação do RBX.

# Criação do Header
- Criar um diretorio src/components/header e o arquivo interno index.js.
- Criaremos um arquivo header.scss de estilo no diretorio src/styles/.
- Adicionar no Header um link importando o componente LINK para inserir link de retorno na Logomarca.
- Adicionar Colunas para navegar nas páginas das rotas CADASTRO e LOGIN.

# Criação da Tela Home.
- Criar um diretorio src/screens/home e dentro desse diretorio um arquivo index.js.
- Criar um arquivo na pasta styles home.scss para estilização.
- Adicionar LINK para a página de registro.

# Criação das rotas
- Criaremos um arquivo no diretorio src routes.js.

# Iniciaremos sistema de navegação básica.
- Criaremos algumas screnss necessárias dentro do nosso sistema.
- Diretorio criado auth/login e auth/register, notes/index, users/edit, cada diretorio tera um arquivo base index.js.

# Iniciaremos criando o componentes para Registro.
- Criar um diretorio na pasta component auth/register_form/index.js.

# Iremos criar a conexão de login com a API.
- Iniciaremos com a rota da nossa screen auth/login/index.js.
- Iremos criar um component de formulario para o login.

# Vamos conectar a API.
- Vamos criar a pasta services com dois arquivos api.js e users.js.
- Vamos agora rodar a nossa API, porem iremos rodar o comando **nodemon start PORT=3001**.