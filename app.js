const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const gameLogic = require('./game-logic')
const app = express()

/**
 * Check if game ID located in URL belongs to valid game
 * If so, connect client to game
 * else, create new game instance
 * '/' path should create new game instance 
 * '/game/:gameid' path should first search for game instance, then join it 
 * Otherwise, throw 404 error
 */

 const server = http.createServier(app)
 const io = socketio(server)

 //get gameID encoded in URL 
 //check to see if gameID matches with any of the games currently in session
 //Join the existing game session
 //Or create a new session
 //Regardless, run when client connects 

 io.on('connection', client => {
     gameLogic.initializeGame(io, client)
 })

 //this is where we connect to our DB
 server.listen(process.env.PORT || 8000)