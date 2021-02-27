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

const displayFilteredProject = (projectIdsToDisplay) => {
  const projectNodes = document.getElementsByClassName('project');

  for (const projectNode of projectNodes) {
    if (projectIdsToDisplay.includes(projectNode.id)) {
      showNode(projectNode);
    } else {
      hideNode(projectNode);
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
      return projectSearchBy(projectStatus, searchTerm);
    case SearchType.LANGUAGE:
      return projectSearchBy(projectLanguage, searchTerm);
    case SearchType.TAGS:
      return projectSearchBy(projectTags, searchTerm);
    default:
      return projectSearchBy(projectGeneral, searchTerm);
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

      const projectIdsToDisplay = performSearch(searchTerm);
      displayFilteredProject(projectIdsToDisplay);
    });

    const clearButton = document.getElementById('clear-button');
    clearButton.addEventListener('click', () => {
      showAllProjects();
      hideResetButton();
    });
  }
};

document.addEventListener('DOMContentLoaded', setupSearchBox);
