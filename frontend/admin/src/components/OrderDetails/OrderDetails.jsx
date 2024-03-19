import styles from './OrderDetails.module.css';

const OrderDetails = () => {
    return (
        <div className={styles['orderdetails-container']}>
            <div className={styles.header}>
                <h2>March</h2>
                <h3>01 / 01 / 2024</h3>
            </div>
            <div className={styles.order}>
                <div className={styles.id}>
                    <b>Order Number:</b>
                    000001
                </div>
                <div className={styles.type}>
                    <b>Order Type:</b>
                    Strawberry Cheesecake
                </div>
                <div className={styles.status}>
                    <b>Status: (dropdown and select)</b>
                    Pending/ Completed/ Cancelled/ Out for delivery
                </div>
                <div className={styles.notes}>
                    <b>Additional Notes:</b>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
