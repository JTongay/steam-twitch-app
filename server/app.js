'use strict'

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//MiddleWare
const bodyParser = require('body-parser');

//API Modules
const Twitch = require('twitch-api');
const Steam = require('steam-api');
// const steamClient = new Steam.SteamClient();
// const steamUser = new Steam.SteamUser(steamClient)
const Blizzard = require('blizzard.js');

Blizzard.initialize({
  apikey: process.env.BLIZZARD_API_KEY
})

const twitch = new Twitch({
    clientId: process.env.TWITCH_API_ID,
    clientSecret: process.env.TWITCH_API_SECRET,
    redirectUri: process.env.TWITCH_API_REDIRECT,
    scopes: ['user_read', 'channel_read']
  });

twitch.getChannel('day9tv', function(err, res){
  if(err){
    console.log(err);
  } else {
    console.log(res);
  }
})


//Listening
app.listen(port, function () {
  console.log('hello from', port);
});

module.exports = app;