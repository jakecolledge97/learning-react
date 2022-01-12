const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Colledge Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a className="new-blog" href="/create">New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;