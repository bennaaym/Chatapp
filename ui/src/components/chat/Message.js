import Moment from 'react-moment';

const Message = ({message:{user,text,time},currentUser}) => {
    return (
        <>
            {
                (currentUser === user) && 
                <div className="flex flex-col items-end p-2 ">
                    <p className="w-max rounded-t-lg rounded-bl-lg bg-purple-gray  py-1 px-5">{text}</p>
                    <p className="w-max text-xs text-purple-gray tracking-wide">
                        <span className="italic pr-1">
                            <Moment date={time} fromNow/>
                        </span>
                        {currentUser}
                    </p>
                </div>
            }

            {
                (currentUser !== user) &&
                <div className="flex flex-col p-2 ">
                    <p className={`w-max rounded-t-lg rounded-br-lg bg-${(user==='bot')?'pink-900':'purple-black'}  py-1 px-5`}>{text}</p>
                    <p className="w-max text-xs text-purple-gray tracking-wide">
                        <span className="italic pr-1">
                            <Moment date={time} fromNow />
                        </span>
                        {user}
                    </p>
                </div>
            }
        </>
    );
}
 
export default Message;