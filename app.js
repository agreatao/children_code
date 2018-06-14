const express = require('express');
const path = require('path');
const static = require('express-static');
const app = express();
const history = require('connect-history-api-fallback');

app.use(history());
app.use(static(path.join(__dirname, 'dist')));

app.listen(3000, () => {
    console.log('server start at http://localhost:3000');
});