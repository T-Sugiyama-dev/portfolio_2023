import { useInView } from "react-intersection-observer";
import { InView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import { career_7th } from "./Career_desc";
import '../../css/about/resume.css'

interface CareerContent {
  term: string;
  role: string;
  company: string;
  desc: string;
}

const careerList: CareerContent[] = [
  { term: 'Apr 2023 - Recent', role: 'Software Engineer', company: 'IT-Consulting company', desc: career_7th },
  { term: 'Apr 2019 - Mar 2023', role: 'Graduate from university', company: '', desc: 'I was studying topics related to the information society and programming.' },
  { term: 'May 2022 - Mar 2023', role: 'Front-end engineer, Web designer', company: 'Web media company', desc: 'I was' },
  { term: 'May 2022 - Feb 2023', role: 'Front-end engineer, Web designer', company: 'Web design company', desc: 'I was' },
  { term: 'Jan 2022 - Apr 2022', role: 'Marketer, Customer Success', company: 'Startup online platform company', desc: 'I was' },
  { term: 'Dec 2021 - Apr 2022', role: 'Front-end engineer, Social media marketer, Sales', company: 'Startup OTA company', desc: 'I was' },
  { term: 'Aug 2021 - Mar 2022', role: 'Web designer', company: 'Startup web media company', desc: 'I was doing' },
  { term: 'Jun 2021 - Oct 2021', role: 'Social media marketer', company: 'Production company', desc: 'I was' },
  { term: 'Sep 2020 - Nov 2020', role: 'Videographer', company: 'Startup video production company', desc: 'I was'}
];

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

