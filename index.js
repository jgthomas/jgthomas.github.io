

const projectName = (project) => {
    return project.querySelector('.heading').textContent.toLowerCase();
}


const projectDescription = (project) => {
    let description = '';
    const descriptionLines = project.querySelector('.description').childNodes;

    for (const descRow of descriptionLines) {
        description += descRow.textContent.toLowerCase();
    }

    return description;
}


const projectTech = (project) => {
    let techString = '';
    const projectTech = project.querySelectorAll('.tech-used');

    for (const techRow of projectTech) {
        techString += techRow.textContent.toLowerCase();
    }

    return techString;
}


const projectYear = (project) => {
    return project.querySelector('.year').textContent.toLowerCase();
}


const projectSearchData = (project) => {
    const name = projectName(project);
    const description = projectDescription(project);
    const tech = projectTech(project);
    const year = projectYear(project);
    return `${name}${description}${tech}${year}`
}


const searchProjects = (searchTerm) => {
    const projects = document.getElementsByClassName('project');

    for (const project of projects) {
        const projectString = projectSearchData(project);

        if (projectString.indexOf(searchTerm) > -1) {
            showNode(project);
        } else {
            hideNode(project);
        }
    }
}


const showNode = (project) => {
    project.classList.remove('hidden');
}


const hideNode = (node) => {
    node.classList.add('hidden');
}


const hideResetButton = () => {
    const resetButton = document.getElementById("clear-button");
    hideNode(resetButton);
}


const showResetButton = () => {
    const resetButton = document.getElementById("clear-button");
    showNode(resetButton);
}


const showAllProjects = () => {
    const projects = document.getElementsByClassName('project');
    for (const project of projects) {
        showNode(project);
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const searchBox = document.getElementById("search-bar");
    searchBox.addEventListener("input", () => {
        const searchTerm = searchBox.value.toLowerCase().trim();
        if (!searchTerm) {
            showAllProjects();
            hideResetButton();
        } else {
            showResetButton();
            searchProjects(searchTerm);
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("clear-button").addEventListener("click", () => {
        showAllProjects();
        hideResetButton();
    });
});
