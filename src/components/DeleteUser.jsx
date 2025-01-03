import { tokenLoader } from "../util/auth";
import { redirect } from "react-router-dom";


export async function action() {
    const token = tokenLoader()
    
    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/delete`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'x-auth-token': token
        },
    });
    
    const res = await response.json();
    localStorage.removeItem('token')
    console.log(res)
    return redirect('/')
 }
 

