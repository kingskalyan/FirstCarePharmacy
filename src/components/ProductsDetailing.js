import React from 'react';

function ProductsDetailing() {
    return (
        <div className="row custom_container">
            <div className="row mt-md-5 mt-3 ml-3">
                <h1 className="gradient-text text-center">Our Product Range</h1>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-lg-2 col-6 border-rt border-bt d-flex flex-column align-items-center" style={{cursor:"pointer"}}> 
                    <img src="https://asterpharmacy.in/images/Prescription.svg" className="img-fluid pb-3" alt="Prescription" />
                    <h6 className="font-weight-bold black pb-4">Prescription</h6>
                </div>
                <div className="col-lg-2 col-6 border-rt border-bt border-rtn d-flex flex-column align-items-center" style={{cursor:"pointer"}}>
                    <img src="https://asterpharmacy.in/images/Personal%20care%20&%20hygiene.svg" className="img-fluid pb-3" alt="OTC Drugs" />
                    <h6 className="font-weight-bold black pb-4"> OTC Drugs</h6>
                </div>
                <div className="col-lg-2 col-6 border-rt border-bt d-flex flex-column align-items-center" style={{cursor:"pointer"}}>
                    <img src="https://asterpharmacy.in/images/Prescription.svg" className="img-fluid pb-3 mt-lg-0 mt-4" alt="Personal care & hygiene" />
                    <h6 className="font-weight-bold black pb-4">Personal care &amp; hygiene</h6>
                </div>
                <div className="col-lg-2 col-6 border-rt border-bt border-rtn d-flex flex-column align-items-center" style={{cursor:"pointer"}}>
                    <img src="https://asterpharmacy.in/images/Personal%20care%20&%20hygiene.svg" className="img-fluid pb-3 mt-lg-0 mt-4" alt="Feminine care" />
                    <h6 className="font-weight-bold black pb-4">Feminine care</h6>
                </div>
                <div className="col-lg-2 col-6 border-bt border-rty d-flex flex-column align-items-center" style={{cursor:"pointer"}}>
                    <img src="https://asterpharmacy.in/images/Feminine%20care.svg" className="img-fluid pb-3 mt-lg-0 mt-4" alt="Baby care" />
                    <h6 className="font-weight-bold black pb-4">Baby care</h6>
                </div>
                
            </div>

            <div className="row justify-content-center mb-5">
                <div className="col-lg-2 col-6 border-rt border-bt d-flex flex-column align-items-center" style={{cursor:"pointer"}}>
                    <img src="https://asterpharmacy.in/images/Wellness.svg" className="img-fluid pb-3 pt-4" alt="Wellness" />
                    <h6 className="font-weight-bold black">Wellness</h6>
                </div>
                <div className="col-lg-2 col-6 border-rt border-bty d-flex flex-column align-items-center" style={{cursor:"pointer"}}>
                    <img src="https://asterpharmacy.in/images/Sports%20nutrition.svg" className="img-fluid pb-3 pt-4" alt="Sports nutrition" />
                    <h6 className="font-weight-bold black">Sports nutrition</h6>
                </div>
                <div className="col-lg-2 col-6 border-rt border-rtn border-bty d-flex flex-column align-items-center" style={{cursor:"pointer"}}>
                    <img src="https://asterpharmacy.in/images/Surgical%20&%20disposables.svg" className="img-fluid pb-3 pt-4" alt="Surgical & disposables" />
                    <h6 className="font-weight-bold black">Surgical &amp; disposables</h6>
                </div>
                <div className="col-lg-2 col-6 border-rt d-flex flex-column align-items-center" style={{cursor:"pointer"}}>
                    <img src="https://asterpharmacy.in/images/oximeter.svg" className="img-fluid pb-3 pt-4" alt="Medical devices" />
                    <h6 className="font-weight-bold black">Medical devices</h6>
                </div>
                <div className="col-lg-2 col-6 border-rtn d-flex flex-column align-items-center" style={{cursor:"pointer"}}>
                    <img src="https://asterpharmacy.in/images/And%20much,%20much%20more.svg" className="img-fluid pb-3 pt-4" alt="And much, much more" />
                    <h6 className="font-weight-bold black">And much, much more</h6>
                </div>
            </div>
        </div>
    );
}

export default ProductsDetailing;
