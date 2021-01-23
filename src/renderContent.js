import { projectsList } from './projects.js';
import { renderTemplate } from './template.js';

const renderContent = () => {
  const hasProjects = document.getElementById('all-projects');

  if (hasProjects) {
    renderTemplate('project', projectsList, 'all-projects');
  }
};

document.addEventListener('DOMContentLoaded', renderContent);
