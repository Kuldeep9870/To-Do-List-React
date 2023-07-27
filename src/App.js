import React, { useEffect, useState } from "react";
import Header from "./components/Header"
import { Heading } from '@chakra-ui/react';
import Footer from "./components/Footer";
import Task from "./components/Task";



function App() {
  const storedItems = JSON.parse(localStorage.getItem('DataAtLocal'));
  const [todo,settodo]= useState(storedItems===[]|| storedItems===null?[]:storedItems);
  
    
  function upadteTodo(index,activity){
    settodo([...todo,{id :index ,task: activity}]);
  }
  function removeTask(id){
    settodo(
      todo.filter(a => a.id !== id)
    );
  }
  
  useEffect(() => {
    localStorage.clear();
    localStorage.setItem('DataAtLocal', JSON.stringify(todo))
    console.log("stored locally");

  }, [todo]);
  
  return (
    <>
      <Header todo={todo} settodo={settodo} upadteTodo={upadteTodo}/>
      <Heading textAlign={'center'} pt={5} pb={5}>TASK</Heading>
      <Task todo={todo} removeTask={removeTask} />
      <Footer/>
    </>
    
  );
}

export default App;
