

const projectName = (project) => {
        return project.querySelector('.heading').textContent.toLowerCase();
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
    const tech = projectTech(project);
    return `${name}${tech}`
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
