import React from "react";
import { handleElHover, handleElLeave } from "../cursor/Cursor";
import { useInView } from "react-intersection-observer";
import './skill.css'

interface SkillContent {
  name    : string;
  percent : number;
};

const skillList: SkillContent[] = [
  { name: 'HTML', percent: 82 },
  { name: 'CSS', percent: 65},
  { name: 'JavaScript', percent: 78 },
  { name: 'TypeScript', percent: 75 },
  { name: 'React.js', percent: 73 },
  { name: 'Next.js', percent: 70 },
  { name: 'Vue.js', percent: 67 },
  { name: 'PHP', percent: 73 },
  { name: 'Laravel', percent: 70 },
  { name: 'Java', percent: 65 },
  { name: 'Spring', percent: 60 },
  { name: 'Python', percent: 57 },
  { name: 'Go', percent: 60 },
  { name: 'Bash Script', percent: 55 },
  { name: 'VBA', percent: 60 },
  { name: 'Flutter', percent: 52 },
  { name: 'AWS', percent: 35 },
  { name: 'MySQL', percent: 65 },
  { name: 'PostgreSQL', percent: 55 },
  { name: 'Oracle DB', percent: 42 },
  { name: 'Figma', percent: 87 },
  { name: 'XD', percent: 75 },
  { name: 'Photoshop', percent: 72 },
  { name: 'Lightroom', percent: 85 },
  { name: 'Premiere Pro', percent: 70 }
];

export const Skill: React.FC = () => {

  const [ref, inView]: any = useInView({
    threshold: 0.25,
  });

  const skillClass: string = inView ? 'skill_percent' : 'close';

  return(
    <div>
      <div ref={ref} className="skill_container">
        {skillList.map((item, index) => (
          <div key={index} className="skill_wrapper">
            <div className="skill_title">
              <p
                onMouseEnter={handleElHover}
                onMouseLeave={handleElLeave}
              >
                {item.name}
              </p>
            </div>

            <div className="skill_detail_container">
              <div className="skill_detail_wrapper">
                <div className="skill_detail">
                  <div className={skillClass} style={{ width: `${item.percent}%` }}></div>
                </div>
              </div>

              <p><span className="colored_percent">{item.percent}</span>%</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};