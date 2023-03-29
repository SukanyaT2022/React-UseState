import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Button2 from './Button2';
import Button3 from './Button3';
import { useState } from 'react';

//useState(); to change message 

function App() {
  //const btn = 'button Tag';
  const [btn, setBtn] = useState('button Tag');

  const buttonData = (data) => {
    //alert(data);
    setBtn(data);
  };

  return (
    <div>
      <h1>{btn}</h1>
      <Button NameButtonData={buttonData} />
      <Button2 NameButtonData2={buttonData} />
      <Button3 NameButtonData3={buttonData} />
    </div>
  );
}

export default App;
