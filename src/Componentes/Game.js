import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



class Game extends React.Component{

    render(){
        return(
            <Container maxWidth="sm" fixed>
            <Grid  container  alignItems="center" justify="center" spacing={1} direction="row">
                <Grid item xs={4} >
                    <Button fullWidth variant="contained" color="primary">
                        X
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button fullWidth variant="contained" color="primary">
                        X
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button fullWidth variant="contained" color="primary">
                        X
                    </Button>
                </Grid>
                <Grid item xs={4} >
                    <Button fullWidth variant="contained" color="primary">
                        X
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button fullWidth variant="contained" color="primary">
                        X
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button fullWidth variant="contained" color="primary">
                        X
                    </Button>
                </Grid>
                <Grid item xs={4} >
                    <Button fullWidth variant="contained" color="primary">
                        X
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button fullWidth variant="contained" color="primary">
                        X
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button fullWidth variant="contained" color="primary">
                        X
                    </Button>
                </Grid>
            </Grid>
            </Container>
            
        )
    }
}

export default Game