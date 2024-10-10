import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import './auth.scss';

const Login = ({ postLoginCredentials }) => {
    const [credentails, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = e => {
        setCredentials(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    const handleSubmit = () => {
        setIsLoading(true);
        postLoginCredentials(credentails, resp => {
            setIsLoading(false);
        });
    };

    return (
        <div style={{ padding: '20px 0' }}>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label className="heading-title-text">Email</label>
                    <input name="email" placeholder="Email" value={credentails.email} onChange={handleChange} />
                </Form.Field>
                <Form.Field>
                    <label className="heading-title-text">Password</label>
                    <input type="password" name="password" placeholder="Password" value={credentails.password} onChange={handleChange} />
                </Form.Field>

                <br />
                {isLoading
                    ?
                    <Button fluid primary loading type="submit">Login</Button>
                    :
                    <Button fluid primary type="submit">Login</Button>
                }

            </Form>
        </div>
    );
};

export default Login;