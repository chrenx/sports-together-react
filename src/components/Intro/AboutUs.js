import ClickImage from '../../img/click.jpeg';
import IntroBgImage from '../../img/index_bg.jpeg';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="split left-side">
                <h1>About Us</h1>
                <div className="centered">
                    <div>Prefer to workout with gym partners?</div>
                    <div id="empty-line5"></div>
                    <div>Wanna play sport games but lack of people with similar hobbies?</div>
                    <div id="empty-line20"></div>
                    <div>You need <span id="bold">Sports Together!</span></div>
                    <div id="empty-line5"></div>
                    <div>We are here to connect you with your future friends!</div>
                </div>
                <h3>Click the sign below to start your journey!</h3>
                <img src={ ClickImage } alt='click sign' />
                <div><Link id="enter-main" to='/main'><div>Let's</div><div>Sports</div><div>Together</div></Link></div>
            </div>

            <div className="split right-side">
                <img src={ IntroBgImage } alt='intro page background' />
            </div>
        </div>
    );
}
 
export default AboutUs;