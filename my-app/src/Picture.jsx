export default function Picture({user}){
    return(
        <>
         <img src={user.imageUrl} alt="aardy"
       className='avatar'
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
       ></img>
        </>
    )
}