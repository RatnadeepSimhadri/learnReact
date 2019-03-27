import React from 'react';
import {Link} from 'react-router-dom'
export function Home(){
    return (
        <div>
            Home
        </div>
    );
}

export function About(){
    return (<div>
        About
    </div>);
}

export function NavBar(){
    return (
        <div>
        <Link to={'/Home'}> Home </Link>
        <Link to={'/About'}> About </Link>
        </div>
);
}
