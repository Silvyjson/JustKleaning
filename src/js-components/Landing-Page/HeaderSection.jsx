import { useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
import Menubar from "../Other-component/Navigation";
import logo from '../../assets/logo.png'

const HeaderLinkList = (props) => {
  const { list, clasS } = props;

  const toggleGet = () => {
    const navScroll = document.querySelector(clasS);

    navScroll.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <li onClick={toggleGet}>{list}</li>
  );
}

function Header() {
  // const navigate = useNavigate();

  function toggleList() {

    const menuIcon = document.querySelector(`.headersection-menu-icon`)

    const navElements = document.querySelectorAll(`.navElement`);

    menuIcon.classList.toggle("open");

    navElements.forEach(navElement => {
      navElement.classList.toggle("open_nav");
    });

  }

  useEffect(() => {
    const closeMenuOnBodyClick = (event) => {
      const menuIcon = document.querySelector(`.headersection-menu-icon`);
      const navElements = document.querySelectorAll(`.navElement`);

      if (!menuIcon.contains(event.target) && !navElements[0].contains(event.target)) {
        menuIcon.classList.remove("open");

        navElements.forEach(navElement => {
          navElement.classList.remove("open_nav");
        });
      }
    };

    document.body.addEventListener('click', closeMenuOnBodyClick);
    window.addEventListener('scroll', closeMenuOnBodyClick);

    return () => {
      document.body.removeEventListener('click', closeMenuOnBodyClick);
      window.removeEventListener('scroll', closeMenuOnBodyClick);
    };
  }, []);


  const toggleScroll = () => {
    const AboutSection = document.querySelector(".about-us");

    AboutSection.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="header_section">
      <nav className="header_nav-section">
        <div className="logo-menubar-container">
          <img src={logo} alt="logo" />
          <div className="h-menu">
            <Menubar
              onClick={toggleList}
              className="headersection-menu-icon"
            />
          </div>
        </div>

        <ul className="navElement">
          <li>Home</li>
          <HeaderLinkList
            list="Service"
            clasS=".service-section"
          />
          <HeaderLinkList
            list="Testimonial"
            clasS=".testimonials"
          />
          <HeaderLinkList
            list="FAQ"
            clasS=".faq-section"
          />
          <HeaderLinkList
            list="Contact"
            clasS=".footer_section"
          />
        </ul>

        <ul className="navElement navlist">
          <li>Schedule Now</li>
        </ul>
      </nav>

      <div className="header_content">
        <h1>
          Experience the joy of a spotless home with our expert cleaning services.
        </h1>
        <h1> We transform your living spaces into{" "}
          <b>pristine sanctuaries, ensuring every corner shines with perfection.</b>
        </h1>
        <p>
          Relax and enjoy a healthier, happier environment – we’ve got the cleaning covered.
        </p>

        <div className="button" onClick={toggleScroll}>
          <button>Learn more</button>
        </div>
      </div>
    </section>
  );
}

export default Header;



{/* <div className="cube-img">
  <img src="https://images.pond5.com/cleaning-service-related-icons-and-photo-194411170_iconl_nowm.jpeg" alt="cube" />
  <img src="https://st4.depositphotos.com/16122460/40188/i/450/depositphotos_401885300-stock-photo-cleaning-service-related-icons-woman.jpg" alt="cube" />
</div> */}