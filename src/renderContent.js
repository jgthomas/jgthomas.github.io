import { projectsList } from './projects.js';
import { headerData } from './header.js';
import { renderTemplate } from './template.js';

const renderContent = () => {
  renderTemplate('header', headerData, 'site-header');

  const hasProjects = document.getElementById('all-projects');

  if (hasProjects) {
    renderTemplate('project', projectsList, 'all-projects');
  }
};

document.addEventListener('DOMContentLoaded', renderContent);
