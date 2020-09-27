

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


const projectSearchData = (project) => {
    const name = projectName(project);
    const description = projectDescription(project);
    const tech = projectTech(project);
    return `${name}${description}${tech}`
}


const searchNoteList = () => {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    const projects = document.getElementsByClassName('project');

    for (const project of projects) {
        const projectString = projectSearchData(project);

        if (projectString.indexOf(searchTerm) > -1) {
            showProject(project);
        } else {
            project.classList.add('hidden');
        }
    }
}


const showProject = (project) => {
    project.classList.remove('hidden');
}


const hideNode = (node) => {
    node.classList.remove('hidden');
}


const showAllProjects = () => {
    const projects = document.getElementsByClassName('project');
    projects.forEach((project) => { showProject(project) });
}


document.addEventListener("DOMContentLoaded", () => {
    const clearButton = document.getElementById("clear-button");
    document.getElementById("search-bar").addEventListener("input", () => {
        showProject(clearButton);
        searchNoteList();
    });
});


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("clear-button").addEventListener("reset", showAllProjects);
});
