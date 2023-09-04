import { handleElHover, handleElLeave } from "../cursor/Cursor";
import { useInView } from "react-intersection-observer";
import '../../css/about/skill.css'

interface SkillContent{
  name: string;
  percent: number;
}

const skillList: SkillContent[] = [
  { name: 'HTML', percent: 82 },
  { name: 'CSS', percent: 65},
  { name: 'JavaScript', percent: 78 },
  { name: 'React.js', percent: 73 },
  { name: 'Next.js', percent: 70 },
  { name: 'Vue.js', percent: 65 },
  { name: 'PHP', percent: 73 },
  { name: 'Laravel', percent: 70 },
  { name: 'Java', percent: 65 },
  { name: 'Spring', percent: 60 },
  { name: 'Python', percent: 57 },
  { name: 'Go', percent: 32 },
  { name: 'Bash Script', percent: 55 },
  { name: 'VBA', percent: 60 },
  { name: 'Flutter', percent: 47 },
  { name: 'AWS', percent: 35 },
  { name: 'MySQL', percent: 65 },
  { name: 'PostgreSQL', percent: 55 },
  { name: 'Oracle DB', percent: 30 },
  { name: 'Figma', percent: 87 },
  { name: 'XD', percent: 75 },
  { name: 'Photoshop', percent: 60 },
  { name: 'Lightroom', percent: 85 },
  { name: 'Premiere Pro', percent: 70 }
];

export const Skill = () => {

  const [ref, inView] = useInView({
    threshold: 0.25,
  });

  const skillClass = inView ? 'skill_percent' : 'close';

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
}