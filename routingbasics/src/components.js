import React from 'react';
import {Link} from 'react-router-dom'
export function Home(props){
    return (
        <div>
            Home Page
        </div>
    );
}

export function About(props){
    return (<div>
        About Page
    </div>);
}

export function NavBar(props){
    return (
        <div>
        <Link to={'/Home'}> Home </Link>
        <Link to={'/About'}> About </Link>
        </div>
);
}
