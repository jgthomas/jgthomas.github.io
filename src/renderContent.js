import { projectsList } from './projects.js';
import { headerData } from './header.js';
import { experienceList } from './experience.js';
import { languageList } from './languages.js';
import { renderTemplate } from './template.js';

const renderProjectPage = () => {
  renderTemplate('header', headerData, 'site-header');
  renderTemplate('project', projectsList, 'all-projects');
};

const renderMePage = () => {
  renderTemplate('header', headerData, 'site-header');
  renderTemplate('experience', experienceList, 'experience');
  renderTemplate('language', languageList, 'languages');
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
