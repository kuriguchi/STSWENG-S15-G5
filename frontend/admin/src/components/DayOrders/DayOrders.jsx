import { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { saveAs } from 'file-saver';

import styles from './DayOrders.module.css';
import leftArrow from '../../assets/leftarrow.svg';

const DayOrders = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const orders = location.state.orders;
    const date = location.state.date;
    console.log(orders);

    const [selectedStatus, setSelectedStatus] = useState('');
    const [filteredOrders, setFilteredOrders] = useState(orders);

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
        if (event.target.value === '') {
            setFilteredOrders(orders);
        } else {
            setFilteredOrders(orders.filter((order) => order.status === event.target.value));
        }
    };

    const exportToCSV = () => {
        const csvRows = [];

        // Check if there are orders
        if (orders.length > 0) {
            // Get the headers from the keys of the first order
            const headers = Object.keys(orders[0]);
            csvRows.push(headers.join(','));

            // Add the orders
            orders.forEach((order) => {
                csvRows.push(Object.values(order).join(','));
            });
        }

        // Convert the rows to a single string
        const csvString = csvRows.join('\n');

        // Create a Blob with the CSV string
        const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });

        // Download the CSV file
        saveAs(blob, `${format(date, 'MM-dd-yyyy')}_orders.csv`);
    };

    return (
        <div className={styles['dayorders-container']}>
            <div className={styles.header}>
                <div>
                    <button className={styles.back} onClick={() => navigate('/dashboard', { state: { date } })}>
                        <img src={leftArrow} alt="back" />
                    </button>
                    <h2>{format(date, 'MMMM')}</h2>
                </div>
                <h3>{format(date, 'MM / dd / yyyy')}</h3>
                <span>
                    Filter by Status:
                    <select value={selectedStatus} onChange={handleStatusChange}>
                        <option value="">All</option>
                        <option value="Completed">Completed</option>
                        <option value="Pending">Pending</option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="Out for Delivery">Out for Delivery</option>
                    </select>
                </span>
            </div>
            <div className={styles['orders-container']}>
                <div className={styles['orders-headers']}>
                    <h3>Order #:</h3>
                    <h3>Order Type:</h3>
                    <h3>Status:</h3>
                    <h3>Total:</h3>
                </div>
                {filteredOrders.map((order, index) => (
                    <Link
                        to="order-details"
                        state={{ order: order, date: date }}
                        className={`${styles['order-row']} ${styles[order.status.replace(/\s+/g, '-').toLowerCase()]}`}
                        key={index}
                    >
                        <div className={styles['order-num']}>{order.orderNum}</div>
                        <div>{order.orderedProduct}</div>
                        <div>{order.status}</div>
                        <div className={styles['order-price']}>{order.price}</div>
                    </Link>
                ))}

                {/* <Link to="order-details" className={styles['order-row']}>
                    <div className={styles['order-id']}>order</div>
                    <div>Strawberry Cheesecake</div>
                    <div>Pending</div>
                    <div className={styles['order-price']}>P 1,500.00</div>
                </Link> */}
            </div>
            <div className={styles['export-container']} onClick={exportToCSV}>
                Export as .csv
            </div>
        </div>
    );
};

export default DayOrders;
