
import { langs, tools, build } from "./tech.js";


const octocat = "https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png";

const buildCiLink = (name) => {
    return `https://travis-ci.com/jgthomas/${name}.svg?branch=master`
}

const buildRepoLink = (name) => {
    return `https://github.com/jgthomas/${name}`
}

const buildImageName = (name) => {
    return `images/${name}.png`
}


const buildProject = (project) => {
    project.image = buildImageName(project.name);
    project.languages = project.languageList.join(", ");
    project.tools = project.toolList.join(", ");
    project.build = project.buildList.join(", ");
    project.midlink = buildCiLink(project.name);
    project.github = buildRepoLink(project.name);
    project.octocat = octocat;
}


const succ = {
    name: "succ",
    description: "Compiler for a (growing!) subset of C. Compiles to x86-64 assembly.",
    languageList: [langs.haskell],
    toolList: [tools.haskell.hspec, tools.haskell.hlint, tools.haskell.stylish],
    buildList: [build.stack, build.travis, build.codecov],
    year: "2019",
}

buildProject(succ);


const pyfunctory = {
    name: "pyfunctory",
    description: "Pythonic implementations of functional programming concepts.",
    languageList: [langs.python],
    toolList: [tools.python.pytest, tools.python.flake8, tools.python.black],
    buildList: [build.poetry, build.travis, build.codecov],
    year: "2017",
}

buildProject(pyfunctory);


const sudoku = {
    name: "sudoku solver",
    url: "sudoku-solver.online",
    description: "Sudoku solver written in C, and then compiled to webassembly.",
    languageList: [langs.c, langs.javascript, langs.css, langs.html],
    toolList: [tools.web.webAssembly],
    buildList: [build.emscripten],
    year: "2018",
}

buildProject(sudoku);
sudoku.image = buildImageName(sudoku.url);
sudoku.midlink = "";
sudoku.github = buildRepoLink(sudoku.url);


const headlineWords = {
    name: "headlinewords.top",
    description: "Tracks the daily, weekly, and monthly trends in the words used in news headlines.",
    languageList: [langs.python, langs.sql, langs.css, langs.html],
    toolList: [tools.python.flask, tools.sqlite],
    buildList: [build.pip, build.digitalOcean, build.nginx],
    year: "2017",
}

buildProject(headlineWords);
headlineWords.midlink = "";


const piptube = {
    name: "piptube",
    description: "Picture-in-picture video for YouTube. Turns YouTube into a command-line video and audio jukebox.",
    languageList: [langs.python],
    toolList: [tools.youtubeDl, tools.mpv],
    buildList: [build.poetry],
    year: "2017",
}

buildProject(piptube);
piptube.midlink = "";


const self = {
    name: "self.site",
    url: "jgthomas.github.io",
    description: "Portfolio website built with just the bare-bones tech of the web.",
    languageList: [langs.javascript, langs.css, langs.html],
    toolList: [tools.web.grid, tools.web.flexbox, tools.web.queries, tools.web.mustache],
    buildList: ["git push!"],
    year: "2019",
}

buildProject(self);
self.image = buildImageName(self.url);
self.midlink = "";
self.github = buildRepoLink(self.url);


const calcasm = {
    name: "calcasm",
    description: "Command line calculator written in pure x86-64 assembly.",
    languageList: [langs.asm],
    toolList: [tools.asm.as, tools.asm.ld, tools.c.gdb],
    buildList: [build.make, build.travis],
    year: "2018",
}

buildProject(calcasm);


const draughts = {
    name: "draughts",
    altName: "DraughtsGame",
    description: "Desktop draughts application. Human and computer players, in graphical or text mode.",
    languageList: [langs.java, langs.sql],
    toolList: [tools.java.javafx, tools.java.junit, tools.sqlite],
    buildList: [build.maven, build.travis],
    year: "2018",
}

buildProject(draughts);
draughts.midlink = buildCiLink(draughts.altName);
draughts.github = buildRepoLink(draughts.altName);


const braingame = {
    name: "braingame.xyz",
    description: "Brain game website: anagrams, sudoku, and more.",
    languageList: [langs.python, langs.javascript, langs.css, langs.html],
    toolList: [tools.python.flask, tools.python.pytest, tools.python.flake8, tools.python.black,
               tools.javascript.react, tools.javascript.jslint,
               tools.prettier, tools.preCommit, tools.docker],
    buildList: [build.poetry, build.yarn,
                build.travis, build.codecov,
                build.dockerHub, build.aws_eb],
    year: "2020",
}

buildProject(braingame);


const emulator = {
    name: "emulator",
    altName: "chipset_emulator",
    description: "Emulator for 4- and 8-bit chipsets.",
    features: ["Interactive shell",
               "Simple debugger",
               "Run program from file",
               "Own assembly language",
               "Simple assembler"],
    languageList: [langs.python, langs.javascript, langs.css, langs.html],
    toolList: [tools.c.cmocka, tools.c.gdb, tools.c.valgrind],
    buildList: [build.make, build.travis],
    year: "2018",
}

buildProject(emulator);
emulator.midlink = buildCiLink(emulator.altName);
emulator.github = buildRepoLink(emulator.altName);


const projects = {
    [succ.name]: succ,
    [braingame.name]: braingame,
    [draughts.name]: draughts,
    [calcasm.name]: calcasm,
    [self.name]: self,
    [emulator.name]: emulator,
    [piptube.name]: piptube,
    [headlineWords.name]: headlineWords,
    [sudoku.name]: sudoku,
    [pyfunctory.name]: pyfunctory,
}

export const projectData = (name) => {
    const data = projects[name];
    const features = data.features ? data.features.join(", ") : "";

    return `${data.name}
            ${data.description}
            ${features}
            ${data.languages}
            ${data.tools}
            ${data.build}
            ${data.year}
           `.toLowerCase()
}

export const projectsList = {projects: Object.keys(projects).map(name => projects[name])};
