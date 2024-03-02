import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/home/Home';
import OurStory from './pages/ourstory/OurStory';
import OurProducts from './pages/ourproducts/OurProducts';
import ContactUs from './pages/contactus/ContactUs';

// components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

//test components
import CustomerInfo from './pages/ourproducts/orderform/components/CustomerInfo';

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
                        
                        {/* For testing components only */}
                        <Route exact path="/customerinfo" element={<CustomerInfo />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
