import { useState, useRef } from "react";

const ServiceSection = () => {
  const servicePlans = [
    {
      title: "Basic Cleaning Plan",
      overview: "Our Basic Cleaning Plan is designed for regular maintenance and upkeep of your home or office. This plan covers all essential cleaning tasks to keep your space tidy and comfortable.",
      price: "£40.99",
      src: "https://www.shutterstock.com/image-photo/housework-house-keeping-service-two-600nw-2337635893.jpg"
    },
    {
      title: "Deep Cleaning Plan",
      overview: "Our Deep Cleaning Plan is perfect for a thorough, top-to-bottom clean of your home or office. This plan goes beyond regular maintenance, targeting hidden dirt and grime for a spotless finish.",
      price: "£60.55",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj6K3P3vbC7stxhCK_5JaNKSzVP1TGtviPTQ&s"
    },
    {
      title: "Relocation Cleaning Plan",
      overview: "This Cleaning Plan ensures your new or old home is thoroughly cleaned during the transition. This plan is tailored to meet the specific needs of moving, ensuring a fresh start or a smooth handover.",
      price: "£120.00",
      src: "https://st3.depositphotos.com/20363444/35577/i/450/depositphotos_355770670-stock-photo-cropped-view-cleaner-rubber-gloves.jpg"
    },
    {
      title: "Outdoor Cleaning Plan",
      overview: "Our Outdoor Cleaning Plan is designed to keep your outdoor spaces clean, tidy, and welcoming. This plan includes services like garden maintenance, patio cleaning, and driveway washing.",
      price: "£80.99",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRroDIaD3rlWceW-qEm9ORMwYJeYJIOr2o-A&s"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    containerRef.current.scrollTo({
      left: containerRef.current.clientWidth * index,
      behavior: "smooth"
    });
  };

  return (
    <section className="service-section">
      <h1>Our Service Plan</h1>
      <div className="dots-container">
        {servicePlans.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      <div className="service-container" ref={containerRef}>
        {servicePlans.map((item, index) => (
          <div key={index} className="service-item">
            <div className="service-detail">
              <img src={item.src} alt="service images" />
              <span>
                <h3>{item.title}</h3>
                <p>{item.overview}</p>
              </span>
              <h1>{item.price}</h1>
              <button className="price-button">Schedule Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
