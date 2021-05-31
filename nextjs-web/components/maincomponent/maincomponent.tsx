import Container from 'react-bootstrap/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Col from 'react-bootstrap/Col';
import Head from 'next/head'
import styles from  "./maincomponent.module.css";
import Button from 'react-bootstrap/Button';
import { compose } from 'recompose';
import React from 'react';
// export default function MainComponent({ children, home }) {

  const Todo= (props) => {
    const {
      item,
      data,
      onChangeTodo,
      addTodo,
      deleteTodo,
    } = props;


    return (
      <React.Fragment>
      <div className={styles.maincomponent}>
     
    <Container>
    <div className={styles.todos}> My Todos</div>
        <input  type = "text" />
        <Button variant="outline-secondary" >Add Todo</Button>
        <Grid container spacing={1}>
                <Grid item xs={12}>
                Milk 
                  <Paper >description</Paper>
                </Grid>
                <Grid item xs={12}>
                    Egg 
                  <Paper >description</Paper>
                </Grid>
                <Grid item xs={12}>
                    Milk 
                  <Paper >description</Paper>
                </Grid>
                
              </Grid>
        
        </Container> 
        {/* <h1>TODO</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        addTodo({
          value: props.item.value,
        });
      }}>
        <input
          type="text"
          value={item.value}
          onChange={e => onChangeTodo({
            value: e.target.value,
          })}
        />
        <br />
        <input
          type="submit"
          value="SUBMIT"
          style={{
            display: 'none',
          }}
        />
      </form>
      <hr />
      {data.map((item, index) => (
        <p key={index}>
          {item.value}
          {' '}
          <button onClick={() => deleteTodo(item)}>
            DELETE
          </button>
        </p>
      ))} */}
        </div>
      </React.Fragment>

        )};

        export default compose()(Todo);