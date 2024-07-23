import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import customer_review_img from "../../assets/customer-review.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReviewSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [testimonials, setTestimonials] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('https://justkleaning-backend.onrender.com/api/get-review');
                const data = await response.json();
                setTestimonials(data);
            } catch (error) {
                console.error("Error fetching testimonials:", error);
            }
        };

        fetchReviews();
    }, []);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    if (testimonials.length === 0) {
        return <p>Loading testimonials...</p>;
    }

    return (
        <section className="testimonials">
            <div className='testimonial-title'>
                <h1>What our customers say about us</h1>
                <img src={customer_review_img} alt="customer review" />
            </div>
            <div className='review-section'>
                <div className='review-navi'>
                    <div className="testimonial-dots">
                        {testimonials.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => handleDotClick(index)}
                            ></span>
                        ))}
                    </div>
                    <div className="arrows">
                        <span className={`arrow-container ${currentIndex === 0 ? 'blue-bg' : ''}`} onClick={handlePrevClick}><FontAwesomeIcon icon="fa-chevron-left" className="arrow left-arrow" /></span>
                        <span className={`arrow-container ${currentIndex === testimonials.length - 1 ? 'blue-bg' : ''}`} onClick={handleNextClick}><FontAwesomeIcon icon="fa-chevron-right" className="arrow right-arrow" /></span>
                    </div>
                </div>
                <div className="testimonial-content">
                    <p className="testimonial-text">{testimonials[currentIndex].message}</p>
                    <div className="testimonial-image">
                        <img src={testimonials[currentIndex].image} alt="Customer" />
                        <div className="testimonial-info">
                            <h4>{testimonials[currentIndex].author}</h4>
                            <div className="stars">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <FontAwesomeIcon key={i} icon="fa-solid fa-star" className="star" />
                                ))}
                                {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                                    <FontAwesomeIcon key={i} icon="fa-regular fa-star" className="star" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={() => navigate("/review-form")}>Post a Review</button>
            </div>
        </section>
    );
};

export default ReviewSection;
