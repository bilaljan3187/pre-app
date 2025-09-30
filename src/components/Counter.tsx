import { useState } from "react"

const Counter = ()=>{
    const [counter,setCounter] = useState(0)

    const increment = ()=>{
        setCounter(counter+1)
    }

    const decrement = ()=>{
        setCounter(counter+1)
    }

    const reset = ()=>{
        setCounter(0)
    }
    return <section>
        <h2 className="text-2xl">Count is</h2>
        <p className="text-xl">{counter}</p>
        <div className="flex gap-4 mb-4 justify-center">
            <button onClick={decrement}>- Decrement</button>
            <button onClick={increment}>+ Increment</button>
        </div>
         <div className="flex gap-4 mb-4 justify-center">
            <button onClick={reset}>Reset</button>
            
        </div>


    </section>
}

export default Counter