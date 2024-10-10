import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import './header.scss';
import logo from '../../../../images/logo.jpeg';


const Header = ({ openAuthModal, userData, updateIframeUrl, saveUserData }) => {
    const [isLogout, setIsLogout] = useState(false);

    const openLogout = () => setIsLogout(true);

    const logout = () => {
        saveUserData({});
        updateIframeUrl('');
    };

    const routeToIframe = url => {
        if (userData?.authName) {
            updateIframeUrl(url);
        } else {
            openAuthModal();
        }
    }

    return (
        <div className="header">
            <div className="left__side">
                <img className="logo" src={logo} />
                <h2>IYC Management Portal</h2>
            </div>
            <div className="menu">
                <p onClick={() => routeToIframe('http://91.235.129.103:4100')}>Accreditation</p>
                <p onClick={() => routeToIframe('http://91.235.129.103:4200')}>Analytics</p>
                <p onClick={() => routeToIframe('http://91.235.129.103:4300')}>Reports & Records</p>
                <p onClick={() => routeToIframe('http://91.235.129.103:4400')}>Media Links</p>
                <p>|</p>
                <p onClick={userData?.authName ? openLogout : openAuthModal} className={userData?.authName ? 'auth__name' : 'login'}>
                    {userData?.authName || 'Login'}
                </p>
                <span style={{ marginTop: '-5px' }}><Icon circular inverted color='grey' name='user' /></span>
            </div>

            {isLogout && userData?.authName &&
                <div className="logout" onClick={logout}>
                    <p>Logout</p>
                </div>
            }
        </div>
    );
};

export default Header;