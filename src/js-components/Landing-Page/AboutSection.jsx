import cleaning_bucket from "../../assets/bucket-of-cleaning-supplies.png"
import cleaning_equipment from "../../assets/set-of-cleaning-equipment.png"

const AboutSection = () => {
    return (
        <section className="about-us">
            <div className="about-us-content">
                <h2>About Us</h2>
                <img src={cleaning_bucket} alt="cleaning bucket" className="img1" />
                <p>
                    Welcome to JustKleaning, where we specialize in providing exceptional cleaning services for both residential and commercial clients. With years of experience in the industry, our mission is to deliver top-quality, eco-friendly cleaning solutions tailored to your needs. Our dedicated team of professionals uses advanced techniques and non-toxic products to ensure your space is not only clean but also safe and inviting.
                </p>
                <img src={cleaning_equipment} alt="cleaning equipment" className="img2" />
                <p>
                    At JustKleaning, we value integrity, quality, and customer satisfaction. Founded in 2022 as a family-owned business, we have grown while maintaining our commitment to excellence and personal service. Our carefully selected and trained staff work diligently to meet the highest standards, offering reliable, efficient, and affordable cleaning services. Trust us to make your home or office cleaner and healthier, and join our list of satisfied clients today.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;
