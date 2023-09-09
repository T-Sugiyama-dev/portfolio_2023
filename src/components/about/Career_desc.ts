interface CareerContent {
  term: string;
  role: string;
  company: string;
  desc: string;
}

const career_8th = 
"I'm involved in the design and development of software to solve problems faced by client companies.";

const career_7th =
"I was involved in the operation of a web media platform, primarily handling coding and design tasks.";

const career_6th =
"I was primarily responsible for designing and coding an e-commerce website. In addition, I also designed banner images related to it. Furthermore, I created applications for process improvement using Google App Script.";

const career_5th =
"I was involved in marketing using email campaigns, designing banner images, and creating featured content.";

const career_4th =
"I handled both the design and coding of landing pages and also engaged in sales and social media marketing, among other tasks.";

const career_3th =
"I was responsible for designing the UI/UX for corporate websites and iOS applications.";

const career_2th =
"I was in charge of social media marketing and was involved in acquiring new influencers through sales efforts and supporting PR activities.";

const career_1th =
"I was involved in editing video educational materials.";

const university = 
"I was studying topics related to the information society and programming.";

export const careerList: CareerContent[] = [
  { term: 'Apr 2023 - Recent', role: 'Software Engineer', company: 'IT-Consulting company', desc: career_8th },
  { term: 'Apr 2019 - Mar 2023', role: 'Graduate from university', company: '', desc: university },
  { term: 'May 2022 - Mar 2023', role: 'Front-end engineer, Web designer', company: 'Web media company', desc: career_7th },
  { term: 'May 2022 - Feb 2023', role: 'Front-end engineer, Web designer', company: 'Web design company', desc: career_6th },
  { term: 'Jan 2022 - Apr 2022', role: 'Marketer, Customer Success', company: 'Startup online platform company', desc: career_5th },
  { term: 'Dec 2021 - Apr 2022', role: 'Front-end engineer, Social media marketer, Sales', company: 'Startup OTA company', desc: career_4th },
  { term: 'Aug 2021 - Mar 2022', role: 'Web designer', company: 'Startup web media company', desc: career_3th },
  { term: 'Jun 2021 - Oct 2021', role: 'Social media marketer', company: 'Production company', desc: career_2th },
  { term: 'Sep 2020 - Nov 2020', role: 'Videographer', company: 'Startup video production company', desc: career_1th }
];

