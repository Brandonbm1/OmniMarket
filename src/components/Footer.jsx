import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <section className="footer__social">
          <FaTwitter />
          <FaFacebookSquare />
          <FaInstagram />
          <FaLinkedin />
        </section>
      </div>
    </div>
  );
};

export default Footer;
