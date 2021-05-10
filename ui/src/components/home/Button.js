const Button = ({name,handleClick}) => {
    return (
        <>
            <button 
                onClick={handleClick}
                className="bg-purple-gray hover:opacity-75 text-gray-50 text-lg font-medium tracking-wide p-3 rounded mt-5 focus:outline-none">
                {name}
            </button>
        </>
    );
}
 
export default Button;