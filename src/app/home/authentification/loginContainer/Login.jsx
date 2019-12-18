import React from 'react'
import { reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import { NavLink } from 'react-router-dom'
import { Field } from 'redux-form'
import './login.scss'
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// const asyncValidate = (values) => {
//     return sleep(1000).then(() => {
//         const { userName: u, password: p } = values
//         if (u !== "art" && p !== "12345678") {
//             throw { email: 'Email already Exists' }
//         }
//     })
// }

const validate = values => {
    const errors = {}
    const requiredFields = [
        'userName',
        'password',
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address'
    }
    return errors
}

const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
}) => {
    return (
        <TextField
            label={label}
            placeholder={label}
            variant="outlined"
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...custom}
        />
    )
}

const Login = props => {
    const { handleSubmit, pristine, reset, submitting, error } = props

    return (
        <div className="login-container">
            <div className="content">
                <h1>Accaunt Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="field-content">
                        <Field className="input-field" name="userName" component={renderTextField} label="User Name" />
                    </div>
                    <div className="field-content">
                        <Field className="input-field" name="password" component={renderTextField} label="Password" type="password" />
                    </div>
                    <div className="field-content">
                        <Field className="checkbox-field" name="remember" component="input" label="remember" type="checkbox" /> Remember Me
                    </div>
                    <div />
                    {error && <strong>{error}</strong>}
                    <div className="button-content">
                        <button type="submit" disabled={pristine || submitting}>Submit</button>
                        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                    </div>
                </form>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/">Home</NavLink>
            </div>
        </div>
    )
}

export default reduxForm({
    form: 'login',
    validate,
    // asyncValidate
})(Login)
