import Mustache from 'mustache';

const templatePath = './templates';
const templateSuffix = '.mst';

export const renderTemplate = (name, content, position) => {
  fetch(`${templatePath}/${name}${templateSuffix}`)
    .then((response) => response.text())
    .then((template) => {
      const rendered = Mustache.render(template, content);
      document.getElementById(position).innerHTML = rendered;
    })
    .catch((error) =>
      console.log(`Unable to load template: ${name}. Error: ${error.message}`)
    );
};
