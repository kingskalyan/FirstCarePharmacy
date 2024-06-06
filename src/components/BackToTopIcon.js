import React from 'react';
import './BackToTopIcon.css'; // Import CSS file for styling (if needed)

function BackToTopIcon() {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling animation
        });
    };

    return (
        <div className="back-to-top-icon" onClick={handleScrollToTop}>
            <img src="data:image/png;base64,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" alt="Back to Top" />
        </div>
    );
}

export default BackToTopIcon;