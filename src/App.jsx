import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Sobre from './components/Sobre.jsx';
import Formacao from './components/Formacao.jsx';
import Conhecimentos from './components/Conhecimentos.jsx';
import Contato from './components/Contato.jsx';

function App() {
  const [tema, setTema] = useState("claro");
  useEffect(() => {document.documentElement.setAttribute("data-theme", tema)}, [tema]);
  return (
    <>
    <div style={{display: 'flex', justifyContent: 'flex-end', padding: '10px'}}>
      <button onClick={() => setTema(tema === "claro" ? "escuro" : "claro")}>
        Trocar Tema
      </button>
    </div>
      <Header />
      <Sobre />
      <Formacao />
      <Conhecimentos />
      <Contato />
    </>
  );
}

export default App;
