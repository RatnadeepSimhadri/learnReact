import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route , Switch , Redirect } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Home , About , NavBar} from './components'
ReactDOM.render(<Router>
        <Routes/>
    </Router>
    , document.getElementById('root'));


function Routes(props){
    return ( <div>
        <NavBar/>
        <Switch>
        <Route exact path={'/Home'} component={Home} />
        <Route exact path={"/"}>
            <Redirect to={'/Home'}/>
        </Route>
        <Route exact path={"/About"} component={About}/>
        </Switch>
    </div>);
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
