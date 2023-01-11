import './App.css';
import MyButton from './Button';
import { useState } from "react";
import Picture from './Picture';

const user = {
  name: 'Ratnadeep Simhadri',
  imageUrl: 'https://avatars.githubusercontent.com/u/9788837?v=4',
  imageSize: 90,
};

const products = [
  { title: 'Cricket', id: 1 },
  { title: 'Football', id: 2 },
  { title: 'Soccer', id: 3 },
];


function App() {
  const [clicks, setClicks] = useState(0)
  function handleClick(){
      setClicks(clicks + 1)
  }

  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
    );

  return (
    <div className="App">
       <h1>{user.name}</h1>
        <Picture user={user}></Picture>
        <br></br>
        <MyButton clicks = {clicks} handleClick = {handleClick}/>
        <MyButton clicks = {clicks} handleClick = {handleClick}/>

        <ul>
          <h3>Favorite Sports</h3>
          {listItems}
        </ul>
    </div>
  );
}

export default App;
