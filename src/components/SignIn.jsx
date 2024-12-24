import {Form, redirect, useActionData} from "react-router-dom"


function SignIn() {
const data = useActionData();
    return (
        <>
           
            <div className="signin">
            <Form method='post' className="signin__form">
                <label htmlFor="email" className="signin__form--email-label">Email</label> 
                <br />
                <input type="email" name="email" required className="signin__form--email" />
                <br />
                {data && data.id === '1' && <p>{data.message} </p>}
                <label htmlFor="password" className="signin__form--password-label">Password</label> <br />
                <input type="password" name="password" className="signin__form--password" />
                <br />
                {data && data.id === '2' && <p>{data.message} </p>}
                <br />
                <button className="signin__form--button">Sign In</button>
            </Form>
            </div>
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

    const response = await fetch('http://localhost:4000/signin', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
    });

    if (response.status === 400) {
        return response;
    }
    if (response.status === 422) {
        return response;
    }

    const res = await response.json();
    const token = res.token

    localStorage.setItem('token', token)
    return redirect('/')
}