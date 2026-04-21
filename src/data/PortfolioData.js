export const NAV_ITEMS = [
  { label: "Home", path: "#home" },
  { label: "About", path: "#about" },
  { label: "Skills", path: "#skills" },
  { label: "Projects", path: "#projects" },
  { label: "Contact", path: "#contact" },
];

export const lightColors = {
    navBg: "bg-linear-to-br from-orange-200 to-white",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-800",
    textHover: "text-orange-500",
    textActive: "text-orange-600",
    indicator: "from-orange-500 to-amber-500",
    button: "from-orange-500 to-amber-500",
};

export const DarkColors = {
    navBg: "bg-linear-to-br from-gray-700 to-black",
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    textHover: "text-orange-400",
    textActive: "text-orange-400",
    indicator: "from-orange-500 to-amber-500",
    button: "from-orange-500 to-amber-500",
};



export const PROFILE = {
    name: "Ankit Singh Rajbanshi",
    title: "Aspiring Backend Developer",
    location: "Nepal",
    resume: "/ankit.pdf",
    email: "asrankit456@gmail.com",
    github: "https://github.com/ankit-singh100",
    linkedin: "https://www.linkedin.com/in/ankit-singh-b86821254/"
}

export const ABOUT = {
    intro: "I specialize in Node.js with express, python with FastAPI, with strong interest in backend architecture and system realibility. I have experience with databases like MongoDB and PostgreSQL, and I'm passionate about building scalable and efficient backend systems. I'm eager to contribute my skills and grow as a backend developer.",
    focus: "Right now, I'm focused on mastering REST APIs, database design, anf writing clean, maintainable server-side code while building pratical projects that solve real problems.",
}

export const PROJECTS = [
  {
    id: 1,
    title: 'REST API Project',
    description:
      'A fully functional REST API built with Node.js and Express, including JWT authentication, protected routes, and modular folder structure.',
    image: "",
    stack: ['Node.js', 'Express', 'MongoDB', 'JWT'],
  },
  {
    id: 2,
    title: 'Python Automation Tool',
    description:
      'A Python automation script that streamlines repetitive workflows and scrapes structured data using requests and BeautifulSoup.',
    image: "",
    stack: ['Python', 'requests', 'BeautifulSoup'],
  },
  {
    id: 3,
    title: 'Backend System Blueprint',
    description:
      'An in-progress backend architecture practice project focused on scalable service layers, clear API contracts, and maintainable code organization.',
    image: "",
    stack: ['Node.js', 'PostgreSQL', 'REST APIs'],
  },
]