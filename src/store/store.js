const projects = [
  {
    name: 'Zest',
    description:
      'A productivity application for work and study. Features include note-taking, tasks, and reminders, among others.',
    tech: ['php', 'mysql', 'css3', 'bootstrap', 'javascript'],
    img: new URL('../assets/projects/zest/login.png', import.meta.url).href,
    collection: [],
    url: '',
    repository: 'https://github.com/jvc1019/Zest',
  },
  {
    name: 'ReTrac',
    description:
      'A document requesting and tracking system created for University of the Philippines Visayas. Features include document request and request tracking for students, staff, and moderator.',
    tech: ['react', 'tailwindcss', 'firebase', 'html5', 'javascript', 'css3'],
    img: new URL('../assets/projects/zest/login.png', import.meta.url).href,
    collection: [],
    url: 'https://retrac.web.app',
    repository: 'https://github.com/joashdev/retrac',
  },
  {
    name: 'Pomotime',
    description:
      'A timer specifically made for Pomodoro Technique. Features include customizable timers for break, long pomodoro, and short pomodoro. And the app can be used natively since it is a progressive web app (PWA).',
    tech: ['vue', 'tailwindcss', 'firebase', 'html5', 'css3', 'javascript'],
    img: new URL('../assets/projects/pomotime/home.png', import.meta.url).href,
    collection: [],
    url: 'https://pomotime.web.app',
    repository: 'https://github.com/jvc1019/Zest',
  },
  {
    name: 'Chat Balloons',
    description:
      'A single-room real-time chat application. Features include text-only chat and secure signin thru Google Signin.',
    tech: ['react', 'bulmacss', 'firebase', 'html5', 'javascript', 'css3'],
    img: new URL('../assets/projects/zest/login.png', import.meta.url).href,
    collection: [],
    url: 'https://chat-balloons.web.app',
    repository: 'https://github.com/joashdev/retrac',
  },
  {
    name: 'Matchit!',
    description:
      'A Pokemon inspired card flip game. The game has multiple difficulty levels specifically Easy, Medium, and Hard.',
    tech: ['vue', 'tailwindcss', 'firebase', 'html5', 'css3', 'javascript'],
    img: new URL('../assets/projects/zest/login.png', import.meta.url).href,
    collection: [],
    url: 'https://matchit.web.app',
    repository: 'https://github.com/jvc1019/Zest',
  },
  {
    name: 'TicTacToe',
    description:
      'A clone of the classic two-player TicTacToe game. The game can be played by two players taking turns.',
    tech: ['vue', 'bulmacss', 'firebase', 'html5', 'css3', 'javascript'],
    img: new URL('../assets/projects/zest/login.png', import.meta.url).href,
    collection: [],
    url: 'https://game-tictactoe.web.app/',
    repository: 'https://github.com/joashdev/retrac',
  },
];

const skills = [
  {
    category: 'Web Development',
    items: [
      {
        name: 'HTML5',
        img: '',
      },
    ],
  },
  {
    category: 'Programming',
    items: [
      {
        name: 'Python',
        img: '',
      },
    ],
  },
  {
    category: 'Others',
    items: [
      {
        name: 'Linux',
        img: '',
      },
    ],
  },
];

export { projects, skills };
