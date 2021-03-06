import express from 'express';
import cors from 'cors';

import app from "./app";
import env from "../config.dev";

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// middleware stack
app.use(cors());
app.use(express.static('dist'));
require('./routes')(app);

app.listen(env.port, () => {
    console.log(`process.env.NODE_ENV + listening on: ${env.port}`);
});
