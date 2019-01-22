import React from 'react';
import ReactDOM from 'react-dom';

import App from './src/App';

ReactDOM.hydrate(
    <App {...window.APP_STATE}/>,
    document.getElementById('root')
);