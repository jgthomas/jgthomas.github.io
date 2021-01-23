const iconWidth = '36px';
const imagePath = 'images';

const selfTeaching = {
  organisation: 'Self-teaching',
  alt: 'Self-teaching',
  width: iconWidth,
  image: `${imagePath}/laptop_man.png`,
  startDate: '2017',
  endDate: 'forever',
  role: 'Projects, Project, Projects!',
};

const edinburghCouncil = {
  organisation: 'City of Edinburgh Council',
  alt: 'Edinbrugh Council',
  width: iconWidth,
  image: `${imagePath}/edinburgh_council.jpg`,
  startDate: '2017',
  endDate: '2018',
  role: 'Database and VBA refactor',
};

const universityBirmingham = {
  organisation: 'University of Birmingham',
  alt: 'UoB',
  width: iconWidth,
  image: `${imagePath}/smallBham.png`,
  startDate: '2018',
  endDate: '2019',
  role: 'MSc in Computer Science',
};

const codebar = {
  organisation: 'codebar.io',
  alt: 'codebar',
  width: iconWidth,
  image: `${imagePath}/codebar.png`,
  startDate: '2019',
  endDate: '2020',
  role: 'Programming Coach',
};

const bluetel = {
  organisation: 'Bluetel',
  alt: 'Bluetel',
  width: iconWidth,
  image: `${imagePath}/bluetel_solutions.png`,
  startDate: '2019',
  endDate: 'present',
  role: 'Software Engineer',
};

const experience = {
  [bluetel.organisation]: bluetel,
  [codebar.organisation]: codebar,
  [universityBirmingham.organisation]: universityBirmingham,
  [edinburghCouncil.organisation]: edinburghCouncil,
  [selfTeaching.organisation]: selfTeaching,
};

export const experienceList = {
  experience: Object.keys(experience).map(
    (organisation) => experience[organisation]
  ),
};
