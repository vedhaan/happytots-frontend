import React from 'react';


const Footer = () => {
  return (
    <footer>
      <div className="footer-bg"></div>
      <div className="footer-objects">
        <div></div>
        <div></div>
      </div>

      <div className="footer-container">
        <div className="footer-card footer-brand">
          <img src={"/src/img/logo.png"} alt="logo" />
          <h2>Happy Tots Preschool</h2>
          <p style={{ fontSize: '13px', color: '#555' }}>
            Crafting little minds with care & creativity.
          </p>
        </div>

        <div className="footer-card">
          <h4>Programs</h4>
          <ul>
            <li><i className="fas fa-puzzle-piece"></i>Play Group</li>
            <li><i className="fas fa-cube"></i>Nursery</li>
            <li><i className="fas fa-chalkboard-teacher"></i>Kindergarten</li>
            <li><i className="fas fa-school"></i>After School</li>
          </ul>
        </div>

        <div className="footer-card">
          <h4>Connect</h4>
          <ul>
            <li><i className="fas fa-user-plus"></i>Admissions</li>
            <li><i className="fas fa-phone-alt"></i>Contact</li>
            <li><i className="fas fa-paper-plane"></i>Newsletter</li>
            <li><i className="fas fa-calendar-alt"></i>Events</li>
          </ul>
        </div>

        <div className="footer-card">
          <h4>Resources</h4>
          <ul>
            <li><i className="fas fa-question-circle"></i>FAQs</li>
            <li><i className="fas fa-blog"></i>Blog</li>
            <li><i className="fas fa-mobile-alt"></i>Parent App</li>
            <li><i className="fas fa-images"></i>Gallery</li>
          </ul>
        </div>
      </div>

      <div className="footer-note">
        © 2025 HappyTots Preschool — Play. Learn. Grow.
      </div>
    </footer>
  );
};

export default Footer;
