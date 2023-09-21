import { handleElHover, handleElLeave } from "../cursor/Cursor";
import { Transition } from "../transition/Transition";
import { Resume } from "./Resume";
import { Skill } from "./Skill";
import { Footer } from "../footer/footer";
import car_body from '../../images/car/car_body.png';
import tire from '../../images/car/tire.png';
import './about.css'

export const About = () => {
  return(
    <div className="about_container">

      <Transition class="transition_about" text="Who I am" />

      <div className="about_wrapper">
        <div className="about_title_wrapper">
          <div>
            <h1
              onMouseEnter={handleElHover}
              onMouseLeave={handleElLeave}
              className="about_text"
            >
              Takumasa Sugiyama
            </h1>

            <p
              onMouseEnter={handleElHover}
              onMouseLeave={handleElLeave}
              className="about_text about_tag"
            >
              #Software engineer #Designer #Photographer #Videographer
            </p>

            <div className="scroll_wrapper">
              <p
                onMouseEnter={handleElHover}
                onMouseLeave={handleElLeave}
                className="scroll_text"
              >
                Scroll
              </p>
              <span className="scrollDown"></span>
            </div>

            <div className="circle_container">
              <div
                onMouseEnter={handleElHover}
                onMouseLeave={handleElLeave}
                className="circle c1">
              </div>
              <div
                onMouseEnter={handleElHover}
                onMouseLeave={handleElLeave}
                className="circle c2">
              </div>
            </div>
          </div>
        </div>

        <div className="about_desc_wrapper">
          <div className="about_creative_container">
            <div className="about_creative_wrapper">
  
              <div className="about_content_title_wrapper">
                <h2
                  onMouseEnter={handleElHover}
                  onMouseLeave={handleElLeave}
                  className="about_category"
                >
                  Creative Development
                </h2>

                <p
                  onMouseEnter={handleElHover}
                  onMouseLeave={handleElLeave}
                  className="about_text"
                >
                  I make apps, websites, epic photos and videos.
                  I do everything from design creation to development.
                </p>
              </div>

              <div className="car_container">

                <div className="car_body">
                  <img
                    onMouseEnter={handleElHover}
                    onMouseLeave={handleElLeave}
                    src={car_body}
                    alt="car body" />
                </div>

                <div className="tire_front">
                  <img 
                    onMouseEnter={handleElHover}
                    onMouseLeave={handleElLeave}
                    src={tire}
                    alt="car tire" />
                </div>

                <div className="tire_rear">
                  <img
                    onMouseEnter={handleElHover}
                    onMouseLeave={handleElLeave}
                    src={tire}
                    alt="car tire" />
                </div>
              </div>
            </div>
          </div>

          <div className="about_content_container">
            <h2 className="about_category">Resume</h2>
            <Resume />
          </div>

          <div className="about_content_container">
            <h2 className="about_category">Skill</h2>
            <Skill />
          </div>
     
        </div>

      </div>

      <div className="footer_relative">
        <Footer />
      </div>

    </div>
  );
}

