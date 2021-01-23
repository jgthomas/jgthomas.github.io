import { projectsList } from '../data/projects.js';
import { headerData } from '../data/header.js';
import { experienceList } from '../data/experience.js';
import { languageList } from '../data/languages.js';
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
