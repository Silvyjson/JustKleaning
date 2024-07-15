import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input } from "../Other-component/FormProps";

const NewsleterSection = () => {
    return (
        <>
            <span className="newsletter-section">
                <h1>Newsletter</h1>
                <p>Subscribe to our newsletter to get your weekly dose of news, updates, tips and special offers</p>
                <form action="" className="newsletter-form">
                    <div>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="newsletterStyle"
                        />
                        <FontAwesomeIcon icon="fa-regular fa-envelope" className="mail-logo" />
                    </div>
                    <Button label="Subscribe" />
                </form>
            </span>
        </>
    )
}

export default NewsleterSection