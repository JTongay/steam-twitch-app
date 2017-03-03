'use strict'

const express = require( 'express' );
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require( 'mongoose' );

//Mongo Stuff
//Reset the promise library of mongoose to the global javascript promise library
mongoose.Promise = global.Promise

//Connect to DB
mongoose.connect( 'mongodb://localhost/twitch-client' )

//Error handling and connection message
mongoose.connection.once( 'open', () => {
    console.log( 'You are connected, hooray!' );
} ).on( 'error', ( err ) => {
    console.log( 'You have an error: ', err );
} )

//MiddleWare
const bodyParser = require( 'body-parser' );
require( 'dotenv' ).config();

//API Modules
// const Twitch = require( 'twitch-api' );
// const Steam = require( 'steam-api' );
// const Blizzard = require( 'blizzard.js' );
//
// Blizzard.initialize( {
//     apikey: process.env.BLIZZARD_API_KEY
// } )
//
// const steamApp = new Steam.App( process.env.STEAM_API_KEY )
// const steamPlayer = new Steam.Player( process.env.STEAM_API_KEY, process.env.MY_STEAM_ID )
//
// const twitch = new Twitch( {
//     clientId: process.env.TWITCH_API_ID,
//     clientSecret: process.env.TWITCH_API_SECRET,
//     redirectUri: process.env.TWITCH_API_REDIRECT,
//     scopes: [ 'user_read', 'channel_read', 'channel_feed_read' ]
// } );

//Listening
app.listen( port, function () {
    console.log( 'hello from', port );
} );

module.exports = app;
