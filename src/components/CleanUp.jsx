import { useEffect, useState } from "react"


export const CleanUp = () => {

    const [keys, setKeys] = useState([]);


    useEffect(() => {

        function onKeyPress(event) {
            console.log("Agrega tecla");
            setKeys([...keys, event.keyCode]);
        }

        window.addEventListener('keypress', onKeyPress);

        return function cleanUp(){
            window.removeEventListener('keypress', onKeyPress);
        }
    });

  return (
    <div>
        <h2>Efecto con limpieza</h2>

        <ul>
            {keys.map(key => (
                <li>{key}</li>
            ))}
        </ul>
    </div>
  )
}
