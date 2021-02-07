import { projectData, projectStatus, projectLanguage } from './projects.js';
import { SearchType, findSearchType } from './searchType.js';

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
