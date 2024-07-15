import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook.jpg'
import instagram from '../../assets/instagram.jpeg'
import whatsapp from '../../assets/whatsapp.jpg'


function Footer() {
    return (
        <footer className="footer_section">
            <div className="footer-container">
                <div className="footer-logo" >
                    <img src={logo} alt="logo" />
                </div>
                <div className="footer-links">
                    <h3>Address</h3>
                    <li>Flat, 103, Albert Road, South Norwood,</li>
                    <li>London, United Kingdom.</li>
                    <li>7:30 am - 6:00 pm, Mon - Fri</li>
                    <li>9:00 am - 4:00 pm, Sat & Sun</li>
                </div>
                <div className="footer-links">
                    <h3>Contact Information</h3>
                    <li><a href="mailto:">+44783542521</a></li>
                    <li><a href="tel:+">justkleaning@gmail.com</a></li>
                    <li className='social-media-img'>
                        <img src={instagram} alt="social-media icon" />
                        <img src={facebook} alt="social-media icon" />
                        <img src={whatsapp} alt="social-media icon" />
                    </li>
                </div>
                <div className="footer-links">
                    <h3>Navigation Links</h3>
                    <li>Service</li>
                    <li>Testimonial</li>
                    <li>FAQ</li>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                </div>
            </div>
            <div className="footer-copyright">
                <p>Copyright © 2024. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;