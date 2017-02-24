'use strict'

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//MiddleWare
const bodyParser = require('body-parser');
require('dotenv').config();

//API Modules
const Twitch = require('twitch-api');
const Steam = require('steam-api');
const Blizzard = require('blizzard.js');

Blizzard.initialize({
  apikey: process.env.BLIZZARD_API_KEY
})

const steamApp = new Steam.App(process.env.STEAM_API_KEY)
const steamPlayer = new Steam.Player(process.env.STEAM_API_KEY, process.env.MY_STEAM_ID)

const twitch = new Twitch({
    clientId: process.env.TWITCH_API_ID,
    clientSecret: process.env.TWITCH_API_SECRET,
    redirectUri: process.env.TWITCH_API_REDIRECT,
    scopes: ['user_read', 'channel_read', 'channel_feed_read']
  });

twitch.getChannelChat('day9tv', function(err, res){
  if(err){
    console.log(err);
  } else {
    console.log(res);
  }
})

// steamApp.GetAppList().done(function(result){
//   console.log(result);
// });

steamPlayer.GetOwnedGames(process.env.MY_STEAM_ID).done((res)=>{
  console.log(res);
})
//Listening
app.listen(port, function () {
  console.log('hello from', port);
});

module.exports = app;
