import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Weather from './Weather.js';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {Welcome: 'Bienvenido', 
      App: 'Weather App',
      month: '',
      day: '' 
    };
    this.update = this.update.bind(this);
    this.may20 = this.may20.bind(this);
    this.may21 = this.may21.bind(this);
    this.may22 = this.may22.bind(this);
    this.may23 = this.may23.bind(this);

    

  }

  update(){
    this.setState({Welcome:'Weather App',App: 'Bienvenido'})
  }

  may20(){
    this.setState({month:"May",day:"20"})
  }

  may21(){
    this.setState({month:"May",day:"21"})
  }

  may22(){
    this.setState({month:"May",day:"22"})
  }

  may23(){
    this.setState({month:"May",day:"23"})
  }

  render(){
    return(
      <div className="App">
      <h1> {this.state.Welcome}</h1>
      <h1> {this.state.App}</h1>
     <Button variant="contained" color="primary" onClick={this.update}>
      Intercalar
    </Button>

      <div className="App-body">
        <Button variant="contained" color="primary" onClick={this.may20}>
          Weather for May 20
        </Button>

        <Button variant="contained" color="primary" onClick={this.may21}>
          Weather for May 21 
        </Button>

        <Button variant="contained" color="primary" onClick={this.may22}>
          Weather for May 22
        </Button>
        
        <Button variant="contained" color="primary" onClick={this.may23}>
          Weather for May 23
        </Button>
      </div>

      <Weather mes={this.state.month} dia={this.state.day}/>

  
      
    </div>  

    )
  }
}

Home.defaultProps={
  Welcome: 'Bienvenido',App: 'Weather App'
};

export default Home;
