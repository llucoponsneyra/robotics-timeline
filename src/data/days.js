// src/data/days.js

export const days = [
  {
    id: 'mon-23',
    week: 'Week 1',
    dateLabel: 'Mon 23',
    dayLabel: 'Mon',
    title: 'Intro to Karel the Robo Dog',
    summary:
      'Welcome back to robotics in remote mode; meet Karel, set up CodeHS, and review basic movement and functions.',
    moodGif:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXl6M2Z3Z200ZndmZ3c4d3d1cTZmYjA1OTNrai9vNTU1eGFnMGF2OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKzyQGN6jG4r0Qo/giphy.gif', // placeholder dog/robot gif
    icon:
      'https://cdn.codehs.com/uploads/7b7b0c0d2b1a8e475c-karel-dog-icon.png', // example placeholder, swap to real asset
    iframeUrl: 'https://codehs.com/hourofcode/karel', // or a specific playlist / doc
    lessonPlan: {
      bigIdea:
        'Shift from physical VEX robots to virtual robots while building core programming habits with Karel.',
      agenda: [
        'Acknowledge remote learning shift and pause on physical VEX Clawbots; remind students to finish any remaining VEX VR challenges and update engineering notebooks.',
        'Introduce CodeHS and Karel the robo dog; join the course and confirm students can log in.',
        'Work through CodeHS Module 1 lessons: 1.1 Introduction to Programming With Karel, 1.2 More Basic Karel, 1.3 Karel Can’t Turn Right, 1.4 Functions in Karel, 1.5 The Start Function.',
        'Preview the idea of Top Down Design: breaking larger robot challenges into smaller, named functions.'
      ],
      objectives: [
        'Log into CodeHS and join the class section successfully.',
        'Run and modify simple Karel programs using move and turn commands.',
        'Understand the purpose of the start() function and basic custom functions.',
        'Explain, in plain language, what Top Down Design means for robot programming.'
      ],
      asyncNotes:
        'Students who miss class should watch the intro walkthrough video and complete 1.1–1.5 on CodeHS; submit a screenshot or progress check for credit.',
      resources: [
        {
          type: 'codehs',
          label: 'CodeHS – Intro to Programming with Karel (1.1–1.5)',
          url: 'https://codehs.com/hourofcode/karel'
        },
        {
          type: 'doc',
          label: 'Engineering Notebook Template (Google Doc)',
          url: 'https://docs.google.com'
        },
        {
          type: 'video',
          label: 'Recorded Intro: Karel & Remote Robotics (ACS)',
          url: 'https://youtu.be/example-intro-karel'
        }
      ]
    }
  },

  {
    id: 'wed-25',
    week: 'Week 1',
    dateLabel: 'Wed 25',
    dayLabel: 'Wed',
    title: 'Top Down Design & Storytelling with Functions',
    summary:
      'Go deeper into Top Down Design, then use functions to tell a story with Karel.',
    moodGif:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3hmYXJ2cGZrcnNrdmJwZjZsZzFlbDR0d2djc2EwYnA1Z3M1NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7btPCcdNniyf0ArS/giphy.gif', // hurdles / thinking gif
    icon:
      'https://cdn.codehs.com/uploads/3fbb8a1c7a1234-top-down-design-icon.png',
    iframeUrl:
      'https://codehs.com/editor/playlist/video/540744/3832/2640', // adjust to your specific 1.6 video or lesson
    lessonPlan: {
      bigIdea:
        'We write programs that read like a story by decomposing problems into well‑named, reusable functions.',
      agenda: [
        'Review Top Down Design using CodeHS materials: 1.6.1 Top Down Design and Decomposition in Karel (video), Check for Understanding, 1.6.2 Quiz, 1.6.3 Hurdle Karel example, and 1.6.4 Karel’s Story practice.',
        'Discuss how function names act like chapter titles, making the program read like a story for humans.',
        'ACS Playlist – Exercise 1.3: Functions Tell A Story (T): plan the story in plain English and identify candidate functions.',
        'Live code and test a solution together, emphasizing readable function names and consistent style.'
      ],
      objectives: [
        'Describe Top Down Design as breaking a large problem into smaller subproblems and functions.',
        'Identify when writing a new function improves clarity versus inlining commands.',
        'Use multi‑line comments to describe big steps in start().',
        'Write and call custom Karel functions that “tell a story” through their names.'
      ],
      tasks: [
        'Get Karel to the end of the street while picking up all tennis balls on the way.',
        'Define a goToBed() (or similar) function so Karel ends in bed at the end of the street.',
        'Ensure ending position: Karel is facing south at the final location.',
        'Use comments in start() to label each major phase of the story.'
      ],
      asyncNotes:
        'This lesson will be recorded; asynchronous students should watch the recording, complete 1.6.1–1.6.4 and ACS Exercise 1.3 Functions Tell A Story, and submit their final Karel code on CodeHS.',
      resources: [
        {
          type: 'codehs',
          label: '1.6 Top Down Design & Decomposition in Karel (CodeHS)',
          url: 'https://codehs.gitbooks.io/introcs/content/Programming-with-Karel/top-down-design-and-decomposition.html'
        },
        {
          type: 'playlist',
          label: 'ACS Playlist – Exercise 1.3: Functions Tell A Story (T)',
          url: 'https://codehs.com'
        },
        {
          type: 'video',
          label: 'ACS Recording – Top Down Design & Storytelling',
          url: 'https://youtu.be/example-top-down-story'
        }
      ]
    }
  },

  {
    id: 'fri-27',
    week: 'Week 1',
    dateLabel: 'Fri 27',
    dayLabel: 'Fri',
    title: 'Finish the Story – Function Practice',
    summary:
      'Solidify Top Down Design by finishing a Karel story that uses clear, reusable functions.',
    moodGif:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnA1N3RhZmN2OW1uZ2ZteTRuM2E4cGlsOWdpc3Z3aGozN3V3NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohzdIuqJoo8QdKlnW/giphy.gif', // celebration gif
    icon:
      'https://cdn.codehs.com/uploads/4c7e9b9d8e-karel-finish-story-icon.png',
    iframeUrl: 'https://codehs.com', // swap in your ACS playlist or CodeHS exercise link
    lessonPlan: {
      bigIdea:
        'Finishing a story with Karel shows how well we can design, name, and reuse functions in a larger program.',
      agenda: [
        'Warm‑up discussion: what makes Karel programs readable like a story (review of function naming and comments).',
        'ACS Playlist – Exercise 1.5: Finish the Story: read the world description and identify the major tasks.',
        'Students work individually or in pairs to implement the story using Top Down Design.',
        'Share and compare solutions, focusing on clarity of function decomposition rather than just “passing the test”.'
      ],
      objectives: [
        'Decide when to introduce a new function versus extending an existing one.',
        'Use functions to organize Karel’s story into clear, logical steps.',
        'Apply consistent naming conventions for functions and comments.',
        'Ensure Karel meets all world requirements (balls collected and final position correct).'
      ],
      tasks: [
        'Karel must collect all of the tennis balls in the world.',
        'Karel ends at the final required position facing EAST.',
        'Use comments in start() to label each major task (e.g., // Collect balls on first block).',
        'Refactor long sequences of commands into well‑named helper functions as needed.'
      ],
      asyncNotes:
        'Students who are absent should watch the Finish the Story walkthrough recording, complete ACS Exercise 1.5, and submit their solution in CodeHS with screenshots or a link.',
      resources: [
        {
          type: 'codehs',
          label: 'ACS Playlist – Exercise 1.5: Finish the Story',
          url: 'https://codehs.com'
        },
        {
          type: 'video',
          label: 'ACS Recording – Finish the Story walkthrough',
          url: 'https://youtu.be/example-finish-story'
        },
        {
          type: 'glossary',
          label: 'CodeHS Glossary – Read Like a Story',
          url: 'https://codehs.com/glossary/term/9'
        }
      ]
    }
  }
];

