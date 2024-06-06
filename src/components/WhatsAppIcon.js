import React from 'react';
import './WhatsAppIcon.css'; // Import CSS file for styling (if needed)

function WhatsAppIcon() {
    // Replace '1234567890' with your actual WhatsApp number
    const phoneNumber = '7981937439';

    // WhatsApp link format: https://wa.me/<phonenumber>
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    return (
        <a href={whatsappLink} className="whatsapp-icon">
            <img src="/Images/whatsapp-icon.png" alt="WhatsApp" />
        </a>
    );
}

export default WhatsAppIcon;
