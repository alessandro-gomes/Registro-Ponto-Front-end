import React, { Component } from 'react';
import iconeClock from './icone-clock.png';
import $ from "jquery";


class RegistroPonto extends React.Component {

    //Contruir o estado inicial da tela no react.
    constructor(props) {
        super(props);
        this.state = {};
        this.registrar.bind(this);
    }
 
    //Pega localização do navegador.
    componentDidMount() {
        let self = this;
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
            self.setState({latitude: position.coords.latitude, longitude: position.coords.longitude});
        });
    }

    registrar = () => {
        let self = this;
        $.ajax({
            url: 'http://localhost:8080/registroPonto/salvar',
            type: 'POST',
            data: {
                latitude: self.state.latitude,
                longitude: self.state.longitude
            },
            success: function (result) {
                alert("Registro salvo com sucesso");
            }
        });
    }

    render() {
        return (
            <div style={{ marginTop: "10px" }}>
                <p id="demo"></p>

                <label style={{ backgroundColor: "orange", color: "white", padding: "4px", borderRadius: "8px"}}>Aguardando Ponto</label>
                <br />
                <br />
                <button onClick={this.registrar} style={{cursor: 'pointer', borderRadius: "10px", backgroundColor: "lightGreen", padding: "10px" }}>
                    <img style={{ width: '13px' }} src={iconeClock} /> <label style={{cursor: 'pointer', fontSize: '15px'}}>Registrar</label>
                </button>
            </div>
        );
    }
}

export default RegistroPonto;