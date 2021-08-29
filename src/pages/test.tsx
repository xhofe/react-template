import { Center, Heading } from '@chakra-ui/layout'
import React from 'react'
import { useParams } from 'react-router-dom'

const TestPage = ()=>{
  const {to} = useParams<{to:string}>();
  return <Center h="full">
    <Heading>{to}</Heading>
  </Center>
}

export default TestPage;