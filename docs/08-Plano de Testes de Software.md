# Plano de Testes de Software

| **Caso de Teste** 	|  **CT01 – Cadastro de Usuários** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-001 - O sistema deve cadastrar usuários. O Cadastro deve conter : Nome completo, função do usuário no sistema (role), email e senha. |
| Objetivo do Teste 	| Observar se o usuário conseguiu efetuar o cadastro na aplicação. |
| Passos 	|  - Acessar o navegador - Informar o endereço do site https://localhost:3000/Cadastro <br> - Clicar em "Cadastra-se" <br> - Preencher os campos obrigatórios (nome, sobrenome, e-mail, senha, CPF/CNPJ, )  <br> - Clicar em "Cadastrar-se" <br>|
|Critério de Êxito | - O cadastro foi realizado com sucesso. |
|:---:	|:---:	|
| **Caso de Teste** 	|  **CT02 – Acesso ao Cadastro** 	|
|	Requisito Associado 	| RF-002 - O sistema deve permitir acesso aos dados cadastrais dos usuários. |
| Objetivo do Teste 	| Verificar se o usuário consegue visualizar/alterar os próprios dados cadastrais |
| Passos 	|  - Acessar o navegador - Informar o endereço do site https://localhost:3000/Login <br> - Preencher os campos com dados corretos - Clicar em Login  <br> - Clicar em "Pefil" na barra de navegação <br> - Alterar os dados de acordo com a necessidade <br>|
|Critério de Êxito | - Os dados foram alterados  com sucesso. |
