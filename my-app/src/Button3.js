import { useState } from 'react';

function Button3(props) {
  const [Change, setChange] = useState('This is warm winter');

  const ClickForWinter = () => {
    //props.NameButtonData3('Enjoy winter');
    setChange('this is changed winter');
    //above the line is whatever we want to change the button
  };

  return (
    <div>
        <h2>{Change}</h2>
      {/* //line above  to line 4 to make a message show up */}
      <button onClick={() => ClickForWinter()}>Click here winter</button>
    </div>
  );
}

export default Button3;
