import SearchProjects from './searchProjects';

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

      const projectIdsToDisplay = SearchProjects.search(searchTerm);
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
