import {  Button, HStack, Heading, Input, VStack ,} from '@chakra-ui/react';
import React, { useState } from 'react'

const Header = ({todo,settodo,upadteTodo}) => {
  const [activity,setActivity]=useState("");
  const [index,setIndex]=useState(1);

   function updatehere(){
    upadteTodo(index,activity);
    setIndex(index+1);
    setActivity("");
   }
   function updateActivity(e){
    console.log(e.target.value);
    setActivity(e.target.value);
   }
  return (
    <VStack p={"a"} shadow={"base"} bgColor={"blackAlpha.900"}  >
      <Heading as='h1' size={'lg'} noOfLines={1} color={'white'} pt={10} pb={10}>ToDo List</Heading>
      <HStack pb={10} alignItems={'center'} >
      <Input htmlSize={70}  placeholder='Enter Task' textColor={'white'} value={activity} onChange={updateActivity} />
      <Button color='white' variant='outline' _hover={{bg:'#79807b'}} onClick={updatehere}>
        Add
      </Button>
      </HStack>
    </VStack>
  )
}

export default Header;