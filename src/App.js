import engrenagem from './engrenagem.png';
import iconeClock from './icone-clock.png';
import './App.css';
import RegistroPonto from './RegistroPonto';
import HoraDinamica from './HoraDinamica';
import RegistrosSalvos from './RegistrosSalvos';
import RegistroPontoLocalizacao from './RegistroPontoLocalizacao';
import { data } from 'jquery';
import ReactDOM from 'react-dom'
import { useEffect } from 'react';

function App() {
  var data = new Date();

  return (
    <div className="App">
      <div>
        <nav>
          <header style={{ marginTop: "-21px" }}>
            <h4 style={{ marginBottom: "-20px" }}>Bem vindo</h4>
            <h2 style={{ marginBottom: "50px" }}>Registro de Ponto</h2>
          </header>
        </nav>
        <img src={engrenagem} />
        <h3 style={{ marginBottom: '-20px', marginTop: '-8px' }}>{saudacao(data.toLocaleTimeString())}</h3>
        <h2>Administrador</h2>
        <span>{data.toLocaleDateString()} - {getDay(data.getDay())}</span>
        <br />
        <HoraDinamica/>
      </div>
      <div>
        <RegistroPonto />
        <RegistrosSalvos />
      </div>
    </div>
  );
}

function getDay(numero) {
  switch (numero) {
    case 1:
      return 'Segunda-feira';
    case 2:
      return 'Terça-feira';
    case 3:
      return 'Quarta-feira';
    case 4:
      return 'Quinta-feira';
    case 5:
      return 'Sexta-feira';
    case 6:
      return 'Sábado';
    case 0:
      return 'Domingo';
  }
}

function saudacao(hora) {
  if (hora >= '05:00:00' & hora < '12:00:00') {
    return 'Bom dia';
  } else if (hora >= '12:00:00' & hora < '18:00:00') {
    return 'Boa tarde';
  } else {
    return 'Boa noite';
  }
}

export default App;
