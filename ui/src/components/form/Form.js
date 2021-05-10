import {useState,useContext, useEffect} from "react";
import {error} from './control/error';
import {pattern} from './control/regEx';
import {validate} from './control/validate';
import {ChatContext} from '../../context/ChatContext';
import {useHistory} from 'react-router-dom';
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

const Form = () => {
    
    const history = useHistory();

    const {username,room,setUsername,setRoom} = useContext(ChatContext)
    const [usernameError,setUsernameError] = useState('');
    const [roomError,setRoomError] = useState('');
    const [valid,setValid] = useState(false);

    useEffect(()=>{
        if((username && room) && !(usernameError&&roomError))
            setValid(true)
        else
            setValid(false)
    },[username,room,usernameError,roomError,setValid])
    
    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        let setValue = null;
        let setError = null;
        switch (name) {

            case "username":
                setValue = setUsername;
                setError = setUsernameError;
                break;
            
            case "room":
                setValue = setRoom;
                setError = setRoomError;
                break;
            default:
                break;
        }

        if(validate(value,pattern[name]))
        {
            setValue(value);
            setError('');
        }
        else
        {
            setValue('');
            setError(error[name+"Error"]);
        }

    }

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        if(valid)
        {
            setUsername(username.trim().toLowerCase());
            setRoom(room.trim().toLowerCase());
            history.push(`/chat-room/${room}`);
        }
    }

    return (
        <>
            <motion.div 
                variants={containerVariante}
                initial='hidden'
                animate='visible'
                className="h-full grid grid-cols-12 items-center justify-center">
                    <div className="col-start-5 col-end-9 ">
                        <h1 className="text-3xl font-extrabold text-purple-gray uppercase tracking-wider mb-5">
                            start a chat
                        </h1>
                        <form 
                            className="flex flex-col align-center justify-center text-lg text-purple-gray"
                            name="mainForm"
                            onSubmit={handleSubmit}>
                            <div className="mb-3 ">
                                <input 
                                        onChange={handleChange}
                                        className=" w-full border-2 border-opacity-75 hover:border-opacity-100 border-purple-gray rounded  p-2  focus:outline-none" 
                                        type="text" 
                                        name="username"
                                        placeholder="username"/>

                                {usernameError && <span className="text-red-500 text-sm font-light">{usernameError}</span>}
                            </div>
                        
                            
                            

                            <div className="mb-3">
                                <input 
                                onChange={handleChange}
                                className=" w-full border-2 border-opacity-75 hover:border-opacity-100 border-purple-gray  rounded  p-2  focus:outline-none" 
                                type="text" 
                                name="room"
                                placeholder="room name"/>
                                {roomError && <span className="text-red-500 text-sm font-light">{roomError}</span>}
                            </div>
                            
                        
                            <button 
                                className={`bg-purple-gray opacity-${ valid? 100 : 75} text-white rounded font-bold tracking-wide  p-2  focus:outline-none`}
                                type="submit" >
                               continue 
                            </button>                           
                        </form>
                </div>
            </motion.div>
        </>
    );
}
 
export default Form;