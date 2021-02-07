import { projects, status } from './projects.js';
import SearchType from './searchType.js';
import { langs } from './tech.js';

export const projectData = (name) => {
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

const searchProjects = (searchTerm) => {
  const projects = document.getElementsByClassName('project');

  for (const project of projects) {
    const projectString = projectData(project.id);

    if (projectString.indexOf(searchTerm) > -1) {
      showNode(project);
    } else {
      hideNode(project);
    }
  }
};

const projectsSpecialSearch = (func, searchTerm) => {
  const projects = document.getElementsByClassName('project');

  for (const project of projects) {
    if (func(project.id, searchTerm)) {
      showNode(project);
    } else {
      hideNode(project);
    }
  }
};

export const findSearchType = (searchTerm) => {
  if (
    searchTerm === status.active ||
    searchTerm === status.archived ||
    searchTerm === status.retired
  ) {
    return SearchType.STATUS;
  }

  if (langs[searchTerm] != undefined) {
    return SearchType.LANGUAGE;
  }

  return SearchType.GENERAL;
};

const projectStatus = (name, status) => {
  return projects[name].status == status;
};

const projectLanguage = (name, language) => {
  return projects[name].languageList
    .map((lang) => lang.toLowerCase())
    .includes(language);
};

const showNode = (node) => {
  node.classList.remove('hidden');
};

const hideNode = (node) => {
  node.classList.add('hidden');
};

const hideResetButton = () => {
  const resetButton = document.getElementById('clear-button');
  hideNode(resetButton);
};

const showResetButton = () => {
  const resetButton = document.getElementById('clear-button');
  showNode(resetButton);
};

const showAllProjects = () => {
  const projects = document.getElementsByClassName('project');
  for (const project of projects) {
    showNode(project);
  }
};

const setupSearch = () => {
  if (document.getElementById('project-page')) {
    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();
    });

    const searchBox = document.getElementById('search-bar');
    searchBox.addEventListener('input', () => {
      const searchTerm = searchBox.value.toLowerCase().trim();

      if (!searchTerm) {
        showAllProjects();
        hideResetButton();
        return;
      }

      const searchType = findSearchType(searchTerm);

      showResetButton();

      switch (searchType) {
        case SearchType.STATUS:
          projectsSpecialSearch(projectStatus, searchTerm);
          break;
        case SearchType.LANGUAGE:
          projectsSpecialSearch(projectLanguage, searchTerm);
          break;
        default:
          searchProjects(searchTerm);
      }
    });

    const clearButton = document.getElementById('clear-button');
    clearButton.addEventListener('click', () => {
      showAllProjects();
      hideResetButton();
    });
  }
};

document.addEventListener('DOMContentLoaded', setupSearch);
