import { useRef } from "react"


export const PulsaBotones = () => {

    /* const [count, setCount] = useState(0); */

    const cont = useRef(0);


    const handleClick = (incrementa) => {
        if(incrementa){
            cont.current++
        }else {
            cont.current--;
        }
        console.log(`Contador: ${cont.current}`)
    }

    console.log("Render!!")

  return (
    <div>
        <button onClick={() => handleClick(false)}>Decrementa</button>
        <button onClick={() => handleClick(true)}>Incrementa</button>
    </div>
  )
}
