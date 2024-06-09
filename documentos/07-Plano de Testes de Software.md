# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t09-pmv-ads-2024-1-e1-projeto-agua-potavel/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t09-pmv-ads-2024-1-e1-projeto-agua-potavel/blob/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento dos links da página Home</td>
  <td>
   <ul>
    <li>RF-001:	O site deve permitir ao usuário cadastrar uma conta.</li>
   <li>RF-002:	O site deve permitir ao usuário fazer o login da sua conta.</li>
   </ul>
  </td>
  <td>Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da página Home.</li>
   </ol>
   </td>
  <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.</td>
  <td>Jonathas</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar se as informações do cadastro foram salvas</td>
  <td>
   <ul>
    <li>RF-010:	O site deve oferecer uma funcionalidade para o usúario ver suas informações.</li>
   </ul>
  </td>
  <td>Verificar se as informações de cadastro estão salvas</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página cadastro, cadastrar.</li>
    <li>Clicar ná página de feed, e cilicar no ícone do perfil.</li>
    <li>E ver se são as mesmas informações.</li>
   </ol>
   </td>
  <td>Os dados inseridos no cadastro devem ser exibido no perfil.</td>
  <td>Jonathas</td>
 </tr>
</table>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-03: Verificar o cadastro de usuários</td>
  <td>
   <ul>
    <li>RF-01: A aplicação deve verificar se o usuário já existe</li>
   </ul>
  </td>
  <td>Evitar duplicidade</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Acesse a área de cadastro</li>
    <li>Preencha o campo username com um já existente</li>
   </ol>
   </td>
  <td>A aplicação não dever deixar realizar o cadastro duplicado</td>
  <td>Paulo</td>
 </tr>
</table>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-04: Verificar se o email e senha já estão cadastrados </td>
  <td>
   <ul>
    <li>RF-01: A aplicação deve verificar se o email já existe</li>
   </ul>
  </td>
  <td>Fazer um login bem sucedido</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Acesse a área de Login</li>
    <li>Preencha os campos com dados já cadastrados</li>
   </ol>
   </td>
  <td>Se estiver tudo certo a aplicação irá fazer o login no site</td>
  <td>Paulo</td>
 </tr>
</table>