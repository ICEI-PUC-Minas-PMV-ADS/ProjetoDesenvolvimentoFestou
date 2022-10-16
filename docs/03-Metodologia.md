
# Metodologia

A metodologia do projeto define as ferramentas que serão utilizadas pela equipe, tanto para a manutenção dos códigos e demais artefatos, quanto para a organização do time na execução das tarefas do projeto.

A seguir apresentamos as definições sobre o ambiente utilizado para desenvolvimento do projeto e as ferramentas utilizadas para organização e realização dos processos.

## Relação de Ambientes de Trabalho

|Ambiente| Plataforma |Link de Acesso|
|--------------------|-------------------------------|-------------------------------|
|Repositório  | Github | https://github.com/ICEI-PUC-Minas-PMV-ADS/ProjetoDesenvolvimentoFestou|
|Documentação | Github |https://github.com/ICEI-PUC-Minas-PMV-ADS/ProjetoDesenvolvimentoFestou/tree/main/docs |
|Gestão | Github|https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/192 |
|Contato e Gerenciamento | WhatsApp + Microsoft Teams  |   |
|Projeto de Interface | Figma |   
|Diagramas | LucidChart| [Link](https://lucid.app/lucidchart/b781468e-8b72-4445-9c9a-2ffb8191abfe/edit?view_items=RAP00183pjvC%2CuxP0cDD471G1%2CbAP0aMUeDMkJ%2Ci5P0iP~D8QdK%2CP7P0R6OxOEMW%2CJaQ06MPikabB%2CK~P0dsPWNzhr%2CnkQ0D3DlzMyO%2CoDP0eY-jCnjQ%2CCXP0~I2jKhIN%2CZhQ0ifMu4Vjo%2C3CP0Bbl7Tp_Y%2Cs2P0FkMk3cGT%2CTXP0lwj9POvr%2CTTP0z.eSlX.O%2Cw6P0M0~1hKxo%2CyUP0Ao36lFBe%2C4UP0TmS0.dHb%2CeiQ0atMmtdVR%2CK2P0y-x1LNuw%2C65P0sD1LOUpw%2Cg~P0FhauPHk7%2C5~P038M-YZxz%2CHmQ0ja1XtM41%2CBkQ0j~FI~sqg%2CpcQ014C8dUGp%2CVkQ03u2QjU6s%2CQaQ070p8_v5U&invitationId=inv_636674be-5510-4249-82d9-aa0f08acd900)

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com/ICEI-PUC-Minas-PMV-ADS/ProjetoDesenvolvimentoFestou)
foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `testing`: versão em testes do software, para versões que já finalizaram seu desenvolvimento e estão em estado de testes
- `dev`: versão de desenvolvimento do software

Utilizamos a `main` branch para registrar a versão mais estável e finalizada da aplicação, que já está testada e validada, atendendo os requisitos e entregas que foram levantados nas historias.

A Branch `testing` contém a versão que foi desenvolida na ultima sprint mas que ainda está sendo validada e testada para garantir que atende os requisitos e definições de feito determinadas nas historias.

Já para a parte da aplicação que ainda está sendo desenvolvida utilizamos a Branch `dev`, que contém partes de codigo que ainda estão em produção e não foram finalizadas para testes.

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: Tarefas relacionadas a melhorias ou acréscimos à documentação do projeto
- `bug`: uma funcionalidade da aplicação encontra-se com problemas
- `enhancement`: uma funcionalidade que está na main ou na testing branch precisa ser melhorada.
- `feature`: uma nova funcionalidade precisa ser introduzida

As etiquetas de issues 

Discuta como a configuração do projeto foi feita na ferramenta de versionamento escolhida. Exponha como a gerência de tags, merges, commits e branchs é realizada. Discuta como a gerência de issues foi realizada.

> **Links Úteis**:
> - [Microfundamento: Gerência de Configuração](https://pucminas.instructure.com/courses/87878/)
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
>  - [Comparando fluxos de trabalho](https://www.atlassian.com/br/git/tutorials/comparing-workflows)
> - [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
> - [The gitflow workflow - in less than 5 mins](https://www.youtube.com/watch?v=1SXpE08hvGs)

## Gerenciamento de Projeto

### Divisão de Papéis

Apresente a divisão de papéis entre os membros do grupo.

Exemplificação: A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento. A equipe está organizada da seguinte maneira:
- Scrum Master: Isaac Oliveira;
- Product Owner: Stephanie Cendrethe;
- Equipe de Desenvolvimento: Matheus Silvino, Stephanie Cendrethe, Isaac Oliveira;
- Equipe de Design: Matheus Silvino.


### Processo

Coloque  informações sobre detalhes da implementação do Scrum seguido pelo grupo. O grupo deverá fazer uso do recurso de gerenciamento de projeto oferecido pelo GitHub, que permite acompanhar o andamento do projeto, a execução das tarefas e o status de desenvolvimento da solução.

Utilizaremos o Framework Ágil Scrum para desenvolvimento do projeto, que oferece uma ganho de escala e organziação de tarefas complexas em histórias gerenciáveis que podem ser diluidas em outras pequenas tarefas que faiclitam o entendimento e andamento do desenvolvimento,

Para organização das tarefas da equipe foi utilizado a função de [projetos no GitHub](https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/192/views/1), realizando a visualização do tipo *Board*.
As tarefas terão os seguintes status:
- **Product Backlog**: Tarefas que foram refinadas e mapeadas para realização mas que ainda não entrarão na sprint atual
- **To Do**: São as tarefas que foram planejadas para desenvolvimento na sprint atual
- **In Progress**: São as tarefas que estão sendo desenvolvidas atualmente.
- **In Review**: Quando uma tarefa é finalizada ela necessita de passar por revisão de entrega para garantir que estão cumprindo os requisitos e definições de completa
- **Done**: São as tarefas que foram finalizadas e revisadas.
 

### Ferramentas

As ferramentas empregadas no projeto são:

- Editor de código: O editor de código utilizado foi o software [Visual Studio Code](https://code.visualstudio.com/), pela facilidade de desenvolvimento que oferece além da facilidade de utilização que os membros do grupo já tinha.
Também foi utilizado o [GitHub.dev](github.dev), que é a ferramenta de edição de codigo web do GitHub, pois não necessita de instalação de software.

- Ferramentas de comunicação: Para comunicação entre os integrantes da equipe foi utilizado um grupo no aplicativo WhatsApp pela agilidade de facilidade de resoluções de duvidas no dia a dia. Para comunicação com o orientador foi utilizada a ferramenta [Microsoft Teams](https://www.microsoft.com/en-us/microsoft-teams/group-chat-software) 

- Ferramentas de desenho de tela (_wireframing_): Para o desenho do projeto de interface foi utilizado a Ferramenta [Figma](figma.com) pois é uma ferramenta bem utilizada no mercado e que os membros do grupo já tinham afinidade de utilização.

- Ferramenta de Diagramas: A ferramentas de diagramas foi o [LucidChart](https://lucid.app/lucidchart/b781468e-8b72-4445-9c9a-2ffb8191abfe/edit?view_items=RAP00183pjvC%2CuxP0cDD471G1%2CbAP0aMUeDMkJ%2Ci5P0iP~D8QdK%2CP7P0R6OxOEMW%2CJaQ06MPikabB%2CK~P0dsPWNzhr%2CnkQ0D3DlzMyO%2CoDP0eY-jCnjQ%2CCXP0~I2jKhIN%2CZhQ0ifMu4Vjo%2C3CP0Bbl7Tp_Y%2Cs2P0FkMk3cGT%2CTXP0lwj9POvr%2CTTP0z.eSlX.O%2Cw6P0M0~1hKxo%2CyUP0Ao36lFBe%2C4UP0TmS0.dHb%2CeiQ0atMmtdVR%2CK2P0y-x1LNuw%2C65P0sD1LOUpw%2Cg~P0FhauPHk7%2C5~P038M-YZxz%2CHmQ0ja1XtM41%2CBkQ0j~FI~sqg%2CpcQ014C8dUGp%2CVkQ03u2QjU6s%2CQaQ070p8_v5U&invitationId=inv_636674be-5510-4249-82d9-aa0f08acd900) pois é uma ferramente completa que fornece também video aulas e exemplos de diagramas que apoiam em sua construção.

