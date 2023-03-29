import { Divider } from '@chakra-ui/react';
import { useState } from 'react';

function Button2(props) {
  const [btn2Tag, setbtn2Tag] = useState('Hi button 2 tag');

  const ClickForFun = () => {
    props.NameButtonData2('Enjoy Summer button 2');
    setbtn2Tag('button 2 tag changed');
  };
  return (
    <div>
      <h3>{btn2Tag}</h3>
      <button onClick={() => ClickForFun()}>Click here button 2</button>
    </div>
  );
}

export default Button2;
