import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WhyUSSection() {

    const about_cards = [
        {
            icon: "fa-solid fa-truck-fast",
            title: "Fast Delivery",
            body: "Experience fast and reliable service with our dedicated and experienced team. We ensure a thorough clean using safe, non-toxic products, providing a pristine and safe space for you and your loved ones."
        },
        {
            icon: "fa-brands fa-intercom",
            title: "Personalized Cleaning Services",
            body: "We stand out with our exceptional customer service, customized cleaning plans, and flexible scheduling to meet your unique needs. Trust us to deliver a consistent, high-quality clean that exceeds your expectations every time."
        },
        {
            icon: "fa-solid fa-dollar-sign",
            title: "Affordable Pricing",
            body: "Experience our commitment to affordability with competitive pricing and no compromise on quality. Our expert team ensures every nook and cranny is spotless, using eco-friendly products to leave your home or office sparkling clean."
        },
        {
            icon: "fa-solid fa-shield-halved",
            title: "Reliability",
            body: "Our cleaning services are built on reliability, trust, and excellence. We prioritize your peace of mind by ensuring every cleaner is thoroughly vetted and trained to deliver the highest standards of cleanliness."
        },
        {
            icon: "fa-solid fa-circle-check",
            title: "Guaranteed Satisfaction",
            body: "We take pride in our work, offering a 100% satisfaction guarantee. Our professional team goes above and beyond to ensure your space is not just clean, but transformed into a haven of comfort and hygiene."
        },
        {
            icon: "fa-solid fa-lock",
            title: "Safety",
            body: "Committed to sustainability, we use only eco-friendly products and methods. Our green cleaning solutions not only protect your health but also help preserve the environment, making your space safe and spotless."
        }
    ];

    return (
        <section className="WhyUS-section">
            <h1>Why Choose Us?</h1>
            <span className="WhyUS-container">
                {about_cards.map((item, index) => (
                    <div className="whyus_card" key={index}>
                        <div>
                            <p>
                                <FontAwesomeIcon icon={item.icon} className="fontawesome-icon" />
                            </p>
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </div>
                ))}

            </span>
        </section>
    );
}

export default WhyUSSection;