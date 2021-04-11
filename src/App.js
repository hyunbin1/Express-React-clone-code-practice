import React from 'react';
// npm install @material-ui/core 사용하기 
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './images/Memories.jpg';
import useStyles from './styles';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

const App = () => {
    const classes = useStyles();
    return (
        <container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} varaint="h2" align="center"></Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"></img>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>


            </Grow>
        </container>





    );
}


export default App;
