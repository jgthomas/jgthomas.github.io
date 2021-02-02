import { langs, tools, build, editors } from './tech.js';

const imageWidth = '36px';
const devIconsUrl =
  'https://raw.githubusercontent.com/devicons/devicon/master/icons';

const python = {
  name: langs.python,
  images: [
    {
      alt: langs.python,
      width: imageWidth,
      icon: `${devIconsUrl}/python/python-original.svg`,
    },
  ],
  text: `My first language! I started using <span class="language-name">${langs.python}</span> during my PhD, running multi-agent evolutionary simulations.
  When I launched myself back into programming a few years later, ${langs.python} was where I began.
  Taking quizzes in the SoloLearn app was soon followed by making console-based games and spinning up websites using ${tools.python.flask}.
  I returned to ${langs.python} for the final project of my computer science degree, testing self-adaptive evolutionary algorithms as solvers of the
  Boolean satisfiability problem (SAT).`,
  tooling: [
    build.poetry,
    tools.python.pytest,
    tools.python.black,
    tools.python.flake8,
    tools.preCommit,
    editors.vscode,
  ],
};

const c = {
  name: langs.c,
  images: [
    {
      alt: langs.c,
      width: imageWidth,
      icon: `${devIconsUrl}/c/c-original.svg`,
    },
  ],
  text: `I tried to learn algorithms and data structures in ${langs.python}, but ${langs.python} just does too much for you. What was the point of this 'linked list',
  if the ${langs.python} list was right there? So I switched to <span class="language-name">${langs.c}</span>, which forced me to grapple with pointers and manual memory management, and to
  implement things myself that are just part of the standard libraries of other languages. I don't expect I'll ever work in ${langs.c}, but
  using it has deeply enriched my understanding of other languages and programming in general.`,
  tooling: [
    build.gcc,
    tools.c.gdb,
    tools.c.valgrind,
    tools.c.cmocka,
    build.make,
    editors.vim,
  ],
};

const web = {
  name: 'web',
  images: [
    {
      alt: langs.html,
      width: imageWidth,
      icon: `${devIconsUrl}/html5/html5-original.svg`,
    },
    {
      alt: langs.css,
      width: imageWidth,
      icon: `${devIconsUrl}/css3/css3-original.svg`,
    },
    {
      alt: langs.javascript,
      width: imageWidth,
      icon: `${devIconsUrl}/javascript/javascript-original.svg`,
    },
  ],
  text: `In addition to allowing me to make things other people can actually <em>see</em>, working with
  <span class="language-name">${langs.web}</span> really opened up 'API thinking' for me, as a complement to the 'algorithmic thinking' of much of my previous explorations.
  In doing so, it taught me that it was not 'cheating' if I didn't write it all myself, and that enormously powerful things can be created
  by making smart use existing tools and services, linked and chained together.`,
  tooling: [
    build.yarn,
    tools.javascript.eslint,
    tools.prettier,
    tools.javascript.jest,
    tools.web.webpack,
    tools.web.babel,
    tools.web.sass,
    editors.vscode,
  ],
};

const java = {
  name: langs.java,
  images: [
    {
      alt: langs.java,
      width: imageWidth,
      icon: `${devIconsUrl}/java/java-original.svg`,
    },
  ],
  text: `The major language of my computer science degree. It still feels slightly absurd that <em>everything</em> has to be a class, and do I really
  need all that for 'Hello, World!'? But it was this verbose rigidity that really helped drill object-oriented thinking into my brain. More than
  any other language, <span class="language-name">${langs.java}</span> made me think consciously about how to create and expose abstractions.
  Grasping the beauty and power of interfaces was also a pivotal moment in my developement, so I forgive the verbosity in full.`,
  tooling: [build.maven, tools.java.junit, tools.java.jacoco, editors.intellij],
};

const haskell = {
  name: langs.haskell,
  images: [
    {
      alt: langs.haskell,
      width: imageWidth,
      icon: `${devIconsUrl}/haskell/haskell-original.svg`,
    },
  ],
  text: `Learning <span class="language-name">${langs.haskell}</span> opened up the entire mental landscape of functional programming for me.
  Don't really do 'favourites', but if I did, ${langs.haskell} would be my favourite language.
  The type system is amazing. Sum types and pattern matching are beautiful&#8212;as is the ability to control how much 'power' a function has, from a simple pure function,
  to selecting from the hierarchy of functor, applicative, and <strike>burrito</strike> monad.`,
  tooling: [
    build.stack,
    tools.haskell.hspec,
    tools.haskell.hlint,
    tools.haskell.ormolu,
    tools.haskell.ghcid,
    editors.vim,
  ],
};

const buildLanguage = (language) => {
  language.tools = language.tooling.join(', ');
};

buildLanguage(python);
buildLanguage(c);
buildLanguage(web);
buildLanguage(java);
buildLanguage(haskell);

const languages = {
  [python.name]: python,
  [c.name]: c,
  [web.name]: web,
  [java.name]: java,
  [haskell.name]: haskell,
};

export const languageList = {
  languages: Object.keys(languages).map((name) => languages[name]),
};
