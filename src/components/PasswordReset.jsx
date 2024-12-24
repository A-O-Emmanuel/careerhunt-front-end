import {Form, redirect, useActionData} from "react-router-dom"

function PasswordReset() {
    return (
        <>
            <div className="signin">
            <Form method='post' className="signin__form">
                <label htmlFor="newpasswprd" className="signin__form--email-label">New Password</label> 
                <br />
                <input type="passwprd" name="newpassword" required className="signin__form--email" />
                <br />
                <label htmlFor="confirm" className="signin__form--password-label">Confirm</label> <br />
                <input type="password" name="confirm" className="signin__form--password" />
                <br />
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
        newPassword: data.get('newpassword'),
        confirm: data.get('confirm')

    }

    const response = await fetch('http://localhost:4000/forgotpassword', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
    });

    if (response.status === 400) {
        return response;
    }

    return redirect('/')
}