import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { format } from 'date-fns';

import styles from './LeftNav.module.css';

import calendarIcon from '../../assets/calendaricon.svg';
// import editIcon from '../../assets/editicon.svg';
import logoutIcon from '../../assets/logouticon.svg';

const LeftNav = () => {
    const location = useLocation();
    let trimLoc = location.pathname;
    if (trimLoc.endsWith('/')) {
        trimLoc = trimLoc.slice(0, -1);
    }

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const formattedTime = format(time, 'hh : mm : ss');
    const formattedDate = format(time, 'MM / dd / yyyy');

    return (
        <nav className={styles['left-nav']}>
            <h1>
                ADMIN VIEW <br /> CONTROL PANEL
            </h1>

            <ul className={styles['nav-list']}>
                <Link to="/dashboard" style={{ all: 'unset' }}>
                    <li className={styles.active}>
                        <img src={calendarIcon} alt="calendarIcon" />
                        {trimLoc === '/dashboard' ? 'Order Calendar' : 'Back to Calendar'}
                    </li>
                </Link>
                {/* <li>
                    <img src={editIcon} alt="editIcon" />
                    Edit Contact
                </li> */}
                <li>
                    <img src={logoutIcon} alt="logoutIcon" />
                    Logout
                </li>
            </ul>

            <div className={styles['clock-container']}>
                <span>
                    <span className={styles['time-label']}>Time</span>
                    {formattedTime}
                </span>
                <span>
                    <span className={styles['date-label']}>Date</span>
                    {formattedDate}
                </span>
            </div>
        </nav>
    );
};

export default LeftNav;
