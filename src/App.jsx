import React, { useState } from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

function App() {
  // overflow: hidden; для тега html
  // pointer-events: none для картинки по умолчанию и когда наводишь на элемент в списке,
  // то меняешь его на auto
  const [renderMethod, setRenderMethod] = useState('cards');

  const handleChangeRenderMethod = (e) => {
    setRenderMethod(e.target.value);
  };

  return (
    <div>
      <Header onChangeRenderMethod={handleChangeRenderMethod} />
      <Main onRenderMethod={renderMethod} />
      <Footer>Footer</Footer>
    </div>
  );
}

export default App;
