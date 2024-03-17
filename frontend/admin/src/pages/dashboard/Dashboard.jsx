import Header from '../../components/Header/Header.jsx';
import LeftNav from '../../components/LeftNav/LeftNav.jsx';
import FullCalendar from '../../components/FullCalendar/FullCalendar.jsx';

import styles from './Dashboard.module.css';

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
    return (
        <>
            <Header />
            <main className={styles.dashboard}>
                <LeftNav />
                <div className={styles['calendar-container']}>
                    <FullCalendar orders={exampleOrders} />
                </div>
            </main>
        </>
    );
};

export default Dashboard;
