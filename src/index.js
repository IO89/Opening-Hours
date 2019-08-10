import React from 'react';
import ReactDOM from 'react-dom';
import {OpenHours} from './OpenHours';

const App = () => {
    return (
        <>
            <h2>Opening hours</h2>
            <OpenHours/>
        </>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root'));