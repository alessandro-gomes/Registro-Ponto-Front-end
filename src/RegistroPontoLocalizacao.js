import React, { Component } from 'react';
import $ from "jquery";

class RegistroPontoLocalizacao extends React.Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        return (
            <div>
                <h3>Obtenha sua localização</h3>
                <span>Permita acesso no seu navegador.</span>
                <br />
            </div>
        );
    }
}

export default RegistroPontoLocalizacao;