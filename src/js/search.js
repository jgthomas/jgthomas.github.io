import { projects } from './projects.js';
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

const projectStatus = (name, status) => {
  return projects[name].status == status;
};

const projectLanguage = (name, language) => {
  return projects[name].languageList
    .map((lang) => lang.toLowerCase())
    .includes(language);
};

const projectTags = (name, tag) => {
  return projects[name].tags.includes(tag);
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

const performSearch = (searchTerm) => {
  const searchType = findSearchType(searchTerm);

  switch (searchType) {
    case SearchType.STATUS:
      projectsSpecialSearch(projectStatus, searchTerm);
      break;
    case SearchType.LANGUAGE:
      projectsSpecialSearch(projectLanguage, searchTerm);
      break;
    case SearchType.TAGS:
      projectsSpecialSearch(projectTags, searchTerm);
      break;
    default:
      searchProjects(searchTerm);
  }
};

const setupSearchBox = () => {
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

      showResetButton();
      performSearch(searchTerm);
    });

    const clearButton = document.getElementById('clear-button');
    clearButton.addEventListener('click', () => {
      showAllProjects();
      hideResetButton();
    });
  }
};

document.addEventListener('DOMContentLoaded', setupSearchBox);
