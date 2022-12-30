'use strict';

function LikeButton(){
    const [liked, setLiked] = React.useState("")
    if(liked){
        return "You Liked This!"
    }

    return (<button onClick = { () => setLiked(true)}>Like</button>)
}

const rootNode = document.getElementById('like-button-root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(LikeButton));