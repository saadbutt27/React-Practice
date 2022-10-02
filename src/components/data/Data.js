import { useState } from 'react'

function Data({arr}) {
    const [name, setNames] = useState(false);
    const showNames = () => {
        setNames(!name);
    }

    return (
        <div>
            <h2>Names</h2> 
            <button onClick={showNames}>Show names</button>
            <p>Name: {name && arr.length > 0 && arr.map(item => <div>{item}</div>)}</p>
        </div>
    );
}

export default Data;