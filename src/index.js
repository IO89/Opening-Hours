import React from 'react';
import ReactDOM from 'react-dom';
import {OpeningHours} from './OpeningHours';

const App = () => {
    return (
        <>
            <OpeningHours/>
        </>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root'));