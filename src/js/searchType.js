import { langs } from './tech.js';
import { status } from './projects.js';

export const SearchType = {
  STATUS: 'status',
  LANGUAGE: 'language',
  GENERAL: 'general',
};

Object.freeze(SearchType);

export const findSearchType = (searchTerm) => {
  if (
    searchTerm === status.active ||
    searchTerm === status.archived ||
    searchTerm === status.retired
  ) {
    return SearchType.STATUS;
  }

  if (langs[searchTerm] != undefined) {
    return SearchType.LANGUAGE;
  }

  return SearchType.GENERAL;
};
