# Notes

# Descrição
-Esse projeto foi criado para treinar conhecimentos e criar um bloco de notas!

## Interfaces 

- O aplicativo consiste em quatro telas, Home, ChangeNotes,  ShowNotes e EditNotes. O objetivo final é fazer que o usuário consiga criar, salvar e editar as notas que forem criadas!

#### Guia das interfaces

- Home – Apresenta as notas e caso não tenha nenhuma nota criada há uma tela que diga para criar notas e assim verá elas.

<div align="center">
<img width="326" alt="Tela_Home" src="https://github.com/Lucas-Cussulini/My-Notes/blob/Main/Prints_Readme/Home.png">
</div>

- ChangeNotes – Contém os inputs para que seja digitado as informações da nota que o usuário deseja criar. Essa tela é acessada quando o usuário pressiona um dos dois botões “Plus” contidos na tela Home.

<div align="center">
<img width="326" alt="Tela_ChangeNotes" src="https://github.com/Lucas-Cussulini/My-Notes/blob/Main/Prints_Readme/ChangeNotes.png">
</div>

- ShowNotes – Essa tela é acessada quando o usuário cria uma nota e na Home ele pressiona essa nota criada, essa tela contém as informações da nota que foi selecionada. O ícone que contem um lixeira, ao lado do ícone de edição, exclui a nota que está sendo visualizada.

<div align="center">
<img width="326" alt="Tela_ShowNotes " src="https://github.com/Lucas-Cussulini/My-Notes/blob/Main/Prints_Readme/ShowNotes.png">
</div>

- EditNotes – Essa tela é acessada pressiona o ícone de edição localizado na parte superior direita da tela, ela contém um os inputs disponíveis preenchidos com os valores passados na criação da nota, e deixa disponível a edição dos valores. Para confirmar, basta o usuário clicar no botão “Editar Nota”.

<div align="center">
<img width="326" alt="Tela_EditNotes " src="https://github.com/Lucas-Cussulini/My-Notes/blob/Main/Prints_Readme/EditNotes.png">
</div>



#### Observações
- Esse projeto NÃO possui banco de dados, porém os dados dele são alocados de forma local no aplicativo com o uso do recurso Async Storage do framework React-Native.

- Link da documentação - https://reactnative.dev/docs/asyncstorage 


## Importante
- É necessário realizar todos os imports necessários para que o aplicativo consiga ser emulado de forma solida em emulador.
- Para desenvolvedores que forem usar o emulador IOS, é necessário fazer as respectivas configurações do emulador e se necessário, do projeto.

## Tecnologias
- [JAVASCRIPT] - Linguagem de programação. 
- [React Native] – Framework.
- [Visual Studio Code] - Ambiente de desenvolvimento.
