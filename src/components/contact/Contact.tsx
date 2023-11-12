import React from 'react';
import { Transition } from '../transition/Transition';
import { Footer } from '../footer/footer';
import './contact.css'
import github from '../../images/contact/github.png';
import linkedin from '../../images/contact/linkedin.png';

export const Contact: React.FC = () => {

  return(
    <div className="contact_container">

      <Transition className="transition_contact" text="Say Hello!!" />

      <div className="contact_wrapper">

        <h2>Follow me</h2>

        <div className="contact_logo_wrapper">
          
          <a href="https://www.linkedin.com/in/takumasa-sugiyama-9420aa238" target="_blank" rel="noopener noreferrer">
            <div className="contact_logo">
              <img src={linkedin} alt="linkedin" />
            </div>
          </a>

          <a href="https://github.com/T-Sugiyama-dev" target="_blank" rel="noopener noreferrer">
            <div className="contact_logo">
              <img src={github} alt="github" />
            </div>
          </a>
          
        </div>

      </div>

      <Footer className="absolute" />

    </div>
  );
}