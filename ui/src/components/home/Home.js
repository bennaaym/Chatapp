import homeImg from '../../assets/images/home_img.svg';
import Button from './Button';
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

const Home = () => {
    const history = useHistory();

    return (
        <>
            <motion.div 
                variants={containerVariante}
                initial="hidden"
                animate="visible"

                className="Home grid grid-cols-12  h-full  items-center justify-center">
                <div className="grid col-start-3 col-end-6">
                    <h1 className="opacity-75 text-5xl font-extrabold text-purple-gray uppercase tracking-widest">let's chat</h1>
                    <Button name={"start"} handleClick={()=>{history.push('/start')}}/>
                </div>

                <div className="grid col-start-7 col-end-11 ">
                    <img src={homeImg} className = "object-cover" alt="chat illustration"/>
                </div>
            </motion.div>
        </>
    );
}
 
export default Home;