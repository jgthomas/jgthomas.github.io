const iconWidth = '36px';
const imagePath = 'src/img';

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

const universityEdinburgh = {
  organisation: 'University of Edinburgh',
  alt: 'UoE',
  width: iconWidth,
  image: `${imagePath}/UoE.jpg`,
  startDate: '2014',
  endDate: '2016',
  role: 'Data using Python and R',
};

const experience = {
  [bluetel.organisation]: bluetel,
  [codebar.organisation]: codebar,
  [universityBirmingham.organisation]: universityBirmingham,
  [edinburghCouncil.organisation]: edinburghCouncil,
  [selfTeaching.organisation]: selfTeaching,
  [universityEdinburgh.organisation]: universityEdinburgh,
};

export const experienceList = {
  experience: Object.keys(experience).map(
    (organisation) => experience[organisation]
  ),
};
