import express from "express";
import webpack from "webpack";
import path from "path";
import config from "../webpack.config.dev";
import open from "open";

/* eslint-disable no-console */

const port = (process.env.PORT || 3000);
const app = express();
const compiler = webpack(config);

if (process.env.NODE_ENV !== 'production') {
    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }));

    app.use(require('webpack-hot-middleware')(compiler));
}

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else if(process.env.NODE_ENV !== 'production') {
        open(`http://localhost:${port}`);
    }

    console.log(`Listening at http://localhost:${port}`)
});

export default app;
