let users = [];


const addUser = ({id,username,room,roomId}) =>{

    if(!(username && room))
        return {error : 'unauthenticated user'}
    

    const userExists = users.find((user) => username === user.username && roomId === user.roomId);

    if(userExists)
        return {error : 'username already exists'};
    
    const user ={id,username,room};
    users.push(user);
    return { user };
}


const removeUser = (id) =>{
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1)
        return users.splice(index,1)[0];
}


const getUser = (id) => users.find((user) => user.id === id);

    
const getRoom = (room) => 
{
    const user =  users.find((user)=>user.room === room);
    return user ? user.room : null;
}




module.exports ={
    addUser,
    removeUser,
    getUser,
    getRoom,
}