import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.jpg";
import image4 from "../assets/img4.jpg";
import image5 from "../assets/img5.jpg";

const CarouselPage = () => {
  const carouselStyle = {
    maxHeight: "550px", 
    overflow: "hidden",
  };

  const imgStyle = {
    width: "100%",
    height: "auto", 
    objectFit: "cover", 
  };

  return (
    <div className="-mt-1" style={carouselStyle}>
      <Carousel
        useKeyboardArrows={true}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        swipeable={true} 
      >
        <div>
          <img src={image1} alt="slide 1" style={imgStyle} />
        </div>
        <div>
          <img src={image2} alt="slide 2" style={imgStyle} />
        </div>
        <div>
          <img src={image3} alt="slide 3" style={imgStyle} />
        </div>
        <div>
          <img src={image4} alt="slide 4" style={imgStyle} />
        </div>
        <div>
          <img src={image5} alt="slide 5" style={imgStyle} />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselPage;
