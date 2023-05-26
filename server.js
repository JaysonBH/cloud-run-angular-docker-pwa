const express = require('express');
const app = express();

// app.use(express.static('dist/NG-APP-NAME'));
app.use(express.static('dist/my-angular-pwa'));

app.get('/health', function (req, res, next) {
    console.log('Request received on /health');
    res.send('Health is Good');
});

app.get('/', function (req, res, next) {
    console.log('Request received on /');
    res.redirect('/index.html');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(
        `Container started successfully. Listening for HTTP requests on ${PORT}`
    );
});
