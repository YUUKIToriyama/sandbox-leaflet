/* App.js */

import React from "react";
import MyMap from "./components/MyMap.js";

class App extends React.Component {
    state = {
        remoteData: {"features": []}
    }

    async componentDidMount() {
        const res = await fetch("http://localhost:8080/YUUKIToriyama/sandbox-leaflet/yamanote_line.geojson", {method: "GET", mode:"cors"}).catch(err => console.log(err));
        const geojson = await res.json();
        console.log(geojson);
        this.setState({
            remoteData: geojson
        });
    }

    render() {
        return(
            <MyMap remoteData={this.state.remoteData}/>
        );
    }
}

export default App;