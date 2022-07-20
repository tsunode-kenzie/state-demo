import { useState } from 'react';

import './style.css';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    function addNumber() {
        setCounter((oldCounter) => oldCounter + 1);
    }

    function subNumber() {
        setCounter(counter - 1);
    }

    return (
        <div className='container'>
            <p>{counter}</p>
            <div>
                <button onClick={addNumber}>+</button>
                <button onClick={subNumber}>-</button>
            </div>
        </div>
    );
};

export default Counter;