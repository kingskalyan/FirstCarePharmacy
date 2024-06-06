import React, { useRef, useState } from 'react';

function StoreFinder() {


    const h1Style = {
        color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    };

    const [selectedCity, setSelectedCity] = useState("");
    const [iframeSrc, setIframeSrc] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7614.46816204421!2d78.37467871177657!3d17.400550500000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb952ed6b25401%3A0xdf2214c9819b0d77!2sFirst%20Care%20Pharmacy!5e0!3m2!1sen!2sin!4v1714985906286!5m2!1sen!2sin");

    const selectRef = useRef(null);

    const clearChange = () => {
        if (selectRef.current) {
            selectRef.current.value = "select city";
        }
    }

    const handleChange = (event) => {
        if (selectRef.current) {
            let selectedValue = selectRef.current.value;
            setSelectedCity(selectedValue);
            switch (selectedValue) {
                case "Manikonda Golden Temple Rd":
                    setIframeSrc("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.234082252497!2d78.37413238043801!3d17.400550440916096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb952ed6b25401%3A0xdf2214c9819b0d77!2sFirst%20Care%20Pharmacy!5e0!3m2!1sen!2sin!4v1714987334554!5m2!1sen!2sin")
                    break;
                case "Ambedkar Nagar":
                    setIframeSrc("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4624.707367522634!2d78.40183313401235!3d17.321939963651683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbd002339eecf%3A0x1db4e7e1da349967!2sFirst%20Care%20Pharmacy!5e0!3m2!1sen!2sin!4v1714986330378!5m2!1sen!2sin");
                    break;
                case "Manikonda":
                    setIframeSrc("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7614.46816204421!2d78.37467871177657!3d17.400550500000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb952ed6b25401%3A0xdf2214c9819b0d77!2sFirst%20Care%20Pharmacy!5e0!3m2!1sen!2sin!4v1714985906286!5m2!1sen!2sin");
                    break;
                case "Kukatpally":
                    setIframeSrc("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60888.31855557247!2d78.34507927910153!3d17.482677900000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb937a645a5205%3A0x68ac9c80bb3bca6b!2sFirst%20Care%20Pharmacy!5e0!3m2!1sen!2sin!4v1714986432128!5m2!1sen!2sin")
                    break;
                case "Ram nagar":
                    setIframeSrc("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60926.3961678806!2d78.36350677910153!3d17.368555800000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97de9cbe692d%3A0xf5da1058971f58f3!2sFirst%20Care%20Pharmacy!5e0!3m2!1sen!2sin!4v1714986545353!5m2!1sen!2sin")
                    break;
                default:
                    setIframeSrc("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7614.46816204421!2d78.37467871177657!3d17.400550500000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb952ed6b25401%3A0xdf2214c9819b0d77!2sFirst%20Care%20Pharmacy!5e0!3m2!1sen!2sin!4v1714985906286!5m2!1sen!2sin");
                    break;
            }
        }
    };


    return (
        <div className="text-center mt-4">
            <section className="storefinder mt-md-5 mt-0 mt-lg-0 " id="storefinder">
                <div className="row custom_container">
                    <div className="col mb-4" >
                        <h1 className='gradient-text mt-8'>Store Finder</h1>
                    </div>
                    <div className="row justify-content-center mt-2">
                        <div className="col-lg  mb-lg-0 mb-4">
                            <div className="storebg">
                                <div id="myForm">
                                    <div className="input-group mb-3">
                                        <label htmlFor="inputState"></label>
                                        <select className="form-control" id="inputState" fdprocessedid="lhk8sr" ref={selectRef} style={{cursor:"pointer"}}>
                                            <option value="select city">--Select City--</option>
                                            <option value="Manikonda Golden Temple Rd">Manikonda Golden Temple Rd</option>
                                            <option value="Ambedkar Nagar">Ambedkar Nagar</option>
                                            <option value="Manikonda">Manikonda</option>
                                            <option value="Kukatpally">Kukatpally</option>
                                            <option value="Ram nagar">Ram Nagar</option>
                                        </select>
                                    </div>
                                    <div className='mb-5' style={{ display: 'flex', alignItems: "flex-start", justifyContent: "space-between", gap: "25px" }}>
                                        <button className="btn btn-primary" onClick={handleChange}>Show Results</button>
                                        <button type="reset" className='btn btn-outline-success' onClick={clearChange}>Clear Search</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg d-flex justify-content-center">
                                <div className="mapouter mapshadow">
                                    <div className="gmap_canvas" id="gmap_canvas2">
                                        {iframeSrc && <iframe src={iframeSrc} title="Store Locations" style={{ width: "450px", height: "450px" }}></iframe>}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default StoreFinder;
