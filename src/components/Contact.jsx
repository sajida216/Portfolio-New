import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section">

      {/* Title */}
      <h1 className="contact-title gradient-text">CONTACT WITH ME</h1>

      <div className="contact-container">

        {/* RIGHT SIDE ONLY */}
        <div className="contact-info">

          <div className="contact-item">
            <FaEnvelope />
            <span>ayishathsajidha@gmail.com</span>
          </div>

          <div className="contact-item">
            <FaPhone />
            <span>+91 9148730914</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>Kasaragod, Kerala, India</span>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
             <a href="https://github.com/sajida216"> <FaGithub /></a>
           
            <a href="https://www.linkedin.com/in/ayishath-sajidha/"><FaLinkedin /></a>
            <FaWhatsapp />
            <FaInstagram />
          </div>

        </div>

      </div>

       <div className="contact-footer">
  <p>
    © 2026 <span>Sajidha</span>.All rights reserved. Built with passion and dedication.
  </p>
</div>

    </section>
  );
}

export default Contact;