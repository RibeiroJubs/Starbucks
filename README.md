# 🍹 Copos Mágicos - Navegação Interativa com React! 🎉

Bem-vindo ao **Copos Mágicos**! Uma aplicação super divertida feita com **React**, **useState**, **styled-components** e **React Router**! Aqui, você pode clicar nos copinhos pequenos e ver a mágica acontecer: os copos grandes mudam dinamicamente! Vamos fazer a festa! 🎈

## 🛠️ Tecnologias Usadas

- **React**: Para construir uma interface interativa e divertida!
- **useState**: Para controlar a interação e os estados dos copos (sim, eles ficam mágicos! ✨).
- **styled-components**: Para deixar tudo lindo e estiloso com componentes reutilizáveis.
- **React Router DOM**: Para navegar entre páginas e explorar o projeto com facilidade! 🌍

## 🎯 Funcionalidades Principais

- Navegue entre as páginas com o **React Router** e explore o mundo dos copos!
- Interaja com os copos pequenos: ao clicar em um copo pequeno, o copo grande muda de imagem! 🎉
- Estilização dinâmica com **styled-components**! Tudo bem bonito e modular! 💅

## 🚀 Como Rodar o Projeto

1. Clone o repositório para sua máquina:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
Entre na pasta do projeto:

bash
Copiar código
cd seu-repositorio
Instale as dependências com o NPM:

bash
Copiar código
npm install
Rodar a aplicação no seu navegador:

bash
Copiar código
npm start
Agora é só abrir seu navegador em http://localhost:3000 e começar a diversão! 🥳

🏗️ Estrutura do Projeto
src/: O coração do seu projeto!
components/: Componentes reutilizáveis (os copos pequenos e grandes, por exemplo!).
pages/: As páginas da nossa aplicação. Aqui você pode se perder na navegação!
App.js: O componente principal da aplicação, com as rotas e a magia dos copos! ✨
✨ Como Funciona a Mágica
1. Navegação Entre Páginas
Com o React Router, você pode explorar o projeto em diferentes páginas. As rotas são super fáceis de definir no App.js, e cada página aparece com um clique.

2. Clicando nos Copos Pequenos
Quando você clica em um copo pequeno, o estado da aplicação muda graças ao useState, e a imagem do copo grande é alterada! 😄

Exemplo de código:

jsx
Copiar código
import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const CopoPequeno = styled.img`
  width: 50px;
  cursor: pointer;
`;

const CopoGrande = styled.img`
  width: 200px;
`;

function App() {
  const [copoSelecionado, setCopoSelecionado] = useState('');

  return (
    <Router>
      <div>
        <h1>Escolha seu Copo Mágico!</h1>
        
        <div>
          <CopoPequeno src="copo-pequeno1.png" alt="Copo 1" onClick={() => setCopoSelecionado('copo1.png')} />
          <CopoPequeno src="copo-pequeno2.png" alt="Copo 2" onClick={() => setCopoSelecionado('copo2.png')} />
          <CopoPequeno src="copo-pequeno3.png" alt="Copo 3" onClick={() => setCopoSelecionado('copo3.png')} />
        </div>

        <CopoGrande src={copoSelecionado || "copo-padrao.png"} alt="Copo Grande" />

        <Switch>
          <Route path="/outra-pagina" component={OutraPagina} />
          {/* Adicione mais rotas aqui se quiser! */}
        </Switch>
      </div>
    </Router>
  );
}

function OutraPagina() {
  return <h2>Você chegou a uma nova página! 🚀</h2>;
}

export default App;
3. Estilização Com Styled-Components
A parte divertida: usamos o styled-components para deixar tudo com um estilo incrível e modular! Você vai adorar como fica fácil e bonito!

🎉 Contribuições
Quer ajudar a deixar este projeto ainda mais incrível? Faça um fork, crie uma branch e envie um pull request! Toda contribuição é super bem-vinda! ✨

📜 Licença
Este projeto está licenciado sob a MIT License.
