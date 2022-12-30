
function MyButton({clicks, handleClick}){
  
    return(
        <>
        <br/>
        <button onClick={handleClick}>
        Clicked {clicks} times
        </button>
        </>
    );
}

export default MyButton;