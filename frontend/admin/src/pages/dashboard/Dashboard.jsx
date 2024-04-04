import { useEffect, useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import Header from '../../components/Header/Header.jsx';
import LeftNav from '../../components/LeftNav/LeftNav.jsx';
import FullCalendar from '../../components/FullCalendar/FullCalendar.jsx';
import DayOrders from '../../components/DayOrders/DayOrders.jsx';
import OrderDetails from '../../components/OrderDetails/OrderDetails.jsx';

import styles from './Dashboard.module.css';

// const exampleOrders = [
//     {
//         _id: '65e70b08b57a5bfce771238a',
//         orderNum: '65e70b08b57a5bfce771238a',
//         orderedProduct: 'Cake',
//         name: 'John Doe',
//         contactNo: '1234567890',
//         email: 'john.doe@example.com',
//         fbLink: 'https://www.facebook.com/johndoe',
//         mode: 'Pick-up',
//         dedication: 'For Birthday',
//         orderDes: 'Special Instructions',
//         address: '123 Banana St',
//         dateOrdered: new Date('2024-04-02'),
//         datePickup: new Date('2024-04-05'),
//         status: 'Pending',
//         __v: 0,
//     },
//     {
//         _id: '65e70b55f876f7b7671ca664',
//         orderNum: '65e70b55f876f7b7671ca664',
//         orderedProduct: 'Cake',
//         name: 'John Doe',
//         contactNo: '1234567890',
//         email: 'john.doe@example.com',
//         fbLink: 'https://www.facebook.com/johndoe',
//         mode: 'Pick-up',
//         dedication: 'For Birthday',
//         orderDes: 'Special Instructions',
//         address: '123 Banana St',
//         dateOrdered: new Date('2024-04-04'),
//         datePickup: new Date('2024-04-20'),
//         status: 'Completed',
//         __v: 0,
//     },
//     {
//         _id: '65e70b55f876f7b7671ca661',

//         orderNum: '65e70b55f876f7b7671ca661',
//         orderedProduct: 'Cake',
//         name: 'John Doe',
//         contactNo: '1234567890',
//         email: 'john.doe@example.com',
//         fbLink: 'https://www.facebook.com/johndoe',
//         mode: 'Pick-up',
//         dedication: 'For Birthday',
//         orderDes: 'Special Instructions',
//         address: '123 Banana St',
//         dateOrdered: new Date('2024-02-23'),
//         datePickup: new Date('2024-04-01'),
//         status: 'Cancelled',
//         __v: 0,
//     },
//     {
//         _id: '65e70b55f876f7b7671ca662',

//         orderNum: '65e70b55f876f7b7671ca662',
//         orderedProduct: 'Cake',
//         name: 'John Doe',
//         contactNo: '1234567890',
//         email: 'john.doe@example.com',
//         fbLink: 'https://www.facebook.com/johndoe',
//         mode: 'Pick-up',
//         dedication: 'For Birthday',
//         orderDes: 'Special Instructions',
//         address: '123 Banana St',
//         dateOrdered: new Date('2024-02-23'),
//         datePickup: new Date('2024-04-01'),
//         status: 'Completed',
//         __v: 0,
//     },
//     {
//         _id: '65e70b55f876f7b7671ca665',

//         orderNum: '65e70b55f876f7b7671ca665',
//         orderedProduct: 'Cake',
//         name: 'John Doe',
//         contactNo: '1234567890',
//         email: 'john.doe@example.com',
//         fbLink: 'https://www.facebook.com/johndoe',
//         mode: 'Pick-up',
//         dedication: 'For Birthday',
//         orderDes: 'Special Instructions',
//         address: '123 Banana St',
//         dateOrdered: new Date('2024-02-23'),
//         datePickup: new Date('2024-04-01'),
//         status: 'Pending',
//         __v: 0,
//     },
//     {
//         _id: '65e70b55f876f7b7671ca667',

//         orderNum: '65e70b55f876f7b7671ca667',
//         orderedProduct: 'Cake',
//         name: 'John Doe',
//         contactNo: '1234567890',
//         email: 'john.doe@example.com',
//         fbLink: 'https://www.facebook.com/johndoe',
//         mode: 'Pick-up',
//         dedication: 'For Birthday',
//         orderDes: 'Special Instructions',
//         address: '123 Banana St',
//         dateOrdered: new Date('2024-02-23'),
//         datePickup: new Date('2024-04-01'),
//         status: 'Pending',
//         __v: 0,
//     },
//     {
//         _id: '65e70b55f876f7b7671ca66q',

//         orderNum: '65e70b55f876f7b7671ca66q',
//         orderedProduct: 'Cake',
//         name: 'John Doe',
//         contactNo: '1234567890',
//         email: 'john.doe@example.com',
//         fbLink: 'https://www.facebook.com/johndoe',
//         mode: 'Pick-up',
//         dedication: 'For Birthday',
//         orderDes: 'Special Instructions',
//         address: '123 Banana St',
//         dateOrdered: new Date('2024-02-23'),
//         datePickup: new Date('2024-04-01'),
//         status: 'Out for Delivery',
//         __v: 0,
//     },
// ];

const Dashboard = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await fetch('http://localhost:4000/getAllOrders');
            const data = await response.json();

            if (response.ok) {
                setOrders(data);
            }
        };

        fetchOrders();
    }, []);

    console.log(orders);
    return (
        <>
            <Header />
            <main className={styles.dashboard}>
                <LeftNav />
                <div className={styles['content']}>
                    <Routes>
                        <Route path="/" element={<FullCalendar orders={orders} />} />
                        <Route exacth path="/day-orders" element={<DayOrders />} />
                        <Route path="/day-orders/order-details" element={<OrderDetails />} />
                    </Routes>
                    <Outlet />
                </div>
            </main>
        </>
    );
};

export default Dashboard;
