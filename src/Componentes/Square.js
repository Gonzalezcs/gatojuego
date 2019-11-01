import React from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'

class Square extends React.Component{
    render() {
        return (
            <Grid item xs={4} >
                <Button 
                    fullWidth 
                    variant="contained"
                    color="primary" 
                    onClick={() => this.props.onClick()}
                >
                    {this.props.value}
                </Button>
            </Grid>
        );
      }
}

export default Square