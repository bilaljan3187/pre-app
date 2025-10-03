import { useEffect, useState } from "react"

const TimeCounter = ()=>{
    const [counter,setCounter] = useState(0)

    const startCounter = ()=>{
        setCounter(counter+1)
    }

    const stopCounter = ()=>{
        setCounter(counter+1)
    }

    const reset = ()=>{
        setCounter(0)
    }
    useEffect(()=>{
        
    },[])
    return <section>
        <h2 className="text-2xl">Time Counter </h2>
        <p className="text-xl">{counter}</p>
        <div className="flex gap-4 mb-4 justify-center">
            <button onClick={stopCounter}>Start Counter</button>
            <button onClick={startCounter}>Stop Counter</button>
        </div>
         <div className="flex gap-4 mb-4 justify-center">
            <button onClick={reset}>Reset</button>
        </div>


    </section>
}

export default TimeCounter