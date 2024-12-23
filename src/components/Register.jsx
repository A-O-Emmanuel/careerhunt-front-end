
import { Form, redirect, useActionData  } from "react-router-dom";

function Register() {
    const data = useActionData();

    return (
        <>

        <div className="register">
            <Form method='post' className="register__form">
                <label htmlFor="firstname">Firstname</label>
                <br />
                <input type="text" name="firstname" required className="register__form--firstname" />
                <br />
                <label htmlFor="lastname">Lastname</label>
                <br />
                <input type="text" name="lastname" require className="register__form--lastname" />
                <br />
                <label htmlFor="email" >Email</label>
                <br />
                <input type="email" name="email" required className="register__form--email" />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" name="password" required minLength={6} className="register__form--password" />
                <br />
                <label htmlFor="confirm-password">Confirm</label>
                <br />
                <input type="password" name="confirm" required minLength={6} className="register__form--confirm" />
                <br />
                <br />
                {data && <p>{data}</p>}
                <button className="register__form--button">Register</button>
            </Form>
        </div>
       
        </>
    )
}

export default Register;

export async function action({request}) {
    const data = await request.formData();

    const userInfo = {
        firstname: data.get('firstname'),
        lastname: data.get('lastname'),
        email: data.get('email'),
        password: data.get('password'),
        confirm: data.get('confirm')
    }

   const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userInfo)
    });

    if (response.status === 400) {
        return response;
    }

    if (response.status === 422) {
        return response;
    }

    if (response.status === 201) {
        return response;
    }
    
    return redirect('/signin');
}