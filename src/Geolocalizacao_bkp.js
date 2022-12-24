import React, { Component } from 'react';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Hooks } from '../node_modules/react-leaflet/lib/hooks.js';
import { Marker } from 'react-leaflet/Marker';
import { Popup } from 'react-leaflet/Popup';

class Geolocalizacao_bkp extends React.Component {

    constructor(props) {
        super(props);
    }

    position = [-29.6578685, -50.7574868, 15];

    render() {
        return (
            <div>
                <h3 style={{ marginTop: '30px', marginBottom: '1px' }}>Obtenha sua localização</h3>
                <span>Permita acesso no seu navegador.</span>
                <br />
                <div style={{ height: '180px' }}>
                    <MapContainer center={this.position} zoom={15} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={this.position}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div >
        );
    }
}

export default Geolocalizacao_bkp;