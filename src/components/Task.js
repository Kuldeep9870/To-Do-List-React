import React from 'react'
import {   VStack,Text, HStack, Heading} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
const Task = ({todo,removeTask}) => {
  function catchid(id){
    removeTask(id);
  }
  if(todo.length===0)
  return(
    <>
    <Heading textAlign={'center'} pt={5} pb={5} mb={500}>Oops We are all set !</Heading>
    </>
  )
  return (
    <>
    <VStack spacing={5} mb={500}>
    {todo.map((t) => <TaskItem key={t.id} id={t.id} text={t.task} removeTask={removeTask} catchid={catchid} />)}
    </VStack>
    </>
  )
}


const TaskItem =({id,text,catchid})=>(
    <>
    <HStack width={'100%'} justifyContent={'center'}>
    <Text 
        fontSize='lg' 
        border={"1px solid black"} 
        p={2}
        pl={5}
        bgColor={'gray'} 
        width={'45%'}
        borderRadius={'full'}
        color={'white'}
        display={'inline'}
    >
        {" "}
        {text}
        
       
    </Text>
    < CheckIcon bgColor={'green'} height={7} width={7} borderRadius={'full'} onClick={()=>catchid(id)}/>
    </HStack>
    </>
);

export default Task