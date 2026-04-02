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
      'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnVteDE1bzgwYWRrNDUydW5vYWttd3lrYmJxcjVvZTQxMGJweHN4MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jTfSJjWrn2S5VYhZ3N/giphy.gif',
    icon:
      'https://uploads.codehs.com/8491c099a07c2bf7b3d5775dcfe2f07b',
    iframeUrl: 'https://codehs.com/app/assignments/section/849749',

    // period-specific live links
    perPeriod: {
      p2: {
        meetUrl: 'https://meet.google.com/wrz-mwxt-wuh',
        resources: [
          // add any P2-specific links here if needed
        ]
      },
      p3: {
        meetUrl: 'https://meet.google.com/xkm-cidj-eus',
        resources: [
          // add any P3-specific links here if needed
        ]
      }
    },

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
          url: 'https://codehs.com/app/assignments/section/849749'
        },
        {
          type: 'doc',
          label: 'Engineering Notebook Template (Google Doc)',
          url: 'https://docs.google.com'
        },
        {
          type: 'video',
          label: 'Recorded Intro: Karel & Remote Robotics (ACS) [Not Available]',
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
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3hmYXJ2cGZrcnNrdmJwZjZsZzFlbDR0d2djc2EwYnA1Z3M1NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7btPCcdNniyf0ArS/giphy.gif',
    icon:
      'https://uploads.codehs.com/8491c099a07c2bf7b3d5775dcfe2f07b',
    iframeUrl:
      'https://drive.google.com/file/d/1cHQsJdsJuLsTHAyCajlGTnAo9rw14AV3/preview?usp=sharing',

    perPeriod: {
      p2: {
        meetUrl: 'https://meet.google.com/wrz-mwxt-wuh',
        resources: [
          {
            type: 'playlist',
            label: 'ACS P2 – Exercise 1.3: Functions Tell A Story (T)',
            url: 'https://codehs.com/student/3408794/section/849749/assignment/53038580'
          }
        ]
      },
      p3: {
        meetUrl: 'https://meet.google.com/xkm-cidj-eus',
        resources: [
          {
            type: 'playlist',
            label: 'ACS P3 – Exercise 1.3: Functions Tell A Story (T)',
            url: 'https://codehs.com/student/3408794/section/849750/assignment/53038580'
          }
        ]
      }
    },

    lessonPlan: {
      bigIdea:
        'We write programs that read like a story by decomposing problems into well-named, reusable functions.',
      agenda: [
        'Review Top Down Design using CodeHS materials: 1.6.1 Top Down Design and Decomposition in Karel (video), Check for Understanding, 1.6.2 Quiz, 1.6.3 Hurdle Karel example, and 1.6.4 Karel’s Story practice.',
        'Discuss how function names act like chapter titles, making the program read like a story for humans.',
        'ACS Playlist – Exercise 1.3: Functions Tell A Story (T): plan the story in plain English and identify candidate functions.',
        'Live code and test a solution together, emphasizing readable function names and consistent style.'
      ],
      objectives: [
        'Describe Top Down Design as breaking a large problem into smaller subproblems and functions.',
        'Identify when writing a new function improves clarity versus inlining commands.',
        'Use multi-line comments to describe big steps in start().',
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
          type: 'video',
          label: 'Lesson Recording – Top Down Design & Storytelling [Available now]',
          url: 'https://drive.google.com/file/d/1cHQsJdsJuLsTHAyCajlGTnAo9rw14AV3/view?usp=sharing'
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
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnA1N3RhZmN2OW1uZ2ZteTRuM2E4cGlsOWdpc3Z3aGozN3V3NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohzdIuqJoo8QdKlnW/giphy.gif',
    icon:
      'https://uploads.codehs.com/8491c099a07c2bf7b3d5775dcfe2f07b',
    iframeUrl: 'https://drive.google.com/file/d/1t1spIzLTGRJDkiLWR1vPmI4MRfNCs_ai/preview?usp=sharing',

    perPeriod: {
      p2: {
        meetUrl: 'https://meet.google.com/wrz-mwxt-wuh',
        resources: [
          // add P2 Finish-the-Story specific links when you have them
        ]
      },
      p3: {
        meetUrl: 'https://meet.google.com/xkm-cidj-eus',
        resources: [
          // add P3 Finish-the-Story specific links when you have them
        ]
      }
    },

    lessonPlan: {
      bigIdea:
        'Finishing a story with Karel shows how well we can design, name, and reuse functions in a larger program.',
      agenda: [
        'Warm-up discussion: what makes Karel programs readable like a story (review of function naming and comments).',
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
        'Refactor long sequences of commands into well-named helper functions as needed.'
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
          label: 'Lesson Recording – Finish the Story walkthrough [Available Now]',
          url: 'https://drive.google.com/file/d/1t1spIzLTGRJDkiLWR1vPmI4MRfNCs_ai/view?usp=sharing'
        },
        {
          type: 'glossary',
          label: 'CodeHS Glossary – Read Like a Story',
          url: 'https://codehs.com/glossary/term/9'
        }
      ]
    }
  },

    {
    id: 'tue-31',
    week: 'Week 2',
    dateLabel: 'Tue 31',
    dayLabel: 'Tue',
    title: 'Super Karel & For Loops',
    summary:
      'Build independence with Super Karel and for loops, then apply loop patterns together in a fun ACS challenge.',
    moodGif:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3h4dnRrMHRnZ3JiZDc1dDhhNHVobnNwdm91dW53bTV4eHJqYzllbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0HlvycZOszvrIQNy/giphy.gif',
    icon:
      'https://uploads.codehs.com/8491c099a07c2bf7b3d5775dcfe2f07b',
    iframeUrl:
      'https://drive.google.com/file/d/1rS6oFDh8Lte050dykMgxEaHXZjFLjqHB/preview?usp=sharing',

    perPeriod: {
      p2: {
        meetUrl: 'https://meet.google.com/wrz-mwxt-wuh',
        iframeUrl: 'https://drive.google.com/file/d/1rS6oFDh8Lte050dykMgxEaHXZjFLjqHB/preview?usp=sharing',
        resources: [
          {
            type: 'playlist',
            label: 'Programming with Karel – 1.8 Super Karel',
            url: 'https://codehs.com'
          },
          {
            type: 'playlist',
            label: 'Programming with Karel – 1.9 For Loops',
            url: 'https://codehs.com'
          },
          {
            type: 'playlist',
            label: 'ACS P2 – Exercise 1.9: For Loops Are Fun (In Class)',
            url: 'https://codehs.com'
          },
          {
            type: 'video',
            label: 'Lesson Recording – Super Karel & For Loops [Available now]',
            url: 'https://drive.google.com/file/d/1rS6oFDh8Lte050dykMgxEaHXZjFLjqHB/view?usp=sharing'
          },
          {
            type: 'video',
            label: 'Lesson Recording 2 – Super Karel & For Loops [Available now]',
            url: 'https://drive.google.com/file/d/1rXOTZDgLjOO6IEptQW128VwMyLfUFbGu/view?usp=sharing'
          }
        ]
      },
      p3: {
        meetUrl: 'https://meet.google.com/xkm-cidj-eus',
        iframeUrl: 'https://drive.google.com/file/d/1ONAWgnfnCyzXXPmZsy_OlbQ23MdF3DZN/preview?usp=sharing',
        resources: [
          {
            type: 'playlist',
            label: 'Programming with Karel – 1.8 Super Karel',
            url: 'https://codehs.com'
          },
          {
            type: 'playlist',
            label: 'Programming with Karel – 1.9 For Loops',
            url: 'https://codehs.com'
          },
          {
            type: 'playlist',
            label: 'ACS P3 – Exercise 1.9: For Loops Are Fun (In Class)',
            url: 'https://codehs.com'
          },
          {
            type: 'video',
            label: 'Lesson Recording – Super Karel & For Loops [Available now]',
            url: 'https://drive.google.com/file/d/1ONAWgnfnCyzXXPmZsy_OlbQ23MdF3DZN/view?usp=sharing'
          },
          {
            type: 'video',
            label: 'Lesson Recording 2 – Super Karel & For Loops [Available now]',
            url: 'https://drive.google.com/file/d/1rXOTZDgLjOO6IEptQW128VwMyLfUFbGu/view?usp=sharing'
          }
        ]
      }
    },

    lessonPlan: {
      bigIdea:
        'New commands and loops help Karel solve repeated patterns more efficiently and with less code.',
      agenda: [
        'Students work independently for the first half of class on Programming with Karel lessons 1.8 Super Karel and 1.9 For Loops.',
        'Pause to review how turnRight() and turnAround() expand what Karel can do in a world.',
        'Discuss how for loops help us repeat actions cleanly instead of writing the same line many times.',
        'Work together on ACS Playlist – Exercise 1.9: For Loops Are Fun (In Class), identifying repeated patterns before coding.'
      ],
      objectives: [
        'Use Super Karel commands such as turnRight() and turnAround() correctly.',
        'Explain when a for loop is a better choice than repeating the same command manually.',
        'Write for loops that repeat movement or action patterns a set number of times.',
        'Apply looping to solve a structured Karel challenge with clearer, shorter code.'
      ],
      tasks: [
        'Complete 1.8 Super Karel independently.',
        'Complete 1.9 For Loops independently.',
        'Work together on ACS Exercise 1.9: For Loops Are Fun (In Class).',
        'Identify repeated action patterns and replace them with appropriate for loops.'
      ],
      asyncNotes:
        'Students who are absent should complete 1.8 Super Karel and 1.9 For Loops independently, then attempt ACS Exercise 1.9 For Loops Are Fun and submit their progress in CodeHS.',
      resources: [

      ]
    }
  },

  {
    id: 'thu-2',
    week: 'Week 2',
    dateLabel: 'Thu 2 Apr',
    dayLabel: 'Thu',
    title: 'Finish For Loops & Start If Statements',
    summary:
      'Wrap up the for loops challenge, then begin making Karel decisions with if and if/else statements.',
    moodGif:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHFxZXBtZG1wZnkwY2QxZ29jbnNwNmx5b2kwNWRpOHByc2J4aXZ6eiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/13HgwGsXF0aiGY/giphy.gif',
    icon:
      'https://uploads.codehs.com/8491c099a07c2bf7b3d5775dcfe2f07b',
    iframeUrl: 'https://drive.google.com/file/d/1l37ZZucagB_3aXRhkjM0WUTAvQK--Knq/preview?usp=sharing',

    perPeriod: {
      p2: {
        meetUrl: 'https://meet.google.com/wrz-mwxt-wuh',
        resources: [
          {
            type: 'playlist',
            label: 'ACS P2 – Exercise 1.9: For Loops Are Fun (In Class)',
            url: 'https://codehs.com'
          },
          {
            type: 'playlist',
            label: 'Programming with Karel – 1.10 If Statements',
            url: 'https://codehs.com'
          },
          {
            type: 'playlist',
            label: 'Programming with Karel – 1.11 If/Else Statements',
            url: 'https://codehs.com'
          },
          {
            type: 'video',
            label: 'Lesson Recording 1– Super Karel & For Loops [Available now]',
            url: 'https://drive.google.com/file/d/1l37ZZucagB_3aXRhkjM0WUTAvQK--Knq/view?usp=sharing'
          },
          {
            type: 'video',
            label: 'Lesson Recording 2 – Super Karel & For Loops [Available now]',
            url: 'https://drive.google.com/file/d/1eDk4psoXs3ymUZNqNa8GPctHQ0g3oxrr/view?usp=sharing'
          }
        ]
      },
      p3: {
        meetUrl: 'https://meet.google.com/xkm-cidj-eus',
        resources: [
          {
            type: 'playlist',
            label: 'ACS P3 – Exercise 1.9: For Loops Are Fun (In Class)',
            url: 'https://codehs.com'
          },
          {
            type: 'playlist',
            label: 'Programming with Karel – 1.10 If Statements',
            url: 'https://codehs.com'
          },
          {
            type: 'playlist',
            label: 'Programming with Karel – 1.11 If/Else Statements',
            url: 'https://codehs.com'
          },
          {
            type: 'video',
            label: 'Lesson Recording 1– Super Karel & For Loops [Available now]',
            url: 'https://drive.google.com/file/d/1l37ZZucagB_3aXRhkjM0WUTAvQK--Knq/view?usp=sharing'
          },
          {
            type: 'video',
            label: 'Lesson Recording 2 – Super Karel & For Loops [Available now]',
            url: 'https://drive.google.com/file/d/16eJp8hBj66Hzj0wSWKziX49HMQ9XkuCK/view?usp=sharing'
          }
        ]
      }
    },

    lessonPlan: {
      bigIdea:
        'After learning to repeat actions with loops, we now help Karel make decisions based on what it senses in the world.',
      agenda: [
        'Review and finish ACS Exercise 1.9: For Loops Are Fun from the previous lesson.',
        'Go over common loop mistakes and look at cleaner ways to structure repeated actions.',
        'Introduce 1.10 If Statements and show how Karel can check conditions before acting.',
        'Complete 1.11 If/Else Statements to compare single-condition choices with two possible paths.'
      ],
      objectives: [
        'Refine loop-based solutions by checking for efficiency, accuracy, and readability.',
        'Use if statements to make Karel respond to conditions in the world.',
        'Use if/else statements when Karel needs to choose between two possible actions.',
        'Explain the difference between repeating code with loops and making decisions with conditional statements.'
      ],
      tasks: [
        'Finish and review ACS Exercise 1.9: For Loops Are Fun.',
        'Complete 1.10 If Statements.',
        'Complete 1.11 If/Else Statements.',
        'Test Karel programs to make sure decisions match the world conditions correctly.'
      ],
      asyncNotes:
        'Students who miss class should finish the For Loops Are Fun exercise, then complete 1.10 If Statements and 1.11 If/Else Statements on CodeHS and submit a screenshot of completed progress.',
      resources: [
  
      ]
    }
  }
];