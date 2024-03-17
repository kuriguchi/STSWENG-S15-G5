import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/home/Home';
import OurStory from './pages/ourstory/OurStory';
import OurProducts from './pages/ourproducts/OurProducts';
import ContactUs from './pages/contactus/ContactUs';

// components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import OrderForm from './pages/ourproducts/orderform/OrderForm';

//test components
import CustomerInfo from './pages/ourproducts/orderform/components/CustomerInfo';
import OrderDetails from './pages/ourproducts/orderform/components/OrderDetails';
import DeliveryDetails from './pages/ourproducts/orderform/components/DeliveryDetails';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <div className="pages">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/ourstory" element={<OurStory />} />
                        <Route exact path="/ourproducts" element={<OurProducts />} />
                        <Route exact path="/contactus" element={<ContactUs />} />
                        <Route exact path="/orderform" element={<OrderForm />} />
                        
                        {/* For testing components only */}
                        <Route exact path="/customerinfo" element={<CustomerInfo />} />
                        <Route exact path="/orderdetails" element={<OrderDetails />} />
                        <Route exact path="/deliverydetails" element={<DeliveryDetails />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
