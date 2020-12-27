import { projectsList } from './projects.js';
import Mustache from 'mustache';

const renderProjects = () => {
  const template = document.getElementById('project-template-list').innerHTML;
  const rendered = Mustache.render(template, projectsList);
  document.getElementById('all-projects').innerHTML = rendered;
};

document.addEventListener('DOMContentLoaded', renderProjects);
