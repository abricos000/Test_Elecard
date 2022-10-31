import React from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { useState } from 'react';

const App = () => {
  const [contentMain, setContentMain] = useState('')

  const renderTree = (e) => {
    setContentMain(e.target.value)
  }
  
  const renderCards = (e) => {
    setContentMain(e.target.value)
  }

  return (
    <div>
      <Header renderTree = {renderTree} renderCards={renderCards}/>
      <Main contentMain={contentMain}/>
      <Footer>Footer</Footer>
    </div>
  );
}

export default App;
