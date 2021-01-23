import { projectsList } from './projects.js';
import Mustache from 'mustache';

const renderProjects = () => {
  const hasProjects = document.getElementById('all-projects');

  fetch('./templates/project.mst')
    .then((response) => response.text())
    .then((template) => {
      if (hasProjects) {
        const rendered = Mustache.render(template, projectsList);
        document.getElementById('all-projects').innerHTML = rendered;
      }
    })
    .catch((error) => console.log(`Unable to load template: ${error.message}`));
};

document.addEventListener('DOMContentLoaded', renderProjects);
