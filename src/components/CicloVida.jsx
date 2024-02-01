import { useState, useEffect } from "react";

export const CicloVida = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://reqres.in/api/users')
        .then(data => data.json())
        .then(json => setUsers(json.data));
    }, []);

  return (
    <div>
        <h2>Ciclo de Vida</h2>
            <ul>
                {users.map(user =>(
                    <li>{user.first_name} {user.last_name}</li>
                ))}
            </ul>
    </div>
  )
}
