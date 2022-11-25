import React, { useState } from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { renderMethodPage } from './constants/render-method';

const App = () => {
  const [renderMethod, setRenderMethod] = useState(renderMethodPage.cards);

  const handleChangeRenderMethod = (currentPageMethod) => {
    setRenderMethod(currentPageMethod);
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
