import { useMemo } from 'react';
import { Link } from 'react-router-dom';
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
        return orders.reduce((acc, order) => {
            const dateKey = format(order.datePickup, 'yyyy-MM-dd');
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
                    const orderLimit = 3;
                    return (
                        <div
                            key={day}
                            className={`${styles['day-cell']} ${isToday(day) ? `${styles['current-day']}` : ''}`}
                        >
                            <Link
                                to="day-orders"
                                state={{ orders: todaysOrders }}
                                key={day}
                                className={styles['day-link']}
                            >
                                <h1>{todaysOrders.length}</h1>
                                {/* {todaysOrders.slice(0, orderLimit).map((order) => {
                                    return (
                                        <div
                                            key={order._id} // replace with unique id
                                            className={`${styles['order-item']} ${
                                                styles[`${order.status.toLowerCase()}`]
                                            }`}
                                        >
                                            {order.orderedProduct.toUpperCase()}
                                        </div>
                                    );
                                })}

                                {todaysOrders.length > orderLimit && (
                                    <div className={styles['day-extra']}>
                                        {todaysOrders.length - orderLimit} more orders...
                                    </div>
                                )} */}
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

FullCalendar.propTypes = {
    orders: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            orderNum: PropTypes.string.isRequired,
            orderedProduct: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            contactNo: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            fbLink: PropTypes.string.isRequired,
            mode: PropTypes.string.isRequired,
            dedication: PropTypes.string.isRequired,
            orderDes: PropTypes.string.isRequired,
            address: PropTypes.string.isRequired,
            dateOrdered: PropTypes.instanceOf(Date).isRequired,
            datePickup: PropTypes.instanceOf(Date).isRequired,
            status: PropTypes.string.isRequired,
            __v: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default FullCalendar;
