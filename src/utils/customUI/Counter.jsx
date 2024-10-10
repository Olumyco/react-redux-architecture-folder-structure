import React from 'react';
import { Icon } from 'semantic-ui-react';
import './index.scss';

const Counter = ({ handleDecrement, handleIncrement }) => {

    return (
        <div className="counter">
            <div className="counter__minus" onClick={handleDecrement}>
                <Icon name='minus' />
            </div>
            
            <div className="counter__plus" onClick={handleIncrement}>
                <Icon name='plus' />
            </div>
        </div>
    );
};

export default Counter;