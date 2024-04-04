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
                {/* row 1 */}
                <div className={styles.num}>
                    <b>Order Number:</b>
                    {order.orderNum}
                </div>
                <div className={styles.recipient}>
                    <b>Recipient:</b>
                    {order.fname} {order.lname}
                </div>
                <div>
                    <b>Address 1:</b>
                    {order.addr1}
                </div>

                {/* row 2 */}
                <div className={styles.type}>
                    <b>Order Type:</b>
                    {order.orderedProduct}
                </div>
                <div className={styles.contact}>
                    <b>Contact Number:</b>
                    {order.contactNo}
                </div>
                <div>
                    <b>Address 2:</b>
                    {order.addr2}
                </div>

                {/* row 3 */}
                <div>
                    <b>Size:</b>
                    {order.size}
                </div>
                <div>
                    <b>Email:</b>
                    {order.email}
                </div>
                <div>
                    <b>Mode:</b>
                    {order.mode}
                </div>

                {/* row 4 */}
                <div>
                    <b>Quantity:</b>
                    {order.qty}
                </div>
                <div>
                    <b>Date Ordered:</b>
                    {format(order.dateOrdered, 'MM / dd / yyyy')}
                </div>
                <div>
                    <b>Date Pickup:</b>
                    {order.datePickup && !isNaN(new Date(order.datePickup))
                        ? format(order.datePickup, 'MM / dd / yyyy')
                        : ''}
                </div>

                {/*  */}
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
