import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const FAQ = (props) => {
    const { question, answer, isOpen, onClick } = props;

    return (
        <div className="faq-content" onClick={onClick}>
            <h3 className={isOpen ? "qc" : ""}>{question}</h3>
            <article className={isOpen ? "open_article" : ""}>
                {answer}
            </article>
        </div>
    );
};

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggleArticle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const faq = [
        {
            question: "What cleaning services do you offer?",
            answer: "We offer a wide range of cleaning services including regular home cleaning, deep cleaning, office cleaning, move-in/move-out cleaning, and more. Our services are tailored to meet your specific needs."
        },
        {
            question: "How do you ensure safety during cleaning?",
            answer: "Safety is our top priority. We use eco-friendly cleaning products that are safe for your family, pets, and the environment. Our cleaning staff is trained in proper handling of cleaning agents and equipment."
        },
        {
            question: "Are your cleaning products environmentally friendly?",
            answer: "Yes, we are committed to using eco-friendly cleaning products that are effective yet gentle on the environment. We prioritize sustainability in all our cleaning practices."
        },
        {
            question: "Can I customize my cleaning plan?",
            answer: "Absolutely! We understand that every home or office has unique cleaning needs. You can customize your cleaning plan to include specific areas or tasks that are important to you."
        },
        {
            question: "Are your cleaning staff trained and insured?",
            answer: "Yes, all our cleaning staff are trained professionals who undergo background checks and are fully insured for your peace of mind. They are committed to delivering exceptional cleaning services."
        },
        {
            question: "How do I book your cleaning services?",
            answer: "Booking our services is convenient and easy. You can book directly through our website. Alternatively, you can also contact our customer service team via phone or email to discuss your cleaning requirements and schedule a convenient appointment."
        },
        {
            question: "Do I need to provide cleaning supplies or equipment?",
            answer: "No, we bring our own high-quality cleaning supplies and equipment. However, if you have specific preferences or allergies, please inform us in advance, and we will accommodate your needs."
        }
    ];

    return (
        <section className="faq-section contact-section">
            <h1>Frequently Asked questions ️</h1>
            <div className="faq-container">
                <div>
                    <h3 className="h3">Got questions? We got answers!</h3>
                    <p>Feel free to reach out to us if you have more questions for us.</p>
                    <div className="contact-icon">
                        <a href="mailto:"><FontAwesomeIcon icon="fa-regular fa-envelope" /></a>
                        <a href="tel:+"><FontAwesomeIcon icon="fa-solid fa-phone" /></a>
                    </div>
                </div>
                <div className="faq_card">
                    {faq.map((article, index) => (
                        <FAQ
                            key={index}
                            question={article.question}
                            answer={article.answer}
                            isOpen={index === openIndex}
                            onClick={() => handleToggleArticle(index)}
                        />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default FAQSection