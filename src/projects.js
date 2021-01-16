import { langs, tools, build } from './tech.js';

export const status = {
  active: 'active',
  archived: 'archived',
  retired: 'retired',
};

const octocat =
  'https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png';

const succ = {
  ci: true,
  name: 'succ',
  description: 'Compiler for a subset of C.',
  features: [
    'Multi-pass compiler',
    'Growing C support',
    'x86-64 assembly',
    'Robust error handling',
    'Basic type enforcement',
  ],
  languageList: [langs.haskell],
  toolList: [
    tools.haskell.hspec,
    tools.haskell.hlint,
    tools.haskell.ormolu,
    tools.haskell.weeder,
    tools.haskell.ghcid,
  ],
  buildList: [build.stack, build.travis, build.codecov],
  year: '2019',
  status: status.active,
};

const pyfunctory = {
  ci: true,
  name: 'pyfunctory',
  description: 'Pythonic implementations of functional programming concepts.',
  detail:
    'Map, filter, reduce, and friends built from generator expressions and list comprehensions.',
  languageList: [langs.python],
  toolList: [tools.python.pytest, tools.python.flake8, tools.python.black],
  buildList: [build.poetry, build.travis, build.codecov],
  year: '2017',
  status: status.archived,
};

const sudoku = {
  ci: false,
  name: 'sudoku solver',
  altName: 'sudoku-solver.online',
  description: 'Sudoku solver website.',
  detail:
    'The solver itself is written in C, and then compiled to webassembly.',
  languageList: [langs.c, langs.javascript, langs.css, langs.html],
  toolList: [tools.web.webAssembly],
  buildList: [build.emscripten],
  year: '2018',
  status: status.retired,
};

const headlineWords = {
  ci: false,
  name: 'headlinewords.top',
  description: 'Site tracking words used in news headlines.',
  detail:
    'Daily, weekly, and monthly trends from a range of sources, across multiple countries.',
  languageList: [langs.python, langs.sql, langs.css, langs.html],
  toolList: [tools.python.flask, tools.python.jinja2, tools.sqlite],
  buildList: [build.pip, build.digitalOcean, build.nginx],
  year: '2017',
  status: status.archived,
};

const piptube = {
  ci: false,
  name: 'piptube',
  description: 'Picture-in-picture wrapper for mpv and youtube-dl.',
  features: [
    'Video and audio',
    'Play video URL',
    'Play search result',
    'Command line jukebox',
    'Config file settings',
  ],
  languageList: [langs.python],
  toolList: [tools.youtubeDl, tools.mpv],
  buildList: [build.poetry],
  year: '2017',
  status: status.archived,
};

const self = {
  ci: true,
  name: 'self.site',
  ghAction: 'deploy',
  altName: 'jgthomas.github.io',
  description: 'Portfolio website.',
  detail: 'Responsive site with just the bare-bones tech of the web.',
  languageList: [langs.javascript, langs.css, langs.html],
  toolList: [
    tools.web.grid,
    tools.web.flexbox,
    tools.web.queries,
    tools.web.mustache,
    tools.javascript.eslint,
    tools.prettier,
  ],
  buildList: [
    build.yarn,
    tools.web.webpack,
    tools.web.babel,
    build.ghactions,
    build.ghpages,
  ],
  year: '2019',
  status: status.active,
};

const calcasm = {
  ci: true,
  name: 'calcasm',
  description: 'Command line calculator written in x86-64 assembly.',
  detail:
    'All input, output, parsing, and calculation performed in pure assembly, with Linux syscalls.',
  languageList: [langs.asm],
  toolList: [tools.asm.as, tools.asm.ld, tools.c.gdb],
  buildList: [build.make, build.travis],
  year: '2018',
  status: status.archived,
};

const draughts = {
  ci: true,
  name: 'draughts',
  altName: 'DraughtsGame',
  description: 'Desktop draughts application.',
  features: [
    'Computer player',
    'Save and resume',
    'Graphical mode',
    'Text mode',
    'Swap bewteen modes',
  ],
  languageList: [langs.java, langs.sql],
  toolList: [tools.java.javafx, tools.java.junit, tools.sqlite],
  buildList: [build.maven, build.travis],
  year: '2018',
  status: status.archived,
};

const braingame = {
  ci: true,
  name: 'braingame.xyz',
  description: 'Brain game website.',
  detail: 'Anagrams, word games, sudoku, and more to come.',
  languageList: [langs.python, langs.javascript, langs.css, langs.html],
  toolList: [
    tools.python.fastapi,
    tools.javascript.react,
    tools.docker,
    tools.python.pytest,
    tools.python.flake8,
    tools.python.black,
    tools.javascript.eslint,
    tools.prettier,
    tools.preCommit,
  ],
  buildList: [
    build.poetry,
    build.yarn,
    build.travis,
    build.codecov,
    build.dockerHub,
    build.aws_eb,
  ],
  year: '2020',
  status: status.active,
};

const emulator = {
  ci: true,
  name: 'emulator',
  altName: 'chipset_emulator',
  description: 'Emulator for 4- and 8-bit chipsets.',
  features: [
    'Interactive shell',
    'Run program from file',
    'Custom assembly',
    'Simple assembler',
    'Step-through debugger',
  ],
  languageList: [langs.c],
  toolList: [tools.c.cmocka, tools.c.gdb, tools.c.valgrind],
  buildList: [build.make, build.travis],
  year: '2018',
  status: status.archived,
};

const jsoner = {
  ci: true,
  ghAction: 'tests',
  name: 'jsoner',
  description: 'JSON Validator',
  detail: `Built with ${tools.haskell.megaparsec}.`,
  languageList: [langs.haskell],
  toolList: [
    tools.haskell.hspec,
    tools.haskell.hlint,
    tools.haskell.ormolu,
    tools.haskell.weeder,
    tools.haskell.ghcid,
  ],
  buildList: [build.stack, build.ghactions, build.codecov],
  year: '2020',
  status: status.active,
};

const foodApi = {
  ci: true,
  ghAction: 'deploy',
  name: 'foodApi',
  description: 'Serverless backend for food app',
  features: [
    'Food pantry record',
    'Recipe book',
    'Matches recipes to food',
    'Suggests alternatives',
    'Replacement ingredients',
  ],
  languageList: [langs.javascript],
  toolList: [
    tools.javascript.node,
    tools.aws.aws,
    tools.aws.lambda,
    tools.aws.apiGateway,
    tools.aws.dynamoDB,
    tools.javascript.eslint,
    tools.prettier,
  ],
  buildList: [build.npm, build.ghactions, build.serverless],
  year: '2021',
  status: status.active,
};

const buildCiLink = (project) => {
  if (!project.ci) {
    return '';
  }

  const ciName = project.altName ? project.altName : project.name;

  if (project.ghAction) {
    return `https://github.com/jgthomas/${ciName}/workflows/${project.ghAction}/badge.svg`;
  }

  return `https://travis-ci.com/jgthomas/${ciName}.svg?branch=master`;
};

const buildRepoLink = (project) => {
  const repoName = project.altName ? project.altName : project.name;
  return `https://github.com/jgthomas/${repoName}`;
};

const buildImageName = (name) => {
  return `images/${name.replaceAll(' ', '_')}.png`;
};

const buildProject = (project) => {
  project.image = buildImageName(project.name);
  project.languages = project.languageList.join(', ');
  project.tools = project.toolList.join(', ');
  project.build = project.buildList.join(', ');
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
buildProject(jsoner);
buildProject(foodApi);

const projects = {
  [succ.name]: succ,
  [foodApi.name]: foodApi,
  [jsoner.name]: jsoner,
  [self.name]: self,
  [draughts.name]: draughts,
  [calcasm.name]: calcasm,
  [emulator.name]: emulator,
  [piptube.name]: piptube,
  [headlineWords.name]: headlineWords,
  [sudoku.name]: sudoku,
};

export const projectData = (name) => {
  const data = projects[name];
  const detail = data.detail ? data.detail : '';
  const features = data.features ? data.features.join(', ') : '';

  return `${data.name}
            ${data.description}
            ${detail}
            ${features}
            ${data.languages}
            ${data.tools}
            ${data.build}
            ${data.year}
            ${data.status}
           `.toLowerCase();
};

export const projectStatus = (name) => {
  return projects[name].status;
};

export const projectsList = {
  projects: Object.keys(projects).map((name) => projects[name]),
};
