import { tokenLoader } from "../util/auth";
import { redirect } from "react-router-dom";


export async function action() {
    const token = tokenLoader()
    
    const response = await fetch('http://localhost:4000/delete', {
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
 

