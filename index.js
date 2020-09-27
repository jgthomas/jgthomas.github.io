

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
    const searchTerm = document.getElementById("search-bar").value.toLowerCase().trim();
    const projects = document.getElementsByClassName('project');

    for (const project of projects) {
        const projectString = projectSearchData(project);

        if (projectString.indexOf(searchTerm) > -1) {
            showNode(project);
        } else {
            project.classList.add('hidden');
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
    document.getElementById("search-bar").addEventListener("input", () => {
        showResetButton();
        searchNoteList();
    });
});


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("clear-button").addEventListener("click", () => {
        console.log('WUT');
        showAllProjects();
        hideResetButton();
    });
});
