import React from 'react'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Board from './Board';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import Pets from '@material-ui/icons/Pets';




class Game extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            estado: 'Jugador siguiente X'
        };
      }
      
     cambiarEstado(){
        var status= '';
       
        status = ('Jugador siguiente X'.localeCompare(this.state.estado) === 0 ? 'Jugador siguiente O' : 'Jugador siguiente X');
        console.log('LLEGO AL CAMBIAR ESTADO DE GAME');
        console.log(this.state.estado);
        console.log(status);
        console.log('Jugador siguiente X'.localeCompare(this.state.estado));
        console.log('Jugador siguiente O'.localeCompare(this.state.estado));
        this.setState({
            estado:status
        });
    }
    render(){
        return(
            <Container maxWidth="lg" fixed>
            <Grid  container direction="row" justify="flex-start" alignItems="flex-start" spacing={7}>
                <Grid item xs={7} >
                    <Grid  container  alignItems="center" justify="center" spacing={1} direction="row">
                        <Board 
                            estado={this.state.estado}
                            cambiarEstado={this.cambiarEstado.bind(this)} 
                        />
                    </Grid>
                </Grid>
                <Grid item xs={5} >
                    <Typography variant="h4" gutterBottom color="secondary">
                         <SportsEsportsIcon fontSize="large" color="secondary">
                         </SportsEsportsIcon>Juego del Gato
                            
                    </Typography>
                    {this.state.estado}
                </Grid>
            </Grid>
            </Container>
            
        )
    }
}

export default Game