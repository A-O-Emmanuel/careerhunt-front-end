import {Form, redirect, NavLink, useActionData} from "react-router-dom"

function PasswordReset() {

    const data = useActionData();

    return (
        <>
            <div className="signin">
            <Form method='post' className="signin__form">
                
                <label htmlFor="email" className="signin__form--email-label">Email</label> 
                <br />
                <input type="email" name="email" required className="signin__form--email" />
                <br />
                {data && data.id === '1' && <p>{data.message}</p>}
                <label htmlFor="newpasswprd" className="signin__form--email-label">New Password</label> 
                <br />
                <input type="password" name="newpassword" required className="signin__form--email" />
                <br />
                <label htmlFor="confirm" className="signin__form--password-label">Confirm</label> 
                <br />
                <input type="password" name="confirm" className="signin__form--password" />
                <br />
                {data && data.id === '2' && <p>{data.message}</p>}
                {data && data.id === '3' && <p>{data.message} <NavLink to='/signin' className="nav-link signin__in-register">Signin.</NavLink></p>}
                <br />
                <button className="signin__form--button">Reset password</button>
            </Form>
            </div>
        </>
    )
}

export default PasswordReset;


export async function action({request}) {
    const data = await request.formData();

    const loginInfo = {
        email:data.get('email'),
        newPassword: data.get('newpassword'),
        confirm: data.get('confirm')

    }

    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/forgotpassword`, {
        method: 'PATCH',
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

    if (response.status === 200) {
        return response;
    }

    return redirect('/')
}