import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Home from './Home.js';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

class Weather extends React.Component{
    
    constructor(props){
        super(props);
        this.state ={
            weatherItems: 
            [{month:'May', day:'20', max: '38', min: '18'},
             {month:'May', day:'21', max: '30', min: '20'}, 
             {month:'May', day:'22', max: '33', min: '17'}, 
             {month:'May', day:'23', max: '31', min: '19'}
            ]
        }
        
    }
    render(){
        
      return (       
    <Card className={useStyles}>
        <CardContent>
        <Typography className={useStyles.title} color="textSecondary" gutterBottom>
            MONTH: {this.props.mes}
            DAY: {this.props.dia}
        </Typography>
        <Typography className={useStyles.title} color="textSecondary" gutterBottom>
          MAX: {this.state.weatherItems.map(item => {
                if(item.day == this.props.dia)
                return item.max;
            })}
        </Typography>

        <Typography className={useStyles.title} color="textSecondary" gutterBottom>
          MIN: {this.state.weatherItems.map(item => {
                if(item.day == this.props.dia)
                return item.min;
            })}
        </Typography>
        
        </CardContent>
        <CardActions>
        <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
    
      );
    }
  }


  export default Weather;
