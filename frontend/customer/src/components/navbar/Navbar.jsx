import { useMatch, useResolvedPath, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// assets
import './Navbar.css';
import logo from '../../assets/logo.svg';

const Navbar = () => {
    return (
        <header>
            <img src={logo} />
            <nav>
                <ul>
                    <CustomLink to="/">home</CustomLink>
                    <CustomLink to="/ourstory">our story</CustomLink>
                    <CustomLink to="/ourproducts">our products</CustomLink>
                    <CustomLink to="/contactus">contact us</CustomLink>
                </ul>
            </nav>
        </header>
    );
};

const CustomLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
};

CustomLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Navbar;
