

const projectName = (project) => {
        return project.querySelector('.heading').textContent.toLowerCase();
}


const projectDescription = (project) => {
    let description = '';
    const descriptionLines = project.querySelector('.description').childNodes;

    for (const descRow of descriptionLines) {
        description += descRow.textContent.toLowerCase();
    }

    console.log(description);
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
            project.classList.remove('hidden');
        } else {
            project.classList.add('hidden');
        }
    }
}


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("search-bar").addEventListener("input", searchNoteList);
});
