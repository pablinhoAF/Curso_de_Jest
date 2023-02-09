const express = require('express');
const axios = require('axios')
const parser = require ('body-parser');

const handlers =  require('./src/users/index');
const posts =  require('./src/posts/index');
const userHandlers = handlers({axios})
const postsHandlers = posts({axios})

const authenticate = require('./src/middlewares/authenticate')

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(parser.urlencoded({ extended: false }))
// parse application/json
app.use(parser.json())

app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});

app.get('/', userHandlers.get);
app.post('/post', userHandlers.post )
app.put('/put/:id', userHandlers.put )
app.delete('/delete/:id', userHandlers.delete )

app.post('/post', authenticate, postsHandlers.post )
