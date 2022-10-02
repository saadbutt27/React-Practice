import Data from '../data/Data'
import { useState } from 'react'

function Form() {
    
    const [name, setName] = useState()
    const [arr, setArr] = useState([]);
    const getNames = () => {
        setArr([...arr, name]);
    } 
    
    return (
        <div>
            <form onSubmit={getNames}>
                <label> Enter name:  
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
            <Data myName={name} />
            {/* <Data /> */}
        </div>
    );
}

export default Form;