import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Assignment1 from './Photos/Assignment1.png';
import Assignment2 from './Photos/Assignment2.png';
import Assignment3 from './Photos/Assignment3.png';
import Assignment4 from './Photos/Assignment4.png';
import Assignment5 from './Photos/Assignment5.png';
import MapView from './ArcGIS/Mapview'

class GISPortfolio extends Component {
    render(){
        return(
            <div style ={{width: '100%', margin: 'auto'}}>
                <Grid className = "project-background-gradient">
                    <Cell col={1}>
                        <img
                        src={Assignment1}
                        alt="Myface"
                        className="gis-photo"
                        />
                        <img
                        src={Assignment2}
                        alt="Myface"
                        className="gis-photo"
                        />
                        <img
                        src={Assignment3}
                        alt="Myface"
                        className="gis-photo"
                        />
                        <img
                        src={Assignment4}
                        alt="Myface"
                        className="gis-photo"
                        />
                        <img
                        src={Assignment5}
                        alt="Myface"
                        className="gis-photo"
                        />
                    </Cell>
                </Grid>
                <MapView/>
            </div>
        )
    }
}
export default GISPortfolio;