
import { useEffect, useState } from "react";
import CounterMessage from "./CounterMessage";


function AdviceGenerator() {

    const [adviceReceived, setAdviceReceived] = useState("")
    const [timesAsked, setTimesAsked] = useState(0)

    useEffect( () => {
        getAdvivce()
    }, [])  //removed strict mode in index.js so useEffect runs only once

    //force random bits of advice
    async function getAdvivce() {
       const res  = await fetch("https://api.adviceslip.com/advice?t=" + Math.random())
       const data = await res.json()
       setAdviceReceived(data.slip.advice)
       setTimesAsked( currentCount => currentCount+1)
    }

    return (
        <>
        <div className="adviceApp">
            <div className="adviceArea">
                {adviceReceived}
            </div>
            <button onClick={getAdvivce}
                    disabled={timesAsked===0}
                    className="adviceButton">Get Advice!</button>
            <CounterMessage timesAsked={timesAsked}/>
        </div>
        </>
    )
}

export default AdviceGenerator;