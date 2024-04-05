import { useMemo, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isToday } from 'date-fns';
import styles from './FullCalendar.module.css';

import leftArrow from '../../assets/leftarrow.svg';
import rightArrow from '../../assets/rightarrow.svg';

const WEEKDAYS = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

function capitalizeWords(str) {
    return str
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

const FullCalendar = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await fetch('http://localhost:4000/getAllOrders');
            const data = await response.json();

            if (response.ok) {
                setOrders(data);
            }
        };

        fetchOrders();
    }, []);

    const location = useLocation();
    const [date, setDate] = useState(location.state?.date || new Date());

    const firstDayOfMonth = startOfMonth(date);
    const lastDayOfMonth = endOfMonth(date);

    const daysInMonth = eachDayOfInterval({
        start: firstDayOfMonth,
        end: lastDayOfMonth,
    });

    const startingDayIndex = getDay(firstDayOfMonth);
    const endingDayIndex = getDay(lastDayOfMonth);

    const ordersByDate = useMemo(() => {
        return orders.reduce((acc, order) => {
            const dateKey = format(order.dateOrdered, 'yyyy-MM-dd');
            if (!acc[dateKey]) {
                acc[dateKey] = [];
            }
            acc[dateKey].push(order);
            return acc;
        }, {});
    }, [orders]);

    return (
        <div className={styles.calendar}>
            <div className={styles['calendar-header']}>
                <button className={styles.arrow} onClick={() => setDate(new Date(date.setMonth(date.getMonth() - 1)))}>
                    <img src={leftArrow} alt="left arrow" />
                </button>
                <h2>{date.toLocaleString('default', { month: 'long' })}</h2>
                <h3>{date.getFullYear()}</h3>
                <button className={styles.arrow} onClick={() => setDate(new Date(date.setMonth(date.getMonth() + 1)))}>
                    <img src={rightArrow} alt="right arrow" />
                </button>
            </div>
            <div className={styles['calendar-body']}>
                {WEEKDAYS.map((day) => (
                    <div key={day} className={styles['day-header']}>
                        {day}
                    </div>
                ))}

                {Array.from({ length: startingDayIndex }, (_, i) => (
                    <div key={`empty-${i}`} className={styles['day-cell']} />
                ))}

                {daysInMonth.map((day) => {
                    const dateKey = format(day, 'yyyy-MM-dd');
                    const todaysOrders = ordersByDate[dateKey] || [];

                    const statusCounts = todaysOrders.reduce((counts, order) => {
                        const status = order.status.toLowerCase().replace(/\s+/g, '-');
                        counts[status] = (counts[status] || 0) + 1;
                        return counts;
                    }, {});

                    const statusOrder = ['pending', 'out-for-delivery', 'completed'];

                    return (
                        <div
                            key={day}
                            className={`${styles['day-cell']} ${isToday(day) ? `${styles['current-day']}` : ''}`}
                        >
                            <Link
                                to="day-orders"
                                state={{ orders: todaysOrders, date: day }}
                                key={day}
                                className={styles['day-link']}
                            >
                                {statusOrder.map((status) => {
                                    const count = statusCounts[status];
                                    if (count) {
                                        return (
                                            <div key={status} className={`${styles['order-item']} ${styles[status]}`}>
                                                {count} {capitalizeWords(status.replace(/-/g, ' '))}
                                            </div>
                                        );
                                    }
                                    return null;
                                })}

                                <span className={styles.day}>{day.getDate()}</span>
                            </Link>
                        </div>
                    );
                })}

                {Array.from({ length: 6 - endingDayIndex }, (_, i) => (
                    <div key={`empty-${i}`} className={styles['day-cell']} />
                ))}
            </div>
        </div>
    );
};

export default FullCalendar;
