import styles from './Header.module.css';
import logo from '../../assets/logo2.svg';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo" className={styles.logo} />
        </header>
    );
};

export default Header;
