import BallPicture from '../../img/balls.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={ BallPicture } alt="balls logo" />
            <Link to='/'>
                Sports Together
            </Link>
        </nav>
    );
}

export default Navbar;