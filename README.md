## Autenticação de usuários
A autenticação de usuários é um processo crítico em sistemas digitais que garante que somente indivíduos autorizados possam acessar determinadas informações ou funcionalidades de um aplicativo ou website. 
Esse processo envolve a verificação da identidade de um usuário por meio de credenciais, como nome de usuário e senha, antes de conceder acesso ao sistema.

## Principais Componentes:

Cadastro de Usuário:

Os usuários criam uma conta fornecendo informações básicas, como nome, email, e senha. Em alguns casos, é possível adicionar uma camada adicional de segurança, como a verificação de email ou número de telefone.
Login:

Durante o login, o usuário insere suas credenciais (geralmente, nome de usuário/email e senha) para acessar o sistema.
As credenciais são verificadas em relação aos dados armazenados no banco de dados. Se corresponderem, o acesso é concedido.
Armazenamento Seguro de Senhas:

As senhas são armazenadas no banco de dados de forma criptografada, geralmente usando algoritmos de hashing como bcrypt ou Argon2, para proteger as informações do usuário em caso de violação de dados.
Autenticação Multifator (MFA):

Além da senha, o sistema pode exigir um segundo fator de autenticação, como um código enviado por SMS, um aplicativo autenticador, ou uma chave de segurança, adicionando uma camada extra de proteção.
Tokens de Autenticação:

Após a verificação bem-sucedida das credenciais, o sistema gera um token de autenticação (como JWT - JSON Web Token), que é usado para identificar o usuário em sessões subsequentes sem a necessidade de repetir o login.
Gestão de Sessões:

O sistema gerencia a sessão do usuário, garantindo que, uma vez autenticado, o usuário possa navegar pelas diferentes partes do sistema sem precisar se autenticar repetidamente.
Sessões podem expirar após um determinado período de inatividade, exigindo que o usuário faça login novamente.
Recuperação de Senha:

Se o usuário esquecer a senha, a autenticação de usuários geralmente inclui um fluxo de recuperação de senha, onde um link ou código de redefinição é enviado ao email ou telefone cadastrado.
Permissões e Níveis de Acesso:

Usuários podem ter diferentes níveis de acesso com base em seus papéis ou permissões, como administrador, editor, ou visualizador. Isso garante que os usuários só possam acessar as funcionalidades e dados relevantes para sua função.

## Benefícios da Autenticação de Usuários:
Segurança: Protege os dados e recursos do sistema contra acessos não autorizados.
Personalização: Permite que cada usuário tenha uma experiência personalizada com base em suas preferências e histórico.
Rastreamento e Auditoria: Registra atividades dos usuários para rastreamento de ações e auditorias de segurança.

A autenticação de usuários é um componente essencial para qualquer sistema que manipula informações sensíveis ou precisa diferenciar o acesso a funcionalidades com base na identidade do usuário. 
Ela é fundamental para a segurança e a personalização da experiência do usuário.

## Dificuldades adquiridos nesse projeto 
Rodar o servidor na porta 4000 localmente e entender sobre o mustache. 

### Pré-requisitos globais: 
`npm install -g nodemon typescript ts-node` 

### Instalação 
`npm install` 

### Para rodar o projeto 
`npm run start-dev`

### Depedências do Node 

-[Npm](https://www.npmjs.com/) 

-[Express](https://expressjs.com/pt-br/)

-[nodemon](https://nodemon.io/) 

-[dotenv](https://www.npmjs.com/package/dotenv)
