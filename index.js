

const getProjectTech = (project) => {
    let techString = '';
    const projectTech = project.querySelectorAll('.tech-used');

    for (const techRow of projectTech) {
        techString += techRow.textContent.toLowerCase();
    }

    return techString;
}


const searchNoteList = () => {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    const projects = document.getElementsByClassName('project');

    for (const project of projects) {
        const projectName = project.querySelector('.heading').textContent.toLowerCase();
        const techString = getProjectTech(project);
        const projectString = projectName + techString;

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
