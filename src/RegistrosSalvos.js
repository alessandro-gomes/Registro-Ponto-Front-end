import React, { Component } from 'react';
import $ from "jquery";

class RegistrosSalvos extends React.Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date(), dados: [] };
        this.buscar.bind(this);

    }

    componentDidMount() {
        //this.buscar()
    }

    buscar = () => {
        let self = this;
        $.ajax({
            url: 'http://localhost:8080/registroPonto/lista',
            type: 'GET',
            success: function (result) {
                self.setState({ dados: result });
                alert('Registros carregados com sucesso!');
            }
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.buscar} style={{cursor: 'pointer', borderRadius: "10px", backgroundColor: "lightblue", padding: "4px", marginTop: '10px', marginBottom: '10px' }}>
                    <label style={{cursor: 'pointer', fontSize: '14px' }}>Buscar registros</label>
                </button>
                <table id='tabelaRegistro' style={{ marginLeft: '400px' }}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Data e Hora</th>
                            <th scope="col">Latitude</th>
                            <th scope="col">Longitude</th>
                            <th scope="col">IP</th>
                            <th scope="col">Caminho imagem salva</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.dados.map((item, idx) => {
                                return (
                                    <tr>
                                        <th scope="row">{idx}</th>
                                        <td>{item.dataEHora}</td>
                                        <td>{item.latitude}</td>
                                        <td>{item.longitude}</td>
                                        <td>{item.ipMaquina}</td>
                                        <td>{item.caminhoImagemSalva}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div >
        );
    }
}

export default RegistrosSalvos;