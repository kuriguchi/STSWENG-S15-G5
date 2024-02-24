import PropTypes from 'prop-types';
import './Footer.css';

const Footer = ({ href, href1, href2 }) => {
    return (
        <div className="PAGE-FOOTER">
            <div className="overlap-group">
                <div className="social-media-icons">
                    <a href={href} rel="noopener noreferrer" target="_blank">
                        <img
                            className="instagram"
                            alt="Instagram"
                            src="https://c.animaapp.com/mqRuAYwu/img/instagram-1@2x.png"
                        />
                    </a>
                    <a href={href1} rel="noopener noreferrer" target="_blank">
                        <img
                            className="facebook"
                            alt="Facebook"
                            src="https://c.animaapp.com/mqRuAYwu/img/facebook-1@2x.png"
                        />
                    </a>
                    <a href={href2} rel="noopener noreferrer" target="_blank">
                        <img
                            className="messenger"
                            alt="Messenger"
                            src="https://c.animaapp.com/mqRuAYwu/img/messenger-1@2x.png"
                        />
                    </a>
                </div>
                <div className="text-wrapper">no mistake with mis&apos;cake</div>
            </div>
        </div>
    );
};

Footer.propTypes = {
    href: PropTypes.string,
    href1: PropTypes.string,
    href2: PropTypes.string,
};

export default Footer;
