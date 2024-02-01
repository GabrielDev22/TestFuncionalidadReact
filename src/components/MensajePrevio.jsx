import { useEffect, useState, useRef } from "react"

export const MensajePrevio = () => {

    const [mensaje, setMensaje] = useState('');
    const prevMensaje = useRef('');

    useEffect(() => {
        prevMensaje.current = mensaje;
    }, [mensaje]);

    const modificaMensaje = (e) => {
        console.log("Modificar el mensaje")
        setMensaje(e.target.value);
    }



  return (
    <div>
        <input type="text" onChange={modificaMensaje} />
        <p>Mensaje: {mensaje}</p>
        <p>Mensaje Previo: {prevMensaje.current}</p>

    </div>
  )
}
