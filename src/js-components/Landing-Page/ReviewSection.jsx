import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import customer_review_img from "../../assets/customer-review.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const testimonials = [
    {
        text: "Amazing service, cheaper price. They clean my home quickly and I really like the way they work. Love it!!",
        author: "Jonathon Daniel",
        image: "https://cdn3.vectorstock.com/i/1000x1000/81/82/customer-review-icon-vector-20968182.jpg",
        rating: 2
    },
    {
        text: "Amazing service, cheaper price. They clean my home quickly and I really like the way they work. Love it!!",
        author: "Jonathon Daniel",
        image: "https://cdn3.vectorstock.com/i/1000x1000/81/82/customer-review-icon-vector-20968182.jpg",
        rating: 4
    },
    // Add more testimonials here
];

const ReviewSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

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
                    <p className="testimonial-text">{testimonials[currentIndex].text}</p>
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
