import { useEffect,useState } from "react"

export const Simple = () => {

  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0);

    useEffect(() => {
      console.log("Despues del render");
    },[message]);

    useEffect(() => {
      console.log("Despues del render que modifica count");
    },[count]);

    console.log("Antes del Render");
    
    return (
        <div>
            <h2>Ejemplo useEfect</h2>
            <p>{message}</p>
            <input type="text" onChange={(event) => {
              setMessage(event.target.value)
            }} />
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
  )
}
