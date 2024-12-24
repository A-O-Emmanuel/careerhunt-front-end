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
                <button className="signin__form--button">Reset</button>
            </Form>
            </div>
        </>
    )
}

export default PasswordReset;