import { useMemo } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isToday } from 'date-fns';
import PropTypes from 'prop-types';

import styles from './FullCalendar.module.css';

const WEEKDAYS = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

const FullCalendar = ({ orders }) => {
    const date = new Date();

    const firstDayOfMonth = startOfMonth(date);
    const lastDayOfMonth = endOfMonth(date);

    const daysInMonth = eachDayOfInterval({
        start: firstDayOfMonth,
        end: lastDayOfMonth,
    });

    const startingDayIndex = getDay(firstDayOfMonth);
    const endingDayIndex = getDay(lastDayOfMonth);

    const ordersByDate = useMemo(() => {
        return orders.reduce((acc, event) => {
            const dateKey = format(event.date, 'yyyy-MM-dd');
            if (!acc[dateKey]) {
                acc[dateKey] = [];
            }
            acc[dateKey].push(event);
            return acc;
        }, {});
    }, [orders]);

    return (
        <div className={styles.calendar}>
            <div className={styles['calendar-header']}>
                <h2>{date.toLocaleString('default', { month: 'long' })}</h2>
                <h3>{date.getFullYear()}</h3>
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
                    return (
                        <div
                            key={day}
                            className={`${styles['day-cell']} ${isToday(day) ? `${styles['current-day']}` : ''}`}
                        >
                            {todaysOrders.map((order, index) => {
                                return (
                                    <div
                                        key={index} // replace with unique id
                                        className={`${styles['order-item']} ${styles[`${order.status}`]}`}
                                    >
                                        {order.orderTitle.toUpperCase()}
                                    </div>
                                );
                            })}
                            <span className={styles.day}>{day.getDate()}</span>
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

FullCalendar.propTypes = {
    orders: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.instanceOf(Date).isRequired,
            orderTitle: PropTypes.string.isRequired,
            status: PropTypes.oneOf(['pending', 'completed', 'cancelled']).isRequired,
        })
    ).isRequired,
};

export default FullCalendar;
