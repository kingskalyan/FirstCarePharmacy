import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ImageGallery() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./Images/first.jpg"
                        alt="First slide"
                        style={{ maxHeight: "600px", width: "70%" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./Images/second.jpg"
                        alt="First slide"
                        style={{ maxHeight: "600px", width: "70%" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./Images/third.jpg"
                        alt="First slide"
                        style={{ maxHeight: "600px", width: "70%" }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./Images/four.jpg"
                        alt="First slide"
                        style={{ maxHeight: "600px", width: "100%" }}
                    />
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./Images/fifth.jpeg"
                        alt="First slide"
                        style={{ maxHeight: "700px", width: "100%" }}
                    />
                </Carousel.Item> */}
            </Carousel>
        </div>
    );
}

export default ImageGallery;