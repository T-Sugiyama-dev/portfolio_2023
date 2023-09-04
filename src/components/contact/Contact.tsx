import { Footer } from '../footer/footer';
import '../../css/contact/contact.css'
import github from '../../images/contact/github.png';
import linkedin from '../../images/contact/linkedin.png';

export const Contact = () => {
  return(
    <div className="contact_container">

      <div className="transition">
        <h2 className="transition_contact">
          Say Hello!!
        </h2>
      </div>

      <div className="contact_wrapper">

        <h2>Follow me</h2>

        <div className="contact_logo_wrapper">
          
          <a href="https://www.linkedin.com/in/takumasa-sugiyama-9420aa238" target="_blank" rel="noopener noreferrer">
            <div className="contact_logo">
              <img src={linkedin} />
            </div>
          </a>

          <a href="https://github.com/T-Sugiyama-dev" target="_blank" rel="noopener noreferrer">
            <div className="contact_logo">
              <img src={github} />
            </div>
          </a>
          
        </div>

      </div>

      <Footer />

    </div>
  );
}