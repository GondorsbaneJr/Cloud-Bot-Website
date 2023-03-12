const stripe = require('stripe')('YOUR_SECRET_KEY');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.post('/charge', async (req, res) => {
    try {
        const charge = await stripe.charges.create({
        amount: 1500, // amount in cents
            currency: 'aud',
            source: req.body.stripeToken,
            description: 'Premium Membership'
        });
    res.render('success');
        } catch (err) {
        res.status(500).render('error', { error: err });
        }
});