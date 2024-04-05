import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

import styles from './OrderDetails.module.css';
import leftArrow from '../../assets/leftarrow.svg';

const OrderDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [dayOrders, setDayOrders] = useState(location.state.dayOrders);
    const order = location.state.order;
    const date = location.state.date;

    const [orderStatus, setOrderStatus] = useState(order.status);
    const [selectedStatus, setSelectedStatus] = useState(order.status);

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };

    const handleConfirmChanges = async () => {
        const updatedOrder = { ...order, status: selectedStatus };
        try {
            const response = await fetch(`http://localhost:4000/updateOrder/${order.orderNum}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedOrder),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            setDayOrders(dayOrders.map((o) => (o.orderNum === order.orderNum ? updatedOrder : o)));
            setOrderStatus(selectedStatus);
        } catch (error) {
            console.error('A problem occurred when trying to update the order:', error);
        }
    };

    return (
        <div className={styles['orderdetails-container']}>
            <div className={styles.header}>
                <div>
                    <button
                        className={styles.back}
                        onClick={() => navigate('/dashboard/day-orders', { state: { orders: dayOrders, date } })}
                    >
                        <img src={leftArrow} alt="back" />
                    </button>
                    <h2>{format(date, 'MMMM')}</h2>
                </div>
                <h3>{format(date, 'MM / dd / yyyy')}</h3>
            </div>
            <div className={`${styles.order} ${styles[selectedStatus.replace(/\s+/g, '-').toLowerCase()]}`}>
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
                    {order.additional}
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
