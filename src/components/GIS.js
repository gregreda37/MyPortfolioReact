import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import logo from './Assignment1.png';

class GISPortfolio extends Component {
    render(){
        return(
            <div style ={{width: '100%', margin: 'auto'}}>
                <Grid className ='landing-grid'>
                    <Cell col={1}>
                        <img
                        src={logo}
                        alt="Myface"
                        // className="avatar-img"
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default GISPortfolio;