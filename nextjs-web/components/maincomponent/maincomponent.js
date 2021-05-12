import Container from 'react-bootstrap/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Col from 'react-bootstrap/Col';
import Head from 'next/head'
import styles from  "./maincomponent.module.css";

export default function MainComponent({ children, home }) {
    return (
      <div className={styles.maincomponent}>
        <div className={styles.todos}> My Todos</div>
    <Container>
        <Grid container spacing={3}>
                <Grid item xs={6}>
                    Milk 
                  <Paper >xs=12</Paper>
                </Grid>
                <Grid item xs={6}>
                    Egg 
                  <Paper >xs=12</Paper>
                </Grid>
                <Grid item xs={6}>
                    Milk 
                  <Paper >xs=12</Paper>
                </Grid>
                <Grid item xs={6}>
                    Egg 
                  <Paper >xs=12</Paper>
                </Grid>
                <Grid item xs={6}>
                    Milk 
                  <Paper >xs=12</Paper>
                </Grid>
                <Grid item xs={6}>
                    Egg 
                  <Paper >xs=12</Paper>
                </Grid>
                <Grid item xs={6}>
                    Milk 
                  <Paper >xs=12</Paper>
                </Grid>
                <Grid item xs={6}>
                    Egg 
                  <Paper >xs=12</Paper>
                </Grid>
                
              </Grid>
        
        </Container> 
        </div>
        )};