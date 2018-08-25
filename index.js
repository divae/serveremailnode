const express = require('express');
const app = express();

app.get('/', ( req, res) => {
    res.send({ 
        hello: 'world', 
        repository:'https://github.com/divae/serveremailnode'
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);