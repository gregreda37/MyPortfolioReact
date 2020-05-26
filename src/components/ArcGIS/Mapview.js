import React, {Component} from 'react';
import { WebMap, WebScene } from '@esri/react-arcgis';

class MapView extends Component {
    render(){
        return(
            <div style={{ width: '80vw', height: '80vh' }}>
                <h1>NJ Influenza Deaths 2014-2018</h1>
            <WebMap id="b3330cfb0f38447f8613273772327c37" />
            </div>
        
        )
    }
}
export default MapView;