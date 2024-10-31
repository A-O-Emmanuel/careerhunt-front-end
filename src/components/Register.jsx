
import { Form, redirect } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Register() {

    return (
        <>
        <Header />
        <div className="register">
            <Form method='post' className="register__form">
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
                <button className="register__form--button">Register</button>
            </Form>
        </div>
        <Footer />
        </>
    )
}

export default Register;

export async function action({request}) {
    const data = await request.formData();

    const userInfo = {
        email: data.get('email'),
        password: data.get('password'),
        confirm: data.get('confirm')
    }

   const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userInfo)
    });

    const res = await response.json()

    console.log(res)
    return redirect('/signin');
}