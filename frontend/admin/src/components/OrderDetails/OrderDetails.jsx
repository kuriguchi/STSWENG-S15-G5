import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

import styles from './OrderDetails.module.css';
import leftArrow from '../../assets/leftarrow.svg';

const OrderDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const order = location.state.order;
    const date = location.state.date;

    const [orderStatus, setOrderStatus] = useState(order.status);
    const [selectedStatus, setSelectedStatus] = useState(order.status);

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };

    const handleConfirmChanges = () => {
        // TODO: change in db
        order.status = selectedStatus;
        setOrderStatus(order.status);
    };

    return (
        <div className={styles['orderdetails-container']}>
            <div className={styles.header}>
                <div>
                    <button className={styles.back} onClick={() => navigate(-1)}>
                        <img src={leftArrow} alt="back" />
                    </button>
                    <h2>{format(date, 'MMMM')}</h2>
                </div>
                <h3>{format(date, 'MM / dd / yyyy')}</h3>
            </div>
            <div className={`${styles.order} ${styles[selectedStatus.replace(/\s+/g, '-').toLowerCase()]}`}>
                <div className={styles.id}>
                    <b>Order Number:</b>
                    {order._id}
                </div>
                <div className={styles.type}>
                    <b>Order Type:</b>
                    {order.orderedProduct}
                </div>
                <div className={styles.recipient}>
                    <b>Recipient:</b>
                    {order.name}
                </div>
                <div className={styles.address}>
                    <b>Address:</b>
                    {order.address}
                </div>
                <div className={styles.status}>
                    <b>Status:</b>
                    <select value={selectedStatus} onChange={handleStatusChange}>
                        <option value="Completed">Completed</option>
                        <option value="Pending">Pending</option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="Out for Delivery">Out for Delivery</option>
                    </select>
                </div>
                <div className={styles.notes}>
                    <b>Additional Notes:</b>
                    {order.orderDes}
                </div>
                {selectedStatus !== orderStatus && (
                    <button className={styles['confirm-button']} onClick={handleConfirmChanges}>
                        Confirm Changes
                    </button>
                )}
            </div>
        </div>
    );
};

export default OrderDetails;
