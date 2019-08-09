import React from 'react';
import ReactDOM from 'react-dom';
import {OpeningHours} from './OpeningHours';

const App = () => {
    return (
        <>
            <>Opening hours</>
            <OpeningHours/>
        </>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root'));