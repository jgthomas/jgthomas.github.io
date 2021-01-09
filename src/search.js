import { projectData, projectStatus, status } from './projects.js';

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

const isStatusSearch = (searchTerm) => {
  return (
    searchTerm === status.active ||
    searchTerm === status.archived ||
    searchTerm === status.retired
  );
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

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('search-form');

  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const searchBox = document.getElementById('search-bar');

  if (searchBox) {
    searchBox.addEventListener('input', () => {
      const searchTerm = searchBox.value.toLowerCase().trim();
      if (!searchTerm) {
        showAllProjects();
        hideResetButton();
      } else if (isStatusSearch(searchTerm)) {
        showResetButton();
        searchProjectStatus(searchTerm);
      } else {
        showResetButton();
        searchProjects(searchTerm);
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const clearButton = document.getElementById('clear-button');

  if (clearButton) {
    clearButton.addEventListener('click', () => {
      showAllProjects();
      hideResetButton();
    });
  }
});
