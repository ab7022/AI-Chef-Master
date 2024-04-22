import { useState } from "react"

const NumberOfPeople = () => {
const [counter,setCounter] = useState(1)

return (
<div>
    <div className="text-2xl md:text-3xl text-green-700 font-bold">Number of people</div>
    <div className="flex gap-3 border-2 border-slate-700 w-fit rounded-lg px-2 text-xl my-4">
        <button onClick={()=> setCounter(counter - 1)}>-</button>
        <div>{counter}</div>
        <button onClick={()=> setCounter(counter + 1)}>+</button>
    </div>
</div>
)
}

export default NumberOfPeople