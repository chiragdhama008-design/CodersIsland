import { Week } from '../types/content';

export const initialWeeks: Week[] = [
  {
    id: 'week-1',
    number: 1,
    title: 'Foundations of Code & Logic',
    tagline: 'Unlock the digital realm and think like a computational architect.',
    description: 'Kickstart your adventure on CodersIsland! Learn what code truly is, understand computer memory, make decisions with conditionals, and harness the looping power of algorithms.',
    icon: 'Terminal',
    accentColor: 'cyan',
    learningGoals: [
      'Understand how computers process instructions and algorithms',
      'Master memory storage with variables, constants, and data types',
      'Control flow using if-else statements and relational operators',
      'Automate repetitive tasks with for and while loops',
    ],
    topics: [
      {
        id: 'what-is-programming',
        weekId: 'week-1',
        order: 1,
        title: 'What is Programming & How Computers Think',
        description: 'Explore the foundations of computer science. Understand how silicon chips, binary instructions, and human-readable code work together to build games and apps.',
        summary: 'From binary 0s and 1s to high-level programming languages, discover how software breathes life into hardware.',
        video: {
          title: 'Workshop 01: The Architect Mindset — How Code Controls the World',
          youtubeUrl: 'https://www.youtube.com/watch?v=zOjov-2OZ0E', // Educational CS video
          date: 'Sept 2026',
          duration: '38 mins',
          instructor: 'Prof. Alex Vance & Team CodersIsland',
        },
        resources: [
          {
            id: 'res-w1-t1-1',
            title: 'What is Code? An Illustrated Primer for Young Hackers',
            description: 'A visual, interactive breakdown of how programs execute and talk to memory.',
            source: 'freeCodeCamp',
            url: 'https://www.freecodecamp.org/news/what-is-programming/',
            readingTime: '6 min read',
            type: 'article',
          },
          {
            id: 'res-w1-t1-2',
            title: 'How Computers Work: Binary, Logic & Circuits',
            description: 'Understand the language of machines and how electrical signals create computational logic.',
            source: 'Khan Academy Computing',
            url: 'https://www.khanacademy.org/computing/computers-and-internet',
            readingTime: '10 min read',
            type: 'tutorial',
          },
          {
            id: 'res-w1-t1-3',
            title: 'Computational Thinking for Problem Solvers',
            description: 'Techniques used by competitive programmers to decompose large challenges into simple steps.',
            source: 'CS Unplugged',
            url: 'https://csunplugged.org/en/',
            readingTime: '8 min read',
            type: 'documentation',
          }
        ]
      },
      {
        id: 'variables-and-data-types',
        weekId: 'week-1',
        order: 2,
        title: 'Variables, Constants & Data Types',
        description: 'Learn how programs remember things. Master numbers, strings, booleans, and how data is categorized and referenced in memory.',
        summary: 'Variables are labeled memory boxes that store numbers, text, or flags for your games and apps.',
        video: {
          title: 'Workshop 02: Memory Vaults — Variables and Type Systems',
          youtubeUrl: 'https://www.youtube.com/watch?v=kqtD5dpn9C8',
          date: 'Sept 2026',
          duration: '42 mins',
          instructor: 'Sarah Lin, CodersIsland Lead Mentor',
        },
        resources: [
          {
            id: 'res-w1-t2-1',
            title: 'JavaScript Data Types and Data Structures',
            description: 'Comprehensive guide to primitives, references, dynamic typing, and memory safety.',
            source: 'MDN Web Docs',
            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures',
            readingTime: '7 min read',
            type: 'documentation',
          },
          {
            id: 'res-w1-t2-2',
            title: 'Variable Declarations: let, const, and best practices',
            description: 'Why modern programmers avoid var and how immutability helps prevent bugs in your code.',
            source: 'JavaScript.info',
            url: 'https://javascript.info/variables',
            readingTime: '5 min read',
            type: 'article',
          }
        ]
      },
      {
        id: 'conditional-logic',
        weekId: 'week-1',
        order: 3,
        title: 'Conditional Statements & Decision Trees',
        description: 'Teach your code to make intelligent decisions based on user input, game health, player scores, or sensor triggers.',
        summary: 'Harness if, else if, else, and switch statements to create branching pathways in your digital universe.',
        video: {
          title: 'Workshop 03: Decision Matrices — Logic Gates & Branching Paths',
          youtubeUrl: 'https://www.youtube.com/watch?v=IsG4Xd6LlsM',
          date: 'Sept 2026',
          duration: '45 mins',
          instructor: 'David Chen, Systems Mentor',
        },
        resources: [
          {
            id: 'res-w1-t3-1',
            title: 'Making Decisions in Your Code: Conditionals',
            description: 'How to write logical comparisons, truthy and falsy values, and ternary operators.',
            source: 'MDN Web Docs',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals',
            readingTime: '9 min read',
            type: 'tutorial',
          },
          {
            id: 'res-w1-t3-2',
            title: 'Boolean Algebra & Real-world Game Mechanics',
            description: 'See how popular games like Minecraft use condition checks to spawn mobs and test player health.',
            source: 'GameDev.net',
            url: 'https://gamedev.net',
            readingTime: '8 min read',
            type: 'article',
          }
        ]
      },
      {
        id: 'loops-and-algorithms',
        weekId: 'week-1',
        order: 4,
        title: 'Loops, Iteration & Pattern Mastery',
        description: 'Supercharge your programs with repetition. Use while and for loops to automate tasks thousands of times in a millisecond.',
        summary: 'Discover how loops let you process game physics, calculate scores, and draw procedural graphics without rewriting code.',
        video: {
          title: 'Workshop 04: The Infinite Spiral — Mastering Iterations & Loops',
          youtubeUrl: 'https://www.youtube.com/watch?v=s9wWAKCM-4U',
          date: 'Sept 2026',
          duration: '50 mins',
          instructor: 'Elena Rostova, Algorithmic Specialist',
        },
        resources: [
          {
            id: 'res-w1-t4-1',
            title: 'Looping Code: A Deep Dive into Iteration',
            description: 'Practical examples using for loops, while loops, and break/continue statements.',
            source: 'MDN Web Docs',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code',
            readingTime: '11 min read',
            type: 'documentation',
          },
          {
            id: 'res-w1-t4-2',
            title: 'Avoiding the Dreaded Infinite Loop Trap',
            description: 'Techniques to ensure your exit conditions are bulletproof and keep your applications smooth.',
            source: 'Dev.to',
            url: 'https://dev.to',
            readingTime: '6 min read',
            type: 'article',
          }
        ]
      }
    ]
  },
  {
    id: 'week-2',
    number: 2,
    title: 'The Visual Web: HTML5 & Modern CSS',
    tagline: 'Paint the canvas of cyberspace with semantic markup and cyber aesthetics.',
    description: 'Step into the shoes of a creative technologist. Learn how the web is rendered, construct rock-solid semantic documents, and sculpt futuristic responsive layouts with CSS Flexbox & Grid.',
    icon: 'Globe',
    accentColor: 'purple',
    learningGoals: [
      'Master semantic HTML5 elements for structure and accessibility',
      'Understand the CSS Box Model, specificity, and cascading rules',
      'Design fluid, dynamic flexbox navigation and grid systems',
      'Implement dark mode themes, neon accents, and smooth hover micro-animations',
    ],
    topics: [
      {
        id: 'semantic-html-architecture',
        weekId: 'week-2',
        order: 1,
        title: 'Semantic HTML5: Blueprint of the Web',
        description: 'Learn why headings, sections, articles, and semantic navigation tags matter for browsers, search engines, and screen readers.',
        summary: 'HTML gives meaning to your ideas. Construct clear, readable page blueprints that scale.',
        video: {
          title: 'Workshop 05: The Digital Skeleton — Semantic HTML5 Architecture',
          youtubeUrl: 'https://www.youtube.com/watch?v=kUMe1FH4CHE',
          date: 'Sept 2026',
          duration: '44 mins',
          instructor: 'Marcus Brody, Front-end Lead',
        },
        resources: [
          {
            id: 'res-w2-t1-1',
            title: 'HTML: Structuring the Web',
            description: 'The definitive beginner guide to tags, attributes, links, and forms.',
            source: 'MDN Web Docs',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML',
            readingTime: '12 min read',
            type: 'documentation',
          },
          {
            id: 'res-w2-t1-2',
            title: 'Semantic Elements in HTML5: Why They Matter',
            description: 'How modern developers use semantic tags over generic div soup for better accessibility.',
            source: 'W3Schools',
            url: 'https://www.w3schools.com/html/html5_semantic_elements.asp',
            readingTime: '6 min read',
            type: 'tutorial',
          }
        ]
      },
      {
        id: 'css-box-model-and-styling',
        weekId: 'week-2',
        order: 2,
        title: 'The CSS Box Model, Colors & Typography',
        description: 'Demystify padding, borders, margins, and content sizing. Learn how to craft typography hierarchies and choose vibrant color palettes.',
        summary: 'Every element on the web is a box. Master margins, padding, and box-sizing to gain total layout control.',
        video: {
          title: 'Workshop 06: Pixels, Padding & Palettes — The CSS Box Model Masterclass',
          youtubeUrl: 'https://www.youtube.com/watch?v=1PnVor36_40',
          date: 'Sept 2026',
          duration: '48 mins',
          instructor: 'Aria Sterling, Design Technologist',
        },
        resources: [
          {
            id: 'res-w2-t2-1',
            title: 'The CSS Box Model Explained Visually',
            description: 'Interactive diagrams illustrating content-box vs border-box.',
            source: 'MDN Web Docs',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model',
            readingTime: '8 min read',
            type: 'tutorial',
          },
          {
            id: 'res-w2-t2-2',
            title: 'Color Palettes for Futuristic & Cyber Dark Themes',
            description: 'How to combine deep blues, saturated purples, and high-contrast neons effectively.',
            source: 'CodersIsland Design Lab',
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color',
            readingTime: '7 min read',
            type: 'article',
          }
        ]
      },
      {
        id: 'flexbox-and-grid-magic',
        weekId: 'week-2',
        order: 3,
        title: 'Flexbox & CSS Grid: Modern Layout Mastery',
        description: 'Say goodbye to floats! Build adaptive multi-column layouts, centered hero cards, and responsive game inventories effortlessly.',
        summary: 'Bend space with flex-direction, justify-content, align-items, and CSS grid template columns.',
        video: {
          title: 'Workshop 07: Spatial Dimensions — Flexbox & Grid in Practice',
          youtubeUrl: 'https://www.youtube.com/watch?v=JJSoEo8JSnc',
          date: 'Sept 2026',
          duration: '52 mins',
          instructor: 'Marcus Brody & Guest Instructors',
        },
        resources: [
          {
            id: 'res-w2-t3-1',
            title: 'A Complete Guide to Flexbox',
            description: 'The quintessential handbook on flex properties for parent containers and children.',
            source: 'CSS-Tricks',
            url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
            readingTime: '14 min read',
            type: 'documentation',
          },
          {
            id: 'res-w2-t3-2',
            title: 'Flexbox Froggy: Interactive Puzzle Game',
            description: 'Gamified interactive exercises to solidify flexbox alignment rules.',
            source: 'Codepip Games',
            url: 'https://flexboxfroggy.com/',
            readingTime: '15 min interactive',
            type: 'interactive',
          }
        ]
      },
      {
        id: 'responsive-design-and-animations',
        weekId: 'week-2',
        order: 4,
        title: 'Responsive Design & Cyber Micro-Animations',
        description: 'Ensure your creations look stellar on smartphones, tablets, and 4K displays. Add transitions, glow filters, and keyframe animations.',
        summary: 'Craft fluid responsive layouts with media queries and add delightful kinetic energy with CSS transitions.',
        video: {
          title: 'Workshop 08: Alive on Any Screen — Responsive Media & Micro-Interactions',
          youtubeUrl: 'https://www.youtube.com/watch?v=srvUrASNj0s',
          date: 'Sept 2026',
          duration: '46 mins',
          instructor: 'Aria Sterling, Design Technologist',
        },
        resources: [
          {
            id: 'res-w2-t4-1',
            title: 'Responsive Web Design Basics',
            description: 'Media queries, viewport meta tags, and flexible images in modern web standards.',
            source: 'web.dev by Google',
            url: 'https://web.dev/learn/design/',
            readingTime: '10 min read',
            type: 'documentation',
          },
          {
            id: 'res-w2-t4-2',
            title: 'CSS Keyframe Animations and Glowing Filters',
            description: 'Learn how to create pulsating radar rings, floating cards, and neon border gradients.',
            source: 'MDN Web Docs',
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations',
            readingTime: '8 min read',
            type: 'tutorial',
          }
        ]
      }
    ]
  },
  {
    id: 'week-3',
    number: 3,
    title: 'Modern JavaScript Superpowers',
    tagline: 'Infuse intelligence, interactivity, and dynamic physics into your applications.',
    description: 'Transform static websites into alive, reactive software. Master the DOM, listen to keyboard and mouse inputs, write clean modular functions, and consume live online APIs.',
    icon: 'Zap',
    accentColor: 'emerald',
    learningGoals: [
      'Write reusable functions, arrow syntax, and understand lexical scope',
      'Manipulate the Document Object Model (DOM) dynamically in real-time',
      'Handle mouse clicks, keyboard presses, forms, and drag-and-drop events',
      'Understand asynchronous JavaScript, Promises, and the Fetch API',
    ],
    topics: [
      {
        id: 'functions-and-scope',
        weekId: 'week-3',
        order: 1,
        title: 'Functions, Parameters & Return Powers',
        description: 'Deconstruct repetitive code into clean, modular building blocks. Master parameters, default arguments, and pure functions.',
        summary: 'Functions are your custom spells. Pass in ingredients, execute logic, and return computed treasures.',
        video: {
          title: 'Workshop 09: Kinetic Energy — Modern JavaScript Functions & Scope',
          youtubeUrl: 'https://www.youtube.com/watch?v=N8ap4k_1QEQ',
          date: 'Sept 2026',
          duration: '47 mins',
          instructor: 'Sarah Lin & David Chen',
        },
        resources: [
          {
            id: 'res-w3-t1-1',
            title: 'JavaScript Functions: Definitions and Arrow Expressions',
            description: 'How arrow functions work, lexical this, and best practices for naming functions.',
            source: 'MDN Web Docs',
            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions',
            readingTime: '9 min read',
            type: 'documentation',
          },
          {
            id: 'res-w3-t1-2',
            title: 'Understanding Scope, Closures and the Call Stack',
            description: 'A mental model for how the JavaScript runtime tracks active variables and functions.',
            source: 'freeCodeCamp',
            url: 'https://www.freecodecamp.org/news/javascript-lexical-scope-tutorial/',
            readingTime: '7 min read',
            type: 'article',
          }
        ]
      },
      {
        id: 'dom-manipulation-magic',
        weekId: 'week-3',
        order: 2,
        title: 'DOM Manipulation: Controlling Web Elements',
        description: 'Use querySelector, createElement, and classList to modify web pages on the fly without refreshing.',
        summary: 'The DOM is the live tree of your webpage. Learn how JavaScript can change text, styles, and elements instantly.',
        video: {
          title: 'Workshop 10: Puppeteer of Pixels — Live DOM Manipulation Techniques',
          youtubeUrl: 'https://www.youtube.com/watch?v=0ik6X4DJKCc',
          date: 'Sept 2026',
          duration: '54 mins',
          instructor: 'Sarah Lin, CodersIsland Lead Mentor',
        },
        resources: [
          {
            id: 'res-w3-t2-1',
            title: 'Manipulating Documents in JavaScript',
            description: 'Detailed tutorial on selecting elements, creating nodes, and updating styles.',
            source: 'MDN Web Docs',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents',
            readingTime: '10 min read',
            type: 'tutorial',
          },
          {
            id: 'res-w3-t2-2',
            title: 'DOM Methods Cheat Sheet for Quick Reference',
            description: 'Quick reference for appendChild, remove, dataset, and classList manipulation.',
            source: 'Devhints.io',
            url: 'https://devhints.io/js-dom',
            readingTime: '4 min read',
            type: 'documentation',
          }
        ]
      },
      {
        id: 'events-and-interactivity',
        weekId: 'week-3',
        order: 3,
        title: 'Event Listeners: Clicks, Keys & Interactions',
        description: 'Listen to every user pulse. Wire up buttons, track mouse coordinates, prevent default form submissions, and create mini game controls.',
        summary: 'Event listeners act as motion detectors in your code, firing logic whenever the student interacts.',
        video: {
          title: 'Workshop 11: Nerve Centers — Event Bubbling, Delegation & User Inputs',
          youtubeUrl: 'https://www.youtube.com/watch?v=XF1_UKVDnng',
          date: 'Sept 2026',
          duration: '49 mins',
          instructor: 'David Chen, Systems Mentor',
        },
        resources: [
          {
            id: 'res-w3-t3-1',
            title: 'Introduction to Events in JavaScript',
            description: 'Event objects, click events, keyboard inputs, and event bubbling explained.',
            source: 'MDN Web Docs',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events',
            readingTime: '9 min read',
            type: 'documentation',
          },
          {
            id: 'res-w3-t3-2',
            title: 'Building Interactive Mini-Games with Keyboard Events',
            description: 'Tutorial showing how to move an astronaut sprite across a grid with arrow keys.',
            source: 'CodersIsland Projects',
            url: 'https://javascript.info/keyboard-events',
            readingTime: '8 min read',
            type: 'article',
          }
        ]
      },
      {
        id: 'async-and-fetching-data',
        weekId: 'week-3',
        order: 4,
        title: 'Async JS, Promises & The Fetch API',
        description: 'Connect your applications to the worldwide web. Fetch live weather data, Pokémon stats, or space telemetry using async/await and JSON.',
        summary: 'Modern software communicates with clouds and databases over the wire. Learn to request data and handle responses gracefully.',
        video: {
          title: 'Workshop 12: Galactic Transmissions — Async, Promises & Live APIs',
          youtubeUrl: 'https://www.youtube.com/watch?v=exbg_tVGUPE',
          date: 'Sept 2026',
          duration: '56 mins',
          instructor: 'Elena Rostova, Algorithmic Specialist',
        },
        resources: [
          {
            id: 'res-w3-t4-1',
            title: 'How to Use the Fetch API with Async/Await',
            description: 'Clear walkthrough for fetching JSON data, handling errors, and updating the UI.',
            source: 'freeCodeCamp',
            url: 'https://www.freecodecamp.org/news/javascript-fetch-api-tutorial-with-js-fetch-post-and-header-examples/',
            readingTime: '11 min read',
            type: 'tutorial',
          },
          {
            id: 'res-w3-t4-2',
            title: 'Public APIs for Student Experiments',
            description: 'A curated directory of free, fun APIs (NASA, Pokémon, Weather, Advice) for school projects.',
            source: 'GitHub Public APIs',
            url: 'https://github.com/public-apis/public-apis',
            readingTime: '5 min read',
            type: 'documentation',
          }
        ]
      }
    ]
  },
  {
    id: 'week-4',
    number: 4,
    title: 'Git, GitHub & The Hacker Workflow',
    tagline: 'Time-travel through code history and collaborate with global engineers.',
    description: 'Learn the exact tools used by NASA, Google, and indie game devs. Take snapshots of your project, experiment fearlessly on branches, fix merge conflicts, and showcase your repository on GitHub.',
    icon: 'GitBranch',
    accentColor: 'blue',
    learningGoals: [
      'Master essential Git commands: init, add, commit, status, log, diff',
      'Understand how branches allow parallel feature experimentation',
      'Resolve merge conflicts without breaking project integrity',
      'Publish repositories to GitHub and host live websites with GitHub Pages',
    ],
    topics: [
      {
        id: 'git-basics-and-commits',
        weekId: 'week-4',
        order: 1,
        title: 'Time Travel: Git Commits & Staging Areas',
        description: 'Never fear breaking your code again. Understand working trees, staging files, and writing descriptive commit messages.',
        summary: 'Git commits are save checkpoints in your quest. Travel back in time whenever a bug strikes.',
        video: {
          title: 'Workshop 13: The Time Machine — Git Fundamentals & Checkpoints',
          youtubeUrl: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
          date: 'Sept 2026',
          duration: '43 mins',
          instructor: 'Prof. Alex Vance & Team CodersIsland',
        },
        resources: [
          {
            id: 'res-w4-t1-1',
            title: 'Git Handbook: The Essential Concepts',
            description: 'An approachable visual guide from GitHub on repositories, commits, and logs.',
            source: 'GitHub Guides',
            url: 'https://docs.github.com/en/get-started/using-git/about-git',
            readingTime: '8 min read',
            type: 'documentation',
          },
          {
            id: 'res-w4-t1-2',
            title: 'How to Write Good Commit Messages',
            description: 'Conventions used in open-source projects so teammates easily understand your changes.',
            source: 'cbea.ms',
            url: 'https://cbea.ms/git-commit/',
            readingTime: '6 min read',
            type: 'article',
          }
        ]
      },
      {
        id: 'branching-and-merging',
        weekId: 'week-4',
        order: 2,
        title: 'Branching Realities & Merge Conflicts',
        description: 'Create parallel universes with git branch, experiment safely, and merge your features back into main like a pro.',
        summary: 'Branches let you build risky new features without threatening the working build.',
        video: {
          title: 'Workshop 14: Parallel Universes — Branching, Merging & Conflict Resolution',
          youtubeUrl: 'https://www.youtube.com/watch?v=e2IbNHi4uCI',
          date: 'Sept 2026',
          duration: '48 mins',
          instructor: 'Marcus Brody, Front-end Lead',
        },
        resources: [
          {
            id: 'res-w4-t2-1',
            title: 'Learn Git Branching: Visual Interactive Sandbox',
            description: 'A legendary browser game that visually represents Git branches and rebasing.',
            source: 'LearnGitBranching',
            url: 'https://learngitbranching.js.org/',
            readingTime: '15 min interactive',
            type: 'interactive',
          },
          {
            id: 'res-w4-t2-2',
            title: 'Resolving Merge Conflicts Step by Step',
            description: 'What HEAD means, how to read <<<<<< and >>>>>> markers, and picking the right changes.',
            source: 'Atlassian Git Tutorial',
            url: 'https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts',
            readingTime: '7 min read',
            type: 'tutorial',
          }
        ]
      },
      {
        id: 'github-collaboration-and-prs',
        weekId: 'week-4',
        order: 3,
        title: 'GitHub Collaboration & Pull Requests',
        description: 'Connect your local repo to GitHub. Push commits, open pull requests, request code reviews, and work seamlessly in teams.',
        summary: 'Pull requests are how programmers propose changes, review code, and maintain high standards together.',
        video: {
          title: 'Workshop 15: The Global Network — Pull Requests & Team Collaboration',
          youtubeUrl: 'https://www.youtube.com/watch?v=8JJ101D3KnE',
          date: 'Sept 2026',
          duration: '45 mins',
          instructor: 'Sarah Lin & Aria Sterling',
        },
        resources: [
          {
            id: 'res-w4-t3-1',
            title: 'About Pull Requests on GitHub',
            description: 'How to open a PR, leave comments on lines of code, and merge with confidence.',
            source: 'GitHub Docs',
            url: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests',
            readingTime: '8 min read',
            type: 'documentation',
          },
          {
            id: 'res-w4-t3-2',
            title: 'How to Build an Impressive GitHub Profile',
            description: 'Showcase your workshop projects, pin your best repos, and write a stellar README.',
            source: 'freeCodeCamp',
            url: 'https://www.freecodecamp.org/news/how-to-create-a-beautiful-github-profile/',
            readingTime: '9 min read',
            type: 'article',
          }
        ]
      },
      {
        id: 'deploying-to-the-cloud',
        weekId: 'week-4',
        order: 4,
        title: 'Deploying to the Cloud: Live URLs for Everyone',
        description: 'Share your code with friends, parents, and teachers! Deploy interactive websites using Vercel, Netlify, and GitHub Pages in seconds.',
        summary: 'Take your project from localhost:3000 to a publicly accessible HTTPS link that the entire world can view.',
        video: {
          title: 'Workshop 16: Launch Sequence — Free Cloud Deployments & Hosting',
          youtubeUrl: 'https://www.youtube.com/watch?v=4wZp_6u95zU',
          date: 'Sept 2026',
          duration: '39 mins',
          instructor: 'David Chen, Systems Mentor',
        },
        resources: [
          {
            id: 'res-w4-t4-1',
            title: 'Deploying a Static Site with GitHub Pages',
            description: 'Turn your GitHub repository into a free, high-speed website.',
            source: 'GitHub Docs',
            url: 'https://pages.github.com/',
            readingTime: '6 min read',
            type: 'documentation',
          },
          {
            id: 'res-w4-t4-2',
            title: 'Vercel Deployment Guide for Modern Web Apps',
            description: 'Continuous deployment directly linked to git push events.',
            source: 'Vercel Docs',
            url: 'https://vercel.com/docs',
            readingTime: '5 min read',
            type: 'tutorial',
          }
        ]
      }
    ]
  },
  {
    id: 'week-5',
    number: 5,
    title: 'The Capstone Expedition: Build & Launch',
    tagline: 'Combine everything you have learned to ship your own flagship web application.',
    description: 'The final frontier! Brainstorm a high-impact solution, architect your component hierarchy, integrate real data, polish animations to perfection, and present your capstone to the CodersIsland community.',
    icon: 'Rocket',
    accentColor: 'amber',
    learningGoals: [
      'Deconstruct complex product ideas into user stories and wireframes',
      'Architect clean, modular components with stateful reactivity',
      'Optimize performance, accessibility, and delightful sound/visual feedback',
      'Pitch and demonstrate your live capstone application with pride',
    ],
    topics: [
      {
        id: 'project-ideation-and-wireframing',
        weekId: 'week-5',
        order: 1,
        title: 'Ideation, Wireframing & User Experience',
        description: 'Before coding, plan like an engineer. Sketch user journeys, define features for an MVP (Minimum Viable Product), and design user-friendly UI.',
        summary: 'Great software starts on paper. Map out what your users need and build with purposeful clarity.',
        video: {
          title: 'Workshop 17: Blueprinting Success — UX Architecture & Ideation',
          youtubeUrl: 'https://www.youtube.com/watch?v=F18RhTZpWl0',
          date: 'Sept 2026',
          duration: '45 mins',
          instructor: 'Aria Sterling & Prof. Alex Vance',
        },
        resources: [
          {
            id: 'res-w5-t1-1',
            title: 'UI/UX Design Essentials for Student Developers',
            description: 'Wireframing techniques, contrast ratios, and building intuitive navigation flows.',
            source: 'Figma Community',
            url: 'https://www.figma.com/resource-library/',
            readingTime: '9 min read',
            type: 'article',
          },
          {
            id: 'res-w5-t1-2',
            title: 'Defining an MVP: How to Avoid Feature Creep',
            description: 'Why starting small and shipping fast beats trying to build everything at once.',
            source: 'Indie Hackers',
            url: 'https://www.indiehackers.com',
            readingTime: '6 min read',
            type: 'article',
          }
        ]
      },
      {
        id: 'component-architecture-and-state',
        weekId: 'week-5',
        order: 2,
        title: 'Component Architecture & State Management',
        description: 'Organize your codebase into reusable components. Manage reactive state, user inputs, and local storage data persistence.',
        summary: 'Learn how modern frameworks like React break giant websites into manageable Lego-like bricks.',
        video: {
          title: 'Workshop 18: Digital Lego — Modular Components & Reactive State',
          youtubeUrl: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
          date: 'Sept 2026',
          duration: '58 mins',
          instructor: 'Marcus Brody & Sarah Lin',
        },
        resources: [
          {
            id: 'res-w5-t1-1-b',
            title: 'Thinking in React: A Step-by-Step Mental Model',
            description: 'The official React guide on breaking UI into component trees and identifying minimal state.',
            source: 'React Official Docs',
            url: 'https://react.dev/learn/thinking-in-react',
            readingTime: '11 min read',
            type: 'documentation',
          },
          {
            id: 'res-w5-t2-2',
            title: 'State vs Props: Clear Rules of Thumb',
            description: 'When to pass data downwards vs when to keep state local to a component.',
            source: 'freeCodeCamp',
            url: 'https://www.freecodecamp.org/news/react-state-vs-props-explained-with-code-examples/',
            readingTime: '7 min read',
            type: 'tutorial',
          }
        ]
      },
      {
        id: 'finishing-polish-and-delight',
        weekId: 'week-5',
        order: 3,
        title: 'The WOW Factor: Micro-Interactions & Polish',
        description: 'Transform an ordinary app into an award-winning experience. Add subtle hover glows, confetti triggers, smooth transitions, and sound effects.',
        summary: 'The difference between good software and legendary software is in the details. Polish every corner.',
        video: {
          title: 'Workshop 19: The Spark of Magic — Physics, Micro-Interactions & Delight',
          youtubeUrl: 'https://www.youtube.com/watch?v=1F5dhyiQZmA',
          date: 'Sept 2026',
          duration: '46 mins',
          instructor: 'Aria Sterling, Design Technologist',
        },
        resources: [
          {
            id: 'res-w5-t3-1',
            title: 'The Principles of Delightful Micro-Interactions',
            description: 'Why tactile buttons, subtle spring physics, and feedback loops elevate user engagement.',
            source: 'UX Collective',
            url: 'https://uxdesign.cc/micro-interactions-why-details-matter-73b3e21544a4',
            readingTime: '8 min read',
            type: 'article',
          },
          {
            id: 'res-w5-t3-2',
            title: 'Framer Motion Quickstart Guide',
            description: 'Animate any React element with just a few intuitive motion props.',
            source: 'Motion for React',
            url: 'https://motion.dev/',
            readingTime: '10 min read',
            type: 'documentation',
          }
        ]
      },
      {
        id: 'showcase-and-demo-day',
        weekId: 'week-5',
        order: 4,
        title: 'Demo Day: Pitching & Launching Your Capstone',
        description: 'Present your masterpiece to peers, mentors, and the wider tech community. Learn how to record demo videos and write a stellar launch post.',
        summary: 'You built it, now show the world! Deliver a memorable demo and claim your CodersIsland Pioneer badge.',
        video: {
          title: 'Workshop 20: The Grand Expedition Finale — Student Demos & Graduation',
          youtubeUrl: 'https://www.youtube.com/watch?v=cK2B6yqVb-A',
          date: 'Sept 2026',
          duration: '60 mins',
          instructor: 'All Mentors & Special Guest Judges',
        },
        resources: [
          {
            id: 'res-w5-t4-1',
            title: 'How to Deliver a 3-Minute Tech Demo That Stuns',
            description: 'Pacing, showing the core problem, demonstrating features, and handling questions.',
            source: 'CodersIsland Expedition Guide',
            url: 'https://developer.mozilla.org',
            readingTime: '7 min read',
            type: 'article',
          },
          {
            id: 'res-w5-t4-2',
            title: 'Publishing Open-Source Projects with License & Readme',
            description: 'Choose the right license (MIT, Apache) and invite contributors to your repository.',
            source: 'Choose A License',
            url: 'https://choosealicense.com/',
            readingTime: '5 min read',
            type: 'documentation',
          }
        ]
      }
    ]
  }
];
