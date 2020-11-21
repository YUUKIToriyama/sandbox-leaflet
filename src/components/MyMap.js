/* MyMap.js */

import React from "react";
import "leaflet/dist/leaflet.css";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
} from "react-leaflet";

import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
const popupIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [25,30],
});

class MyMap extends React.Component {
    state = {
        lat: 35.69,
        lng: 139.77,
        zoom: 13
    }

    render() {
        return(
            this.props.remoteData ?
                <MapContainer center={[this.state.lat, this.state.lng]} zoom={this.state.zoom} style={{width: "100%", height: "900px"}}>
                    <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    {
                        this.props.remoteData["features"].map(feature => {
                            const point = feature["geometry"]["coordinates"].reverse();
                            const label = feature["properties"]["title"];
                            const key = feature["properties"]["description"];

                            return (
                                <Marker position={point} key={key} icon={popupIcon}>
                                    <Popup>
                                        <span>Name: {label}</span>
                                        <span>Latitude: {point[0]}</span>
                                        <span>Longitude: {point[1]}</span>
                                    </Popup>
                                </Marker>
                            );
                        })
                    };
                </MapContainer>
            : <p>Data Loading...</p>
        );
    }
}

export default MyMap;