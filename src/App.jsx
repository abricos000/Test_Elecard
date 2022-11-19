import React, { useState } from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { RenderMethod } from './constants/render-method';

const App = () => {
  const [renderMethod, setRenderMethod] = useState(RenderMethod.cards);

  const handleChangeRenderMethod = (e) => {
    setRenderMethod(e.target.value);
  };

  return (
    <>
      <Header onChangeRenderMethod={handleChangeRenderMethod} renderMethod={renderMethod} />
      <Main renderMethod={renderMethod} />
      <Footer>Footer</Footer>
    </>
  );
};

export default App;
