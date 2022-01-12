import { useState } from "react";

const Home = () => {

    // let name = 'jake';
    const [name, setName] = useState('Jake')

    const handleClick = (event) => {
        if(name === 'Jake'){
            setName('John')
        }else{
            setName('Jake')
        }
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;