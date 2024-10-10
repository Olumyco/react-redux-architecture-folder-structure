import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import './auth.scss';

const Signup = () => {


    return (
        <div style={{ padding: '20px 0' }}>
            <Form>
                <Form.Field>
                    <label className="heading-title-text">Email or Username</label>
                    <input placeholder='Email' />
                </Form.Field>

                <Form.Field>
                    <label className="heading-title-text">Password</label>
                    <input type='password' placeholder='Password' />
                </Form.Field>

                <br />
                <Button fluid primary type='submit'>Login</Button>
            </Form>
        </div>
    );
};

export default Signup;