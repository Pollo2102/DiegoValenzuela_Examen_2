import React, { Component } from "react";
import {Button, Link, withStyles} from '@material-ui/core';


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            titulo1: 'Bienvenido',
            titulo2: 'Weather App'
        }
    }

    intercalar = () => {
        if (this.state.titulo1 === 'Bienvenido')
        {
            this.setState (
                {
                    titulo1: 'Weather App',
                    titulo2: 'Bienvenido'
                }
            );
        }
        else
        {
            this.setState(
                {
                titulo1: 'Bienvenido',
                titulo2: 'Weather App'
                }
            );
        }
    }


    render() {
      return (
        <div>
            <h1 style={{color:'red'}} id='titulo1'>{this.state.titulo1}</h1><br/>
            <h1 style={{color:'purple'}} id='titulo2'>{this.state.titulo2}</h1><br/>
            <Button style={{marginBottom:'30px'}} 
                    color='primary' 
                    variant='contained' 
                    onClick={this.intercalar}>Intercalar
            </Button><br/>
            <Link href='/weather/March/20'>Weather for March 20</Link><br/>
            <Link href='/weather/March/21'>Weather for March 21</Link><br/>
            <Link href='/weather/March/22'>Weather for March 22</Link><br/>
            <Link href='/weather/March/23'>Weather for March 23</Link><br/>

        </div>
      );
    }
  }


  export default Home;