import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import path from 'path';

import Html from './src/Html';
import App from './src/App';

const app = express();

app.use(express.static(path.join(__dirname)));

app.get('*', async (req, res, next) => {
    const scripts = ['vendor.client.js', 'client.js'];

    const initialState = { initialText: "rendered on the server" };

    const appMarkup = ReactDOMServer.renderToString(
        <App {...initialState} />
    );
    const html = ReactDOMServer.renderToStaticMarkup(
        <Html
            children={appMarkup}
            initialState={initialState}
            scripts={scripts} />
    );

    res.send(`<!doctype html>${html}`);

});

app.listen(3000, () => console.log('Listening on localhost:3000'));