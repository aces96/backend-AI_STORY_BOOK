const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const AuthRoute = require('./routes/user.route')
const StoryRoute = require('./routes/story.route')
const StripeRoute = require('./routes/stripe.route')
const SubscriptionRoute = require('./routes/subscription.route')
const schedule = require('node-schedule');
const {Subscription} = require('./config/migration')


const app = express();


app.use(cors());

app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', AuthRoute)
app.use('/api', StoryRoute)
app.use('/api', StripeRoute)
app.use('/api', SubscriptionRoute)




main()

async function main(){
    app.listen(process.env.PORT, () => `Server is running on port ${process.env.PORT}`);
    console.log('Connection Successed !!');
    console.log(`Server is running on port ${process.env.PORT}`);

    console.log(Date.now());
}

schedule.scheduleJob('0 0 */1 * * *', async () => {
     const subscription = await Subscription.findAll();
     const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000; 

     subscription.map((e)=>{
        const presentTime = new Date();
        const timeDifference = presentTime - payment.createdAt;
        
        if(timeDifference > thirtyDaysInMs){
            console.log('expired subscripition');
        }

     })

});