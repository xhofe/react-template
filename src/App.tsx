import React from 'react'
import './App.css'
import { useTranslation } from 'react-i18next';
import { Center, Heading, Link } from '@chakra-ui/react';

function App() {
  const { t, i18n } = useTranslation();
  
  return (
    <div className="App">
      <Center h="94vh">
        <Heading>{t('Welcome to React')}</Heading>
      </Center>
    </div>
  )
}

export default App
