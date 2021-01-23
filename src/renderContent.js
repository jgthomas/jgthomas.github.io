import { projectsList } from './projects.js';
import { headerData } from './header.js';
import { experienceList } from './experience.js';
import { renderTemplate } from './template.js';

const renderProjectPage = () => {
  renderTemplate('header', headerData, 'site-header');
  renderTemplate('project', projectsList, 'all-projects');
};

const renderMePage = () => {
  renderTemplate('header', headerData, 'site-header');
  renderTemplate('experience', experienceList, 'experience');
};

const renderContent = () => {
  if (document.getElementById('project-page')) {
    renderProjectPage();
  }

  if (document.getElementById('me-page')) {
    renderMePage();
  }
};

document.addEventListener('DOMContentLoaded', renderContent);
