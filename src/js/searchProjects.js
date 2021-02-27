import { projects, projectsList } from './projects.js';
import SearchType from './searchType.js';
import { langs } from './tech.js';
import { status, tags } from './labels.js';

const projectData = (name) => {
  const data = projects[name];
  const detail = data.detail ? data.detail : '';
  const features = data.features ? data.features.join(', ') : '';

  return `${data.name}
              ${data.description}
              ${detail}
              ${features}
              ${data.languages}
              ${data.tools}
              ${data.build}
              ${data.year}
              ${data.status}
             `.toLowerCase();
};

const projectSearchBy = (func, searchTerm) => {
  const filterFunc = buildProjectFilter(func)(searchTerm);

  const filteredProjectIds = projectsList.projects
    .filter((project) => filterFunc(project))
    .map((project) => project.name);

  return filteredProjectIds;
};

const findSearchType = (searchTerm) => {
  if (status[searchTerm] != undefined) {
    return SearchType.STATUS;
  }

  if (langs[searchTerm] != undefined) {
    return SearchType.LANGUAGE;
  }

  if (tags[searchTerm] != undefined) {
    return SearchType.TAGS;
  }

  return SearchType.GENERAL;
};

const buildProjectFilter = (func) => (searchTerm) => (project) => {
  return func(searchTerm, project);
};

const projectStatus = (status, project) => {
  return project.status == status;
};

const projectLanguage = (language, project) => {
  return project.languageList
    .map((lang) => lang.toLowerCase())
    .includes(language);
};

const projectTags = (tag, project) => {
  return project.tags.includes(tag);
};

const projectGeneral = (searchTerm, project) => {
  const projectString = projectData(project.name);
  return projectString.indexOf(searchTerm) > -1;
};

const performSearch = (searchTerm) => {
  const searchType = findSearchType(searchTerm);

  switch (searchType) {
    case SearchType.STATUS:
      return projectSearchBy(projectStatus, searchTerm);
    case SearchType.LANGUAGE:
      return projectSearchBy(projectLanguage, searchTerm);
    case SearchType.TAGS:
      return projectSearchBy(projectTags, searchTerm);
    case SearchType.GENERAL:
      return projectSearchBy(projectGeneral, searchTerm);
    default:
      return projectSearchBy(projectGeneral, searchTerm);
  }
};

export default {
  search: performSearch,
};
