import {Form, redirect} from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";

function SignIn() {

    return (
        <>
            <Header />
            <div className="signin">
            <Form method='post' className="signin__form">
                <label htmlFor="email" className="signin__form--email-label">Email</label> 
                <br />
                <input type="email" name="email" required className="signin__form--email" />
                <br />
                <label htmlFor="password" className="signin__form--password-label">Password</label> <br />
                <input type="password" name="password" required minLength={6} className="signin__form--password" />
                <br />
                <br />
                <button className="signin__form--button">Sign In</button>
            </Form>
            </div>
            <Footer />
        </>
    )
}

export default SignIn;

export async function action({request}) {
    const data = await request.formData();

    const loginInfo = {
        email: data.get('email'),
        password: data.get('password')
    }

    const response = await fetch('http://localhost:3000/signin', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
    });

    const res = await response.json();
    
    console.log(res)
    return redirect('/')
}