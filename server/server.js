const express = require('express'),
    app = express(),
    config = require('../dev/webpack.dev.config'),
    compiler = require('webpack')(config),
    history = require('connect-history-api-fallback'),
    PORT = 3000;

app.use(history());

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler, { reload: true }));


app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Server listening on port ${PORT}`)
    }
})