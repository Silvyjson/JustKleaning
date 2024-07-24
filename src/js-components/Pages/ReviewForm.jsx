import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Input } from "../Other-component/FormProps";
import profileImg from '../../assets/profile.png';

const ReviewForm = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [loading, SetLoading] = useState(false);
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        image: '',
        author: '',
        email: '',
        message: '',
        rating: 0
    });

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prevData) => ({
                    ...prevData,
                    image: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRatingClick = (rating) => {
        setFormData((prevData) => ({
            ...prevData,
            rating
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        SetLoading(true)

        const { image, author, email, message, rating } = formData;

        const formDataToSend = {
            image,
            author,
            email,
            message,
            rating
        };

        if (!image || !author || !email || !message || !rating) {
            setError('Please fill in all required fields.');
            SetLoading(false)
            return;
        } else {
            setError(null)
        }

        try {
            const response = await fetch('https://justkleaning-backend.onrender.com/api/post-review', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataToSend),
            });

            if (response.ok) {
                SetLoading(false);
                setStatus('Review submitted successfully!');
                setFormData({
                    image: '',
                    author: '',
                    email: '',
                    message: '',
                    rating: 0
                });
            } else {
                SetLoading(false)
                setStatus(`Failed to submit`);
            }
        } catch (error) {
            SetLoading(false)
            console.error('Error:', error);
            setError('An error occurred while submitting the review.');
        }
    };

    if (status) {
        setTimeout(function () {
            setStatus(null);
        }, 5000)
    }

    return (
        <section className='review-form--section'>
            <div className='rf-logo'>
                <img src={logo} alt="JustKleaning logo" />
            </div>
            <form className="review-form" onSubmit={handleSubmit}>
                <h2>Post a Review</h2>
                <div className="uploadImage-section">
                    <span className="uploadImage" onClick={handleUploadClick}>
                        <FontAwesomeIcon icon="fa-solid fa-upload" />
                        <span>
                            <b>Upload your picture</b>
                            <p>File format Max. 25MB</p>
                        </span>
                    </span>
                    <img src={formData.image || profileImg} alt="Uploaded preview" />
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        style={{ display: "none" }}
                        ref={fileInputRef}
                        onChange={handleFileChange}
                    />
                </div>
                {error && <p className='error-message'>{error}</p>}
                <Input
                    label="Full Name"
                    htmlFor="author"
                    type="text"
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    required
                />
                <Input
                    label="Email"
                    htmlFor="email"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <div className='inputFormStyle'>
                    <label htmlFor="message">Review:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className='textareaStyle'
                    />
                </div>
                <div className="ratingstars">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <FontAwesomeIcon
                            key={star}
                            icon={formData.rating >= star ? "fa-solid fa-star" : "fa-regular fa-star"}
                            onClick={() => handleRatingClick(star)}
                        />
                    ))}
                </div>
                <Button
                    disabled
                    type="submit"
                    label={
                        status ? (
                            "Submitted"
                        ) : loading ? (
                            <FontAwesomeIcon icon="fa-spinner" spin />
                        ) : (
                            "Submit Review"
                        )
                    }
                    className="disabled"
                />
            </form>
            <span onClick={() => navigate("/JustKleaning/")} className="rflink">
                <FontAwesomeIcon icon="fa-solid fa-arrow-left" className="fA-arrow" /> Back to Home
            </span>
        </section>
    );
};

export default ReviewForm;
