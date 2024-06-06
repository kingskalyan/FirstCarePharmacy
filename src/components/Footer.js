import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './Footer.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Footer() {
    return (
        <footer class="footer">
            <div class="container">
                <div class="row2">
                    <div class="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><Link to="/contact">about us</Link></li>
                            <li><Link to="/contact">our services</Link></li>
                            <li><Link to="/contact">privacy policy</Link></li>
                            <li><Link to="/contact">affiliate program</Link></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><Link to="/faq">FAQ</Link></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>online shop</h4>
                        <ul>
                            <li><a href="/products">Face Creams</a></li>
                            <li><a href="/products">Medical Soaps</a></li>
                            <li><a href="/products">Hair Care</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>follow us</h4>
                        <div class="social-links">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;