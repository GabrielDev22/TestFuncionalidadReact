import { useEffect, useState, useRef } from "react"

export const Contador = () => {

    const timer = useRef(0);

    const [cont, setCount] = useState(0);

    useEffect(() => {
        timer.current = setInterval(() => setCount(cont => cont + 1), 1000)
    },[])

    const handleClick = () => {
        clearInterval(timer.current);
        timer.current = 0;
    }

  return (
    <div>
        <p>Cont: {cont} </p>
        <button onClick={handleClick}>PARAR!!</button>
    </div>
  )
}
