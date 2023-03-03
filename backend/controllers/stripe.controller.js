const dotenv = require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SEC_KEY);

// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

exports.paymentSheet = async (req,res)=>{
      // Use an existing Customer ID if this is a returning customer.
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2020-08-27'}
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'usd',
    customer: customer.id,
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: process.env.STRIPE_PUB_KEY
  });
}

