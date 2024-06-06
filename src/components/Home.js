import React from 'react';
import ImageGallery from './ImageGallery';
import StoreFinder from './StoreFinder';
import ProductsDetailing from './ProductsDetailing';
import Footer from './Footer';
import WhatsAppIcon from './WhatsAppIcon';

function Home() {
    return (
        <div>
            <ImageGallery/>
            <StoreFinder />
            <div className='mt-5'>
                <img  src="https://asterpharmacy.in/images/Static-Banner-W-1920px-H-580px-Feb.jpg" width="100%"/>
            </div>
             <ProductsDetailing />
             <Footer/>
             <WhatsAppIcon/>
        </div>
    );
}

export default Home;