import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input, Icon, Modal, Tab } from 'semantic-ui-react';
import Login from './Login';
import Signup from './Signup';
import * as authActions from '../actions/authActions';
import './auth.scss';


const mapDispatchToProps = dispatch => {
    return bindActionCreators({ ...authActions }, dispatch);
};

const Auth = ({ closeAuthModal, postLoginCredentials }) => {

    const panes = [
        {
            menuItem: 'Login as Admin',
            render: () => <Login postLoginCredentials={postLoginCredentials} />
        },
        {
            menuItem: 'Login as Leader',
            render: () => <Signup />
        }
    ];

    return (
        <div>
            <Modal size={'mini'} open={true} style={{ width: '430px' }}>
                <Modal.Header>
                    <span className="heading-title-text">Login</span>
                    <span style={{ float: 'right', cursor: 'pointer' }} onClick={closeAuthModal}>X</span>
                </Modal.Header>
                <Modal.Content style={{ padding: '20px 40px' }}>
                    <Tab menu={{ color: 'teal', secondary: true, pointing: true }} panes={panes} />
                </Modal.Content>
            </Modal>
        </div>
    );
};

export default connect(null, mapDispatchToProps)(Auth);