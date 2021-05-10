const {addUser,removeUser,getUser,getRoom} = require('./users');

const userJoined = (socket,{username,room},callback) =>{
      
    const welcomeMessage = !getRoom(room) ? `${username} has created room ${room}` : `${username} welcome to room ${room}`;
    const {error,user} = addUser({id:socket.id,username,room});
    
    if(error) return callback(error);
    
    socket.emit('message',{user:'bot',text:welcomeMessage,time:new Date()})
    socket.broadcast.to(user.room).emit('message',{user :'bot' ,text :`${user.username} has joined!`,time:new Date()})

    socket.join(user.room);
    callback();
}

const userSendMessage = (io,socket,message,callback) =>{
    const user = getUser(socket.id);    
    user ? io.to(user.room).emit('message',{user:user.username , text : message,time:new Date()}) : null;
    callback();
}


const userDisconnected = (io,socket) =>{
    const user = removeUser(socket.id);
    user? io.to(user.room).emit('message',{user:'bot',text:`${user.username} left the chat`,time:new Date()}) : null;
}


module.exports = {
    userJoined,
    userSendMessage,
    userDisconnected,
}