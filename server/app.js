const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const {userJoined,userSendMessage, userDisconnected} = require('./socket');

const PORT = process.env.PORT || 5000 ;
const ORIGIN = "http://localhost:3000";

const router = require('./router');
const cors = require('cors')
const app = express();
const server = http.createServer(app);
const io = socketio(server,{
    cors: {
      origin: ORIGIN,
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
  });


io.on('connection',(socket)=>{

    socket.on('join',({username,room},callback)=>userJoined(socket,{username,room},callback));

    socket.on('sendMessage',(message,callback)=> userSendMessage(io,socket,message,callback));
    
    socket.on('disjoin',()=> userDisconnected(io,socket))
})

app.use(cors())
app.use(router)


server.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
});
