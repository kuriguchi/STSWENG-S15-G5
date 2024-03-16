import { useState, useEffect } from 'react';
import { format } from 'date-fns';

import styles from './LeftNav.module.css';

import calendarIcon from '../../assets/calendaricon.svg';
import logoutIcon from '../../assets/logouticon.svg';

const LeftNav = () => {
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
        <nav>
            <h1>
                ADMIN VIEW <br /> CONTROL PANEL
            </h1>

            <ul className={styles['nav-list']}>
                <li className={styles.active}>
                    <img src={calendarIcon} alt="calendarIcon" />
                    Order Calendar
                </li>
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
