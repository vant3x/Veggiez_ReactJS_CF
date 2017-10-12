import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import {red900, red700, red800, red600, red500,red400,redA400, deepOrange500} from 'material-ui/styles/colors';
import {white,amber400} from 'material-ui/styles/colors';

import {green400, green500,green300,green600,green800,green900,lightGreen500,lightGreen600} from 'material-ui/styles/colors';


import Title from '../components/Title';
import Benefits from '../components/Benefits';
import VeggiezCard from '../components/veggiez/VeggiezCard';
import data from '../requests/veggiez';

import TransitionGroup from 'react-transition-group/TransitionGroup'

export default class Home  extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            veggiez: data.veggiez
        }

        this.hideVeggie = this.hideVeggie.bind(this);
    }

    veggiez(){
        return this.state.veggiez.map((veggie,index)=>{
          return(
            <VeggiezCard onRemove={this.hideVeggie} veggie={veggie} index={index}/>
          );
        })
      }

      hideVeggie(veggie){
          this.setState({
              veggiez: this.state.veggiez.filter(el => el != veggie)    
          })
      }

    render(){
        return(
            <section>
                <div className="Header-background">
                <div style={{"width":"80%", "margin":"0 auto"}}>
                <div className="Header-main">

                    <Title></Title>

                    <RaisedButton label="Crear cuenta gratuita" backgroundColor={red600} labelColor={white}></RaisedButton>
                    
                    <img className="Header-ilustration" src={process.env.PUBLIC_URL + '/images/rest.png'}  />
                    
                </div>
                <div>
                    <Benefits/>
  
                </div>
                </div>
            </div>
            <div style={{'background-color': lightGreen600, 'padding': '50px', color:'white'}}>
                <h3  style={{'font-size':'1.5rem'}}>Sitios Populares</h3>
                <TransitionGroup className="row">
                    {this.veggiez()}  
                </TransitionGroup>
            </div>
          </section>
        )
    }
}