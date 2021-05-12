import React, { useState, useRef, useEffect} from 'react';
import Link from 'next/link'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from '../TodoList';
// import {v4 as uuidv4} from 'uuid';


export default function Home(home) {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()
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

  <header>
    {home && (
          <div >
            <Link href="/todo/todo">
              <a>Todo Page</a>
            </Link>
          </div>
        )}
        </header>
</Container>

  </>

     
  )
}
