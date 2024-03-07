import PropTypes from 'prop-types';
import './Footer.css';

// icons
import facebook from '../../assets/social-media-icons/facebook.svg';
import messenger from '../../assets/social-media-icons/messenger.svg';
import instagram from '../../assets/social-media-icons/instagram.svg';

const Footer = ({ href, href1, href2 }) => {
    return (
        <footer>
            <div className="overlap-group">
                <div className="social-media-icons">
                    <a href={href1} rel="noopener noreferrer" target="_blank">
                        <img className="facebook" alt="Facebook" src={facebook} />
                    </a>
                    <a href={href2} rel="noopener noreferrer" target="_blank">
                        <img className="messenger" alt="Messenger" src={messenger} />
                    </a>
                    <a href={href} rel="noopener noreferrer" target="_blank">
                        <img className="instagram" alt="Instagram" src={instagram} />
                    </a>
                </div>
                <div className="text-wrapper">no mistake with mis&apos;cake</div>
            </div>
        </footer>
    );
};

Footer.propTypes = {
    href: PropTypes.string,
    href1: PropTypes.string,
    href2: PropTypes.string,
};

export default Footer;
