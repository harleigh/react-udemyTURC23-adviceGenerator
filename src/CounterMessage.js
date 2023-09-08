
export default function CounterMessage({timesAsked}) {
    
    const buildMessage = () => {
        var response =""
        if(timesAsked===0){
            response= "You have not received any advice."
        } else{
            response = "You have received " + timesAsked.toString() + " "
                               + (timesAsked === 1?"piece of advice.":"pieces of advice."  )
        }
        return response
    }

    return (
        <div className="counterMessage">
            {buildMessage()}
        </div>
    )
}