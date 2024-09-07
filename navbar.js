



const Navbar = ({show}) => {
    return (
        <div className={show ? 'sidenav active' : 'sidenav'}>
            <ul>
                <li>
                    <Link to="/"><Explore Cars />Home</Link>
                </li>
                <li>
                    <Link to="/Our Services" />our services</Link>
                </li>
                <li>
                    <Link to="/about"><About />About</Link>
                </li>
                <li>
                    <Link to="/profile"><IoMdPerson />Profile</Link>
                </li>
                
            </ul>

        </div>
    )
}

export default Navbar