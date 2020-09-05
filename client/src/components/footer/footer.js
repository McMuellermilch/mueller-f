import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_links">
        <div className="footer_github">
          <a href="https://github.com/McMuellermilch" target="_blank">
            Github
          </a>
        </div>
        <div className="footer_linkedin">
          <a
            href="https://www.linkedin.com/in/florian-m%C3%BCller-916269120/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="footer_copyright">&copy; 2020 Florian Müller</div>
    </div>
  );
};

export default Footer;
