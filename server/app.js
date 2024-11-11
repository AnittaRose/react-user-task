const express = require('express');
const mongoConnect = require('./db/connect');
const userRouters = require('./routers/userRouters');
const authrouter = require ('./routers/authrouter')
const cors = require('cors');

const app = express();


require('dotenv').config();


app.use(express.static('../client'));
app.use(cors());

// Connect to MongoDB
mongoConnect();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(userRouters);
app.use(authrouter);

app.listen(process.env.PORT, () =>{
    console.log(`server running at http://localhost:${process.env.PORT}`)
});