import { useMemo } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isToday } from 'date-fns';

import Header from '../../components/Header/Header.jsx';
import LeftNav from '../../components/LeftNav/LeftNav.jsx';

import styles from './Dashboard.module.css';

const WEEKDAYS = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

const exampleOrders = [
    {
        date: new Date(2024, 2, 2),
        orderTitle: 'Red Velvet Cake',
        status: 'pending',
    },
    {
        date: new Date(2024, 2, 20),
        orderTitle: 'Strawberry Cake',
        status: 'completed',
    },
    {
        date: new Date(2024, 2, 20),
        orderTitle: 'Blueberry Cheesecake',
        status: 'cancelled',
    },
    {
        date: new Date(2024, 2, 20),
        orderTitle: 'Blueberry Cheesecake',
        status: 'pending',
    },
];

const Dashboard = () => {
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
        return exampleOrders.reduce((acc, event) => {
            const dateKey = format(event.date, 'yyyy-MM-dd');
            if (!acc[dateKey]) {
                acc[dateKey] = [];
            }
            acc[dateKey].push(event);
            return acc;
        }, {});
    }, []);

    return (
        <>
            <Header />
            <main className={styles.dashboard}>
                <LeftNav />
                <div className={styles['calendar-container']}>
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
                                        className={`${styles['day-cell']} ${
                                            isToday(day) ? `${styles['current-day']}` : ''
                                        }`}
                                    >
                                        {todaysOrders.map((order) => {
                                            return (
                                                <div
                                                    key={order.orderTitle}
                                                    className={`${styles['order-item']} ${styles[`${order.status}`]}`}
                                                >
                                                    {order.orderTitle.length > 15
                                                        ? `${order.orderTitle.substring(0, 13).toUpperCase()}...`
                                                        : order.orderTitle.toUpperCase()}
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
                </div>
            </main>
        </>
    );
};

export default Dashboard;
