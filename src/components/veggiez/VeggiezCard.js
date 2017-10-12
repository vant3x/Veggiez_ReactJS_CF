import React from 'react';


import { Card, CardText, CardMedia, CardTitle,CardActions } from 'material-ui/Card';
import FlaButton from 'material-ui/FlatButton';

import {red900, red700, red800, red600, red500,red400,redA400, deepOrange500} from 'material-ui/styles/colors';
import {white,amber400} from 'material-ui/styles/colors';

import {green800,green900,lightGreen500,lightGreen600} from 'material-ui/styles/colors';

import CSSTransition from 'react-transition-group/CSSTransition';


export default class VeggiezCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: true
    }


  }
    render(){
        return(
          <CSSTransition
            // appear={true}
         
            classNames="fade-scale"
            in={this.props.in}
          >
              <div className="col-xs-12 col-sm-4 " key={this.props.index}>
              <Card className="cards-veg">
                <CardMedia >
                  <img className="veggiez-pictures-favs" src={process.env.PUBLIC_URL + this.props.veggie.imageUrl}/>
                </CardMedia>
                <CardTitle title={this.props.veggie.title}></CardTitle>
                <CardText >{this.props.veggie.description}</CardText>
                <CardActions style={{'text-align':'right'}}>
                  <FlaButton secondary={true} label="Ver más"/>
                  <FlaButton secondary={true} onClick={()=> this.props.onRemove(this.props.veggie)} label="Ocultar"/>
                </CardActions>
              </Card>
            </div> 
          </CSSTransition>
        );
    }
}