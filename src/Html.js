import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Html extends Component {

    render() {
        const { children, initialState, scripts } = this.props;
        return (
            <html>
                <head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Agro-Weather</title>
                    <meta name="description" content="Agro-Weather" />
                    <meta name="author" content="Maciej Skwarczek" />
                </head>
                <body>
                    <div id="root"
                        dangerouslySetInnerHTML={{ __html: children }}>
                    </div>
                    {
                        initialState && (
                            <script dangerouslySetInnerHTML={{
                                __html: `window.APP_STATE=${JSON.stringify(initialState)}`
                            }}>
                            </script>
                    )}
                    {scripts.map((item, index) => {
                        return <script key={index} src={item}></script>;
                    })}
                </body>
            </html>
        );
    }
}

Html.propTypes = {
    children: PropTypes.node.isRequired,
    initialState: PropTypes.object,
    scripts: PropTypes.array
}