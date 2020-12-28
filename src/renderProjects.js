import { projectsList } from './projects.js';
import Mustache from 'mustache';

const renderProjects = () => {
  const projects = document.getElementById('project-template-list');

  if (projects) {
    const rendered = Mustache.render(projects.innerHTML, projectsList);
    document.getElementById('all-projects').innerHTML = rendered;
  }
};

document.addEventListener('DOMContentLoaded', renderProjects);
