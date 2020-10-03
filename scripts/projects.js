import { langs, tools, build } from "./tech.js";

const octocat =
  "https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png";
const archLogo =
  "https://raw.githubusercontent.com/lukas-w/font-logos/master/vectors/archlinux.svg";

const succ = {
  ci: true,
  name: "succ",
  description: "Compiler for a subset of C.",
  features: [
    "Multi-pass compiler",
    "Growing C support",
    "x86-64 assembly",
    "Robust error handling",
    "Basic type checking",
  ],
  languageList: [langs.haskell],
  toolList: [tools.haskell.hspec, tools.haskell.hlint, tools.haskell.stylish],
  buildList: [build.stack, build.travis, build.codecov],
  year: "2019",
};

const pyfunctory = {
  ci: true,
  name: "pyfunctory",
  description: "Pythonic implementations of functional programming concepts.",
  languageList: [langs.python],
  toolList: [tools.python.pytest, tools.python.flake8, tools.python.black],
  buildList: [build.poetry, build.travis, build.codecov],
  year: "2017",
};

const sudoku = {
  ci: false,
  name: "sudoku solver",
  altName: "sudoku-solver.online",
  description: "Sudoku solver website.",
  detail:
    "The solver itself is written in C, and then compiled to webassembly.",
  languageList: [langs.c, langs.javascript, langs.css, langs.html],
  toolList: [tools.web.webAssembly],
  buildList: [build.emscripten],
  year: "2018",
};

const headlineWords = {
  ci: false,
  name: "headlinewords.top",
  description: "Tracks trends in the words used in news headlines.",
  languageList: [langs.python, langs.sql, langs.css, langs.html],
  toolList: [tools.python.flask, tools.python.jinja2, tools.sqlite],
  buildList: [build.pip, build.digitalOcean, build.nginx],
  year: "2017",
};

const piptube = {
  ci: false,
  name: "piptube",
  description: "Picture-in-picture wrapper for mpv and youtube-dl.",
  features: [
    "Video and audio",
    "Play video URL",
    "Play search result",
    "Command line jukebox",
    "Config file settings",
  ],
  languageList: [langs.python],
  toolList: [tools.youtubeDl, tools.mpv],
  buildList: [build.poetry],
  year: "2017",
};

const self = {
  ci: false,
  name: "self.site",
  altName: "jgthomas.github.io",
  description: "Portfolio website.",
  detail: "Built with just the bare-bones tech of the modern web.",
  languageList: [langs.javascript, langs.css, langs.html],
  toolList: [
    tools.web.grid,
    tools.web.flexbox,
    tools.web.queries,
    tools.web.mustache,
  ],
  buildList: ["git push!"],
  year: "2019",
};

const calcasm = {
  ci: true,
  name: "calcasm",
  description: "Command line calculator written in pure x86-64 assembly.",
  languageList: [langs.asm],
  toolList: [tools.asm.as, tools.asm.ld, tools.c.gdb],
  buildList: [build.make, build.travis],
  year: "2018",
};

const draughts = {
  ci: true,
  name: "draughts",
  altName: "DraughtsGame",
  description: "Desktop draughts application.",
  features: [
    "Computer player",
    "Save and resume",
    "Graphical mode",
    "Text mode",
    "Swap bewteen modes",
  ],
  languageList: [langs.java, langs.sql],
  toolList: [tools.java.javafx, tools.java.junit, tools.sqlite],
  buildList: [build.maven, build.travis],
  year: "2018",
};

const braingame = {
  ci: true,
  name: "braingame.xyz",
  description: "Brain game website.",
  detail: "Anagrams, word games, sudoku, and more to come.",
  languageList: [langs.python, langs.javascript, langs.css, langs.html],
  toolList: [
    tools.python.flask,
    tools.python.pytest,
    tools.python.flake8,
    tools.python.black,
    tools.javascript.react,
    tools.javascript.jslint,
    tools.prettier,
    tools.preCommit,
    tools.docker,
  ],
  buildList: [
    build.poetry,
    build.yarn,
    build.travis,
    build.codecov,
    build.dockerHub,
    build.aws_eb,
  ],
  year: "2020",
};

const emulator = {
  ci: true,
  name: "emulator",
  altName: "chipset_emulator",
  description: "Emulator for 4- and 8-bit chipsets.",
  features: [
    "Interactive shell",
    "Run program from file",
    "Custom assembly",
    "Simple assembler",
    "Step-through debugger",
  ],
  languageList: [langs.c],
  toolList: [tools.c.cmocka, tools.c.gdb, tools.c.valgrind],
  buildList: [build.make, build.travis],
  year: "2018",
};

const buildCiLink = (project) => {
  if (!project.ci) {
    return "";
  }

  const ciName = project.altName ? project.altName : project.name;

  return `https://travis-ci.com/jgthomas/${ciName}.svg?branch=master`;
};

const buildRepoLink = (project) => {
  const repoName = project.altName ? project.altName : project.name;
  return `https://github.com/jgthomas/${repoName}`;
};

const buildImageName = (name) => {
  return `images/${name.replaceAll(" ", "_")}.png`;
};

const buildProject = (project) => {
  project.image = buildImageName(project.name);
  project.languages = project.languageList.join(", ");
  project.tools = project.toolList.join(", ");
  project.build = project.buildList.join(", ");
  project.midlink = buildCiLink(project);
  project.github = buildRepoLink(project);
  project.octocat = octocat;
};

buildProject(succ);
buildProject(braingame);
buildProject(self);
buildProject(draughts);
buildProject(emulator);
buildProject(calcasm);
buildProject(piptube);
buildProject(pyfunctory);
buildProject(sudoku);
buildProject(headlineWords);

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
};

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
           `.toLowerCase();
};

export const projectsList = {
  projects: Object.keys(projects).map((name) => projects[name]),
};
