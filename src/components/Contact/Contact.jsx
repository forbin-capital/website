import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';

import { contactData } from '../../mock/data';
import Title from '../Title/Title';

const Contact = () => {
  const { cta, btn, email } = contactData;

  return (
    <section id="contact">
      <Container>
        <Title title="Investors" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">{cta || ''}</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://github.com/forbin-capital'}
            >
              {btn || ''}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
