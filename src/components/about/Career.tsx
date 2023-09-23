import { motion } from 'framer-motion';
import { careerList } from "./Career_desc";
import './resume.css'

export const Career = () => {

  return(
    <div className="resume_container">
      {careerList.map((item, index) => (
        <div key={index}>
          <motion.div
            variants={{
              offscreen: {
                y: 100,
                opacity: 0,
              },
              onscreen: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 2,
                },
              },
            }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0 }}
            className="resume_wrapper"
          >
            <div className="resume_content">
              <p className="career_term">{item.term}</p>
              <h4 className="career_role">{item.role}</h4>
              <p className="career_company">{item.company}</p>
              <p className="career_desc">{item.desc}</p>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );

}

