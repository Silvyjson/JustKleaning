import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import customer_review_img from "../../assets/customer-review.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';

const ReviewSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [testimonials, setTestimonials] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('https://justkleaning-backend.onrender.com/api/get-review');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTestimonials(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
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

    if (isLoading) {
        return <p className='t-error'>Loading testimonials...</p>;
    }

    if (error) {
        return <p className='t-error'>Error loading testimonials: {error}</p>;
    }

    return (
        <section className="testimonials">
            <div className='testimonial-title'>
                <h1>What our customers say about us</h1>
                <img src={customer_review_img} alt="customer review" />
            </div>
            {testimonials.length === 0 ? (
                <p className='t-error'>No testimonials available.</p>
            ) : (
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
                            <span className="arrow-container" onClick={handlePrevClick}>
                                <FontAwesomeIcon icon={faChevronLeft} className="arrow left-arrow" />
                            </span>
                            <span className="arrow-container" onClick={handleNextClick}>
                                <FontAwesomeIcon icon={faChevronRight} className="arrow right-arrow" />
                            </span>
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
                                        <FontAwesomeIcon key={i} icon={faSolidStar} className="star" />
                                    ))}
                                    {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                                        <FontAwesomeIcon key={i} icon={faRegularStar} className="star" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => navigate("/JustKleaning/review-form")}>Post a Review</button>
                </div>
            )}
        </section>
    );
};

export default ReviewSection;
