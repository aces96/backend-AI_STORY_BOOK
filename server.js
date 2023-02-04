const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const AuthRoute = require('./routes/user.route')
const StoryRoute = require('./routes/story.route')
const StripeRoute = require('./routes/stripe.route')


const app = express();


app.use(cors());

app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', AuthRoute)
app.use('/api', StoryRoute)
app.use('/api', StripeRoute)




main()

async function main(){
    app.listen(process.env.PORT, () => `Server is running on port ${process.env.PORT}`);
    console.log('Connection Successed !!');
    console.log(`Server is running on port ${process.env.PORT}`);
    

}