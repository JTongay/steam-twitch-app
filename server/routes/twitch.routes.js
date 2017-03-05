'use strict'

const express = require('express');
const router = express.Router({
  mergeParams: true
});
const Twitch = require( 'twitch-api' );
const twitch = new Twitch( {
    clientId: process.env.TWITCH_API_ID,
    clientSecret: process.env.TWITCH_API_SECRET,
    redirectUri: process.env.TWITCH_API_REDIRECT,
    scopes: [ 'user_read', 'channel_read', 'channel_feed_read' ]
} );


router.get('/getTwitch', (req, res, next)=>{
  twitch.getChannel('day9tv', (result)=>{
    res.json(result)
  })
})

module.exports = router;
