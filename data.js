
const succ = {
    name: "succ",
    year: "2019",
}

const projects = {
    succ: succ,
}

const projectsList = Object.keys(projects).map(name => projects[name]);


export default projectsList;
