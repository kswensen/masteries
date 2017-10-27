const express = require('express'),
    massive = require('massive');

const app = express();


const port = 3090;
app.listen(port, console.log(`It's lit on ${port} fam!`));