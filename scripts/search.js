import { projectData } from "./projects.js";

const searchProjects = (searchTerm) => {
  const projects = document.getElementsByClassName("project");

  for (const project of projects) {
    const projectString = projectData(project.id);

    if (projectString.indexOf(searchTerm) > -1) {
      showNode(project);
    } else {
      hideNode(project);
    }
  }

  hideNode(document.getElementById("me"));
};

const showNode = (node) => {
  node.classList.remove("hidden");
};

const hideNode = (node) => {
  node.classList.add("hidden");
};

const hideResetButton = () => {
  const resetButton = document.getElementById("clear-button");
  hideNode(resetButton);
};

const showResetButton = () => {
  const resetButton = document.getElementById("clear-button");
  showNode(resetButton);
};

const showAllProjects = () => {
  const projects = document.getElementsByClassName("project");
  for (const project of projects) {
    showNode(project);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.getElementById("search-bar");
  searchBox.addEventListener("input", () => {
    const searchTerm = searchBox.value.toLowerCase().trim();
    if (!searchTerm) {
      showAllProjects();
      showNode(document.getElementById("me"));
      hideResetButton();
    } else {
      showResetButton();
      searchProjects(searchTerm);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("clear-button").addEventListener("click", () => {
    showAllProjects();
    showNode(document.getElementById("me"));
    hideResetButton();
  });
});
