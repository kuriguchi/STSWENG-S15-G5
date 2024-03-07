import './ContactUs.css';

import contactUsHeader from '../../assets/contactus-imgs/contactus_header.svg';
import person1 from '../../assets/contactus-imgs/person1.png';
import person2 from '../../assets/contactus-imgs/person2.png';

const ContactUs = () => {
    return (
        <main>
            <div className="contact-us-page-content">
                <div className="contact-us-background">
                    <img src={contactUsHeader} alt="Contact Us" className="contactus-header" />
                </div>
                <div className="contactus-persons-container">
                    <div className="contactus-person">
                        <div className="contactus-person-image-container">
                            <img src={person1} alt="Person 1" className="contactus-person-image" />
                        </div>
                        <div className="contactus-person-details">
                            <h3 className="contactus-person-name">GIRL</h3>
                            <p className="contactus-person-email">
                                girl@gmail.com
                                <br />
                                +63 999 999 9999
                            </p>
                        </div>
                    </div>
                    <div className="contactus-person">
                        <div className="contactus-person-image-container">
                            <img src={person2} alt="Person 2" className="contactus-person-image" />
                        </div>
                        <div className="contactus-person-details">
                            <h3 className="contactus-person-name">BOY</h3>
                            <p className="contactus-person-email">
                                boy@gmail.com
                                <br />
                                +63 999 999 9999
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactUs;
