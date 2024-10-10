import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import Header from '../../layout/header/components/Header';
import Iframe from '../../iframe/component/Iframe';
import Auth from '../../auth/components/Auth';
import { saveUserData } from '../../auth/actions/authActions';
import './home.scss';

const mapStateToProps = state => ({
    userData: state.authReducers.userData
});

const mapDispatchToProps = dispatch => ({
    saveUserData: data => dispatch(saveUserData(data))
});

const Home = ({ userData, saveUserData }) => {
    const [authModal, setAuthModal] = useState(false);
    const [iframeUrl, setIframeUrl] = useState('');

    const openAuthModal = () => setAuthModal(true);
    const closeAuthModal = () => setAuthModal(false);
    const updateIframeUrl = url => {
        setIframeUrl('');
        setTimeout(() => setIframeUrl(url), 300);
    };

    useEffect(() => {
        Object.keys(userData).length && closeAuthModal();
    }, [userData]);

    return (
        <>
            <header>
                <Header openAuthModal={openAuthModal} userData={userData} updateIframeUrl={updateIframeUrl} saveUserData={saveUserData} />
            </header>

            {authModal &&
                <Auth closeAuthModal={closeAuthModal} />
            }
            <main>
                <section>
                    {iframeUrl &&
                        <Iframe iframeUrl={iframeUrl} />
                    }
                </section>
            </main>
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);