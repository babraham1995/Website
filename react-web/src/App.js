import React, { useState, useRef, useEffect} from 'react';
import TodoList from './TodoList';
import {v4 as uuidv4} from 'uuid';
// import { Button } from 'react-bootstrap';
// import './app.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(()=> {
      const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      if (storedTodos) setTodos(storedTodos)
    }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo=> todo.id===id)
    todo.complete=!todo.complete
    setTodos(newTodos)
  }


  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if ( name ==='') return
    setTodos(prevTodos => {
    return [...prevTodos, {id:uuidv4(),name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodo(e) {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
  <>
<Container>
  <Row>
    <Col text="centre">Header</Col>
  </Row>
  <Row>
    <Col sm={2}>SideBar</Col>
    <Col sm={8}>
    Not SideBar 
    <br></br>
  <TodoList todos = {todos} toggleTodo={toggleTodo}/>
  <input ref={todoNameRef} type = "text" />
  <Button variant="outline-secondary" onClick={handleAddTodo}>Add Todo</Button>
  <Button variant="outline-secondary" onClick ={handleClearTodo}>Clear Complete</Button>
  <div>{todos.filter(todo => !todo.complete).length}</div>
  </Col>
  </Row>
</Container>

  </>
  )
}
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>
export default App;
