const Home = () => {

    const handleClick = (event) => {
        console.log("hello, world!")
        console.log(event)
    }

    const handleClickAgain = (name) => {
        console.log('Hello again, ' + name)
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClickAgain('Jake')}>Click me again</button>
        </div>
    );
}

export default Home;