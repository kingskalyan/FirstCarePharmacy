// import React from 'react';
// import { Link } from 'react-router-dom';
// import './style.css';

// function Navbar() {
//     return (
//         <div className="nav-wrapper">
//             <div className="logo-container">
//                 <img className="logo" src="/Images/FirstCareLogo.png" alt="Logo" />
//             </div>
//             <nav>
//                 <input className="hidden" type="checkbox" id="menuToggle" />
//                 <label className="menu-btn" htmlFor="menuToggle">
//                     <div className="menu"></div>
//                     <div className="menu"></div>
//                     <div className="menu"></div>
//                 </label>
//                 <div className="nav-container">
//                     <ul className="nav-tabs">
//                         <li className="nav-tab"><Link className="nav-link" to="/">Home</Link></li>
//                         <li className="nav-tab"><Link className="nav-link" to="/products">Products</Link></li>
//                         <li className="nav-tab"><Link className="nav-link" to="/services">Services</Link></li>
//                         <li className="nav-tab"><Link className="nav-link" to="/faq">FAQ</Link></li>
//                         <li className="nav-tab"><Link className="nav-link" to="/contact">Contact</Link></li>
//                         <li className="nav-tab"><Link className="nav-link" to="/careers">Careers</Link></li>
//                     </ul>
//                 </div>
//             </nav>
//         </div>
//     );
// }

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
    return (
        <div className="nav-wrapper">
            <div className="logo-container">
                <Link to="/">
                <img className="logo" src="./Images/FirstCareLogo.png" alt="Logo" style={{ width: "100px", height: "auto" }} />
                </Link>
            </div>
            <input className="hidden" type="checkbox" id="menuToggle" />
            <label className="menu-btn" htmlFor="menuToggle">
                <div className="menu"></div>
                <div className="menu"></div>
                <div className="menu"></div>
            </label>
            <nav className="nav-container">
                <ul className="nav-tabs">
                    <li className="nav-tab"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-tab"><Link className="nav-link" to="/products">Products</Link></li>
                    <li className="nav-tab"><Link className="nav-link" to="/faq">FAQ</Link></li>
                    <li className="nav-tab"><Link className="nav-link" to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import './style.css';

// function Navbar() {
//     return (
//         <div className="bg-gray-800 text-white">
//             <div className="container mx-auto flex justify-between items-center py-4">
//                 <div className="logo-container">
//                     <img className="logo h-10" src="/Images/FirstCareLogo.png" alt="Logo" />
//                 </div>
//                 <nav className="hidden md:flex items-center space-x-6">
//                     <ul className="flex space-x-6">
//                         <li><Link className="nav-link" to="/">Home</Link></li>
//                         <li><Link className="nav-link" to="/products">Products</Link></li>
//                         <li><Link className="nav-link" to="/services">Services</Link></li>
//                         <li><Link className="nav-link" to="/faq">FAQ</Link></li>
//                         <li><Link className="nav-link" to="/contact">Contact</Link></li>
//                         <li><Link className="nav-link" to="/careers">Careers</Link></li>
//                     </ul>
//                 </nav>
//                 <div className="md:hidden">
//                     <input className="hidden" type="checkbox" id="menuToggle" />
//                     <label className="menu-btn" htmlFor="menuToggle">
//                         <div className="menu"></div>
//                         <div className="menu"></div>
//                         <div className="menu"></div>
//                     </label>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Navbar;
