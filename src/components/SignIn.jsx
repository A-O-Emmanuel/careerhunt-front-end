import {Form, redirect} from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";

function SignIn() {

    return (
        <>
            <Header />
            <Form method='post' className="signin_form">
                <label htmlFor="email">Email</label> 
                <br />
                <input type="email" name="email" required />
                <br />
                <label htmlFor="password">Password</label> <br />
                <input type="password" name="password" required minLength={6} />
                <br />
                <br />
                <button>Sign In</button>
            </Form>
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