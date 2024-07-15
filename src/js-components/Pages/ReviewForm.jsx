import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Input } from "../Other-component/FormProps";
import profileImg from '../../assets/profile.png';


const ReviewForm = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [formData, setFormData] = useState({
        author: '',
        image: '',
        text: '',
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
            setFormData((prevData) => ({
                ...prevData,
                image: URL.createObjectURL(file)
            }));
        }
    };

    const handleRatingClick = (rating) => {
        setFormData((prevData) => ({
            ...prevData,
            rating
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            author: '',
            image: '',
            text: '',
            rating: 0
        });
    };

    return (
        <section className='review-form--section'>
            <div className='rf-logo'>
                <img src={logo} alt="justKleaning logo" />
            </div>
            <form className="review-form" onSubmit={handleSubmit}>
                <h2>Post a Review</h2>
                <div className="uploadImage-section">
                    <span className="uploadImage" onClick={handleUploadClick}>
                        <FontAwesomeIcon icon="fa-solid fa-upload" />
                        <span>
                            <b>Upload your picture</b>
                            <p>file format  Max. 5MB </p>
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
                <div className='inputFormStyle'>
                    <label htmlFor="text">Review:</label>
                    <textarea
                        id="text"
                        name="text"
                        value={formData.text}
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
                <Button label="Submit Review" type="submit" />
            </form>
            <span onClick={() => navigate("/")} className="rflink"><FontAwesomeIcon icon="fa-solid fa-arrow-left" className="fA-arrow" /> Back to Home</span>
        </section>
    );
};

export default ReviewForm;
