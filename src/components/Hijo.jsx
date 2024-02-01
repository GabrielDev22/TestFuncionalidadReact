
import { useUserContext, useUserToggleContext } from "../UserProvider";


export const Hijo = () => {

    const user = useUserContext();
    const cambiaLogin = useUserToggleContext();

    return(
        <div>
            <h2>Componenten Hijo</h2>
            {user && <p>Hola {user.name}</p>}
            <button onClick={cambiaLogin}>Cambia Login</button>
        </div>
    )

}
