// This file for run main service

import express from 'express';  // import file express
//chalk use for check response eazy by fig color at value

import chalk from 'chalk';  // import chalk after npm install chalk
import debug from 'debug';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express() // use express as app
const port = 3000 

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public'))); // call public path for working if find index.html file in public folder
// original javascript
app.get("/",(req,res) => {

    res.send('boen to dev');
})


// test port
app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
    // console.log(`Listening on port ${port}`+ chalk.red("xx"));
    // debug(`Listening on port ${port}`+ chalk.red("xx"));
})

// run by => node app.js