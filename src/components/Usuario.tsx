import { useState } from "react"

interface User {
    uid: string;
    name: string;
}


export const Usuario = () => {

    const [user, setUser] = useState<User>();

    const login = () =>{
        setUser({
            uid:'AB123',
            name: 'Lucas'
        });
    }
  return (
    <div
        className="mt-5"
    >
        <h3>Usuario</h3>
        <button
            onClick={login}
            className="btn btn-outline-primary"
        >
            Login
        </button>
        <br/>
        {
            (!user)? "No hay usuario" : (<pre className="mt-2">{JSON.stringify(user)}</pre>)
        }
        
    </div>
  )
}
