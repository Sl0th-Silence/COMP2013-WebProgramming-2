import {useState} from "react";

export default function Counter(){
    //Define var and setter function then assign 0 to counter
    const [counter, setCounter] = useState(0);

    return <div>
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Better counter</button>
        <button onClick={() => setCounter(0)}>reset</button>

    </div>
}