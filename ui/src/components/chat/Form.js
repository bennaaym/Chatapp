import {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {ChatContext} from '../../context/ChatContext';

const Form = ({socket}) => {

    const {message,setMessage} = useContext(ChatContext);

    const handleChange = (e) =>
    {
        setMessage(e.target.value);
    }

    const handleKeyDown=(e)=>{
        if(e.key === 'Enter')
            handleSubmit(e);
    }
   
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(message)
        {
            socket.emit('sendMessage',message,()=>setMessage(''))
        }
    }
    return (
        <>
           <form onSubmit={handleSubmit}>
               <div className="absolute bottom-2 w-full">
                   <div className="flex flex-row items-center justify-evenly text-sm">
                        <textarea 
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            className=" h-12 w-full text-gray-600 border-2 border-opacity-50 border-purple-gray rounded-lg outline-none resize-none mx-2 p-2"
                            value={message}>
                            </textarea>
                        <button type="submit" className="mx-3 text-purple-gray hover:text-purple-black focus:outline-none">
                            <FontAwesomeIcon icon={faPaperPlane} size={'lg'}/>
                        </button>
                   </div>
               </div>
           </form>
        </>
    );
}
 
export default Form;