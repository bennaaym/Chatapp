import {useEffect,useContext, useState} from 'react';
import Form from "./Form";
import {ChatContext } from '../../context/ChatContext';
import io from 'socket.io-client';
import Messages from './Messages';
import {useHistory} from 'react-router-dom'
import TopBar from './TopBar';
import {motion} from 'framer-motion';

const containerVariante = {
    hidden:{
        x:'100vw'
    },
    visible:{
        x:0,
        transition :{duration:0.3 ,ease:'easeInOut'}
    }
}

let socket;

const Chat = () => {

    const history = useHistory();
    const {username,room,messages,setRoom, setMessages} = useContext(ChatContext);
    const [loadPage,setLoadPage] = useState(false);

    const ENDPOINT = process.env.REACT_APP_CHAT_APP_API;

    useEffect(()=>{
        socket = io(ENDPOINT);

        socket.emit('join',{username,room},(error)=>{
            if(error)
            {
                alert(error);
                history.push('/');
            }
            
            setLoadPage(true);
        })
       
        return ()=>{
            socket.emit('disjoin');
            socket.off();
        }

    },[username,room,setRoom,history,ENDPOINT])


    useEffect(()=>{
        socket.on('message',(message) =>{
            setMessages([...messages,message]);
        })
    },[messages,setMessages]);


    return (
        <>
           {
                loadPage &&
                <motion.div 
                variants={containerVariante}
                initial='hidden'
                animate='visible'
                className="Chat grid grid-cols-12 items-center justify-center h-full bg-gray-50 ">
                    <div className="col-start-4 col-end-10 h-4/5 bg-purple-white  rounded-lg shadow-lg border-2 border-opacity-25 ">
                        <div className="h-full relative">
                            <TopBar title={room}/>
                            <Messages/>
                            <Form socket={socket}/>
                        </div>
                    </div>
                </motion.div>
            }
        </>
    );
}
 
export default Chat;