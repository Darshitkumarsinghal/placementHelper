import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import Router from './Routes/routes.js'


dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',Router)
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;



Connection(username,password);

const port = 8000;
app.listen(port,() =>{
    console.log(`server is running on ${port}`)
})