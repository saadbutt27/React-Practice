import { useState } from 'react'

// 'props' is a parameter passed to function, it's an object which has a key title. so through 
// destructuring we passed that attribute/key to function enclosed in curly braces si it got it 
// as a data member from props then we can use it inside the function

function Item({title}) {
    const [text, setText] = useState(title);
    // [varToUse, fucntionToUpdate]
    const changeIt = () => {
        setText("Updated "+ text);
        console.log(text);
    };
     return (
      <div>
        {text}
        <button onClick={changeIt}>Change</button>
      </div>
    );
}

export default Item;