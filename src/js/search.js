import {
  projectData,
  projectStatus,
  projectLanguage,
  status,
} from './projects.js';
import { langs } from './tech.js';

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

const searchProjectStatus = (searchTerm) => {
  const projects = document.getElementsByClassName('project');

  for (const project of projects) {
    if (projectStatus(project.id) === searchTerm) {
      showNode(project);
    } else {
      hideNode(project);
    }
  }
};

const searchProjectLanguage = (searchTerm) => {
  const projects = document.getElementsByClassName('project');

  for (const project of projects) {
    if (projectLanguage(project.id, searchTerm)) {
      showNode(project);
    } else {
      hideNode(project);
    }
  }
};

const isStatusSearch = (searchTerm) => {
  return (
    searchTerm === status.active ||
    searchTerm === status.archived ||
    searchTerm === status.retired
  );
};

const isLanguageSearch = (searchTerm) => {
  return langs[searchTerm] != undefined;
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
      } else if (isStatusSearch(searchTerm)) {
        showResetButton();
        searchProjectStatus(searchTerm);
      } else if (isLanguageSearch(searchTerm)) {
        showResetButton();
        searchProjectLanguage(searchTerm);
      } else {
        showResetButton();
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
