import React from 'react';
import TopSelling from './TopSelling';
import './style.css';
import Footer from './Footer';
import WhatsAppIcon from './WhatsAppIcon';

function Products() {
  return (
    <div>
      <div>
        <h1 className='gradient-text text-center header'>
          Top Selling Products
        </h1>
      </div>
      <TopSelling />
      <div>
        <h1>
          Hair Care Products
        </h1>
      </div>
      <TopSelling />
      <div>
        <h1>
          Soaps & Sampoos
        </h1>
      </div>
      <TopSelling />
      <div style={{paddingTop:"50px"}}>
        <Footer />
      </div>
      <WhatsAppIcon/>
    </div>
  );
}

export default Products;