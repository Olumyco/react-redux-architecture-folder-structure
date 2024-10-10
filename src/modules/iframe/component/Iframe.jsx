import React, { useState } from 'react';
import { Loader } from 'semantic-ui-react';
import './iframe.scss';


const Iframe = ({ iframeUrl }) => {
    const [isLoading, setIsLoading] = useState(true);

    const iframeLoaded = () => setIsLoading(false);

    return (
        <div className="">

            {isLoading &&
                <div className="loader">
                    <Loader active inline='centered' />
                </div>
            }

            {iframeUrl &&
                <iframe
                    className="iframe__layout"
                    onLoad={iframeLoaded}
                    src={iframeUrl}
                    frameBorder='0'
                />
            }
        </div>
    );
};

export default Iframe;