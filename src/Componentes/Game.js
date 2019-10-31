import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class Game extends React.Component{

    render(){
        return(
            <Grid  container  alignItems="center" justify="center" spacing={2} direction="column">
                <Grid item xs={4} >
                    <Button variant="contained" color="primary">
                        X
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" color="primary">
                        X
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" color="primary">
                        X
                    </Button>
                </Grid>
            </Grid>
        )
    }
}

export default Game