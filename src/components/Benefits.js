import React from 'react';


import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardText, CardMedia, CardTitle } from 'material-ui/Card';

import {red900, red700, red800, red600, red500,red400,redA400, deepOrange500} from 'material-ui/styles/colors';
import {white,amber400} from 'material-ui/styles/colors';

import {green800,green900,lightGreen500,lightGreen600} from 'material-ui/styles/colors';

export default class Benefit extends React.Component{
    render(){
        return(

<ul>
<Card className="Header-Benefit">
<CardText >
    <div className="row">
    <div className="Header-Benefit-image" style={{'backgroundColor':redA400}}>
    <img src={process.env.PUBLIC_URL + './images/heartw.png'}  className="cards-img" />

    </div>
    <div className="Header-Benefit-content">
    <h3>Calificaciones con sabores</h3>
    <p>Califica tu experiencia en los restaurantes con sabores</p> 
    </div>
</div>
</CardText>
</Card>


<Card className="Header-Benefit">
<CardText >
    <div className="row">
    <div className="Header-Benefit-image" style={{'backgroundColor':red500}}>
    <img src={process.env.PUBLIC_URL + './images/search.png'}  className="cards-img" />

    </div>
    <div className="Header-Benefit-content">
    <h3>Búsqueda inteligente</h3>
    <p>Nuestro sistema de búsqueda permite buscar los restuarantes más cercanos</p> 
    </div>
</div>
</CardText>
</Card>

<Card className="Header-Benefit">
<CardText >
    <div className="row">
    <div className="Header-Benefit-image" style={{'backgroundColor':green800}}>
    <img src={process.env.PUBLIC_URL + './images/mapf.png'}  className="cards-img" />

    </div>
    <div className="Header-Benefit-content">
    <h3>Tus lugares favoritos </h3>
    <p>Define y comparte tus sitios favoritos con los demás</p> 
    </div>
</div>
</CardText>
</Card>



    <h3>Multiplataforma </h3>
    <p>Ya sea en el móvil o en tu computadora podrás encontrar donde comer</p> 

</ul>
        )
    }
}