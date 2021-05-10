import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {useHistory} from 'react-router-dom'


const TopBar = ({title}) => {
    const history = useHistory();


    const handleClick = () =>{
        history.push('/');
    }
    return (
        <>
             <div className="flex flex-row items-center justify-between text-white bg-purple-gray p-2 rounded-t-md">
                <h1 className="text-lg  font-bold tracking-wider uppercase">{title}</h1>
                <div className="flex flex-row items-center justify-between">
                    <button 
                        onClick={handleClick}
                        className="focus:outline-none ml-5">
                        <FontAwesomeIcon icon={faTimesCircle} size={'lg'}/>
                    </button>
                </div>
            </div>
        </>
    );
}
 
export default TopBar;