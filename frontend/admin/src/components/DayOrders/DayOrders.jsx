import { useLocation, Link } from 'react-router-dom';

import styles from './DayOrders.module.css';

const DayOrders = () => {
    const location = useLocation();

    console.log(location.state.orders);

    return (
        <div className={styles['dayorders-container']}>
            <div className={styles.header}>
                <h2>March</h2>
                <h3>01 / 01 / 2024</h3>
                <span>Filter by Status</span>
            </div>
            <div className={styles['orders-container']}>
                <div className={styles['orders-headers']}>
                    <h3>Order #:</h3>
                    <h3>Order Type:</h3>
                    <h3>Status:</h3>
                    <h3>Total:</h3>
                </div>
                {location.state.orders.map((order, index) => (
                    <Link to="order-details" className={styles['order-row']} key={index}>
                        <div className={styles['order-id']}>{order.id}</div>
                        <div>{order.type}</div>
                        <div>{order.status}</div>
                        <div className={styles['order-price']}>{order.price}</div>
                    </Link>
                ))}

                <Link to="order-details" className={styles['order-row']}>
                    <div className={styles['order-id']}>order</div>
                    <div>Strawberry Cheesecake</div>
                    <div>Pending</div>
                    <div className={styles['order-price']}>P 1,500.00</div>
                </Link>
                <div className={`${styles['order-row']} ${styles.pending}`}>
                    <div className={styles['order-id']}>000002</div>
                    <div>Strawberry Cheesecake</div>
                    <div>Pending</div>
                    <div className={styles['order-price']}>P 1,500.00</div>
                </div>
            </div>
        </div>
    );
};

export default DayOrders;
