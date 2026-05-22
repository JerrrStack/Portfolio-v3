const EMAIL = "johnjeromebernal@gmail.com";

/** Opens Gmail compose in the browser (user must be signed into Google). */
export const gmailComposeUrl = ({ to = EMAIL, subject = "", body = "" } = {}) => {
  let url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}`;
  if (subject) url += `&su=${encodeURIComponent(subject)}`;
  if (body) url += `&body=${encodeURIComponent(body)}`;
  return url;
};

export const profile = {
  name: "John Jerome Bernal",
  shortName: "Jerome",
  title: "Software Engineer",
  titleNote: "Open to new opportunities & continuous learning",
  yearsExperience: 5,
  experienceStarted: "July 2021",
  experienceRange: "July 2021 – Present",
  tagline:
    "Open to new opportunities and ideas—here to learn, collaborate, and grow beyond any single role or stack.",
  location: "Cavite",
  stats: [
    {
      value: "5+",
      label: "Years of experience",
      detail: "July 2021 – present · professional software at YNS Philippines",
    },
    {
      value: "8+",
      label: "Production systems shipped",
      detail:
        "ECCUBE e-commerce, online pharmacy, business matching, labor & materials platform, truck dispatch, PDF/e-commerce tooling",
    },
    {
      value: "Lead & solo",
      label: "Ownership on delivery",
      detail:
        "Main developer (ECCUBE) · independent build (pharmacy) · lead dev (matching & payments)",
    },
  ],
  contactPreference:
    "Email is my preferred way to connect—feel free to send a message and I'll reply when I can.",
  email: EMAIL,
  emailComposeUrl: gmailComposeUrl({ to: EMAIL }),
  github: "https://github.com/JerrrStack",
  githubHandle: "JerrrStack",
  aboutHeading: "Open to what's next",
  aboutSubtitle:
    "Interested in new opportunities, fresh challenges, and learning wherever the work takes me.",
  about: `I'm a curious and growth-oriented person who enjoys building things, learning new tools, and improving through experience. I value clear communication, adaptability, and working with people who care about both quality and teamwork. I enjoy solving problems, exploring new ideas, and continuously developing both personally and professionally.`,
  skillsSubtitle:
    "What I've grown comfortable with over time—through work, practice, and curiosity.",
  experienceSubtitle:
    "How my role has grown—from associate engineer to software engineer, with more responsibility over time.",
  projectsSubtitle:
    "Personal projects I can share publicly—professional work stays confidential.",
  education: {
    school: "Far Eastern University – Cavite",
    degree: "BS in Information Technology",
    years: "2017 – 2020",
  },
  workExperience: [
    {
      company: "YNS Philippines Inc.",
      role: "Associate Software Engineer",
      period: "July 2021 – December 2021",
      highlights: [
        "Completed training and microblog presentation",
        "Handled bug fixes based on requirements and specifications",
        "Maintained software applications",
        "Contributed to updating a legacy CakePHP system to its latest version",
      ],
      technologies: [
        "CakePHP",
        "Laravel",
        "jQuery",
        "HTML",
        "CSS",
        "JavaScript",
        "MySQL",
        "Bitbucket",
      ],
    },
    {
      company: "YNS Philippines Inc.",
      role: "Junior Software Engineer",
      period: "December 2021 – July 2022",
      highlights: [
        "Collaborated on requirements analysis, Scrum ceremonies, and sprint planning",
        "Developed and tested features with PHPUnit unit testing",
        "Created test cases and updated project specifications and PBIs",
        "Implemented features for a business matching platform",
        "Developed PDF processing logic and reviewed code for an e-commerce website",
        "Built core features for a garbage collection and truck dispatch management system",
      ],
      technologies: [
        "CakePHP",
        "Laravel",
        "jQuery",
        "JavaScript",
        "MySQL",
        "Docker",
        "Vue.js",
        "Stripe API",
        "Bootstrap",
        "PHPUnit",
        "Bitbucket",
      ],
    },
    {
      company: "YNS Philippines Inc.",
      role: "Software Engineer",
      period: "July 2022 – Present",
      highlights: [
        "Handled multiple projects independently as a solo developer",
        "Managed the creation of PBIs and task breakdowns",
        "Conducted code reviews for peers",
        "Created and maintained sprint reports",
        "Led maintenance projects",
        "Initially contributed as a developer and later took on a lead role",
        "Worked on core development and code review for a labor-and-materials matching system with job posting, payments, material sharing, and community bulletin features",
        "Facilitated Scrum meetings and guided the team as acting Scrum Master",
      ],
      technologies: [
        "Laravel",
        "MySQL",
        "Firebase",
        "Vue.js",
        "React.js",
        "Node.js",
        "Symfony",
        "CakePHP",
        "PHPUnit",
        "Docker",
        "AWS",
        "Inertia.js",
        "Stripe API",
        "PaymentLite",
        "ECCUBE",
        "Git",
        "Bitbucket",
        "GitHub",
      ],
    },
  ],
  skillCategories: [
    {
      progressName: "Languages",
      progressValue: 92,
      tools: ["PHP", "JavaScript", "HTML", "CSS", "Dart", "GDScript"],
    },
    {
      progressName: "Web Frameworks & Libraries",
      progressValue: 88,
      tools: [
        "Laravel",
        "Vue.js",
        "React.js",
        "Node.js",
        "Symfony",
        "CakePHP",
        "jQuery",
        "Bootstrap",
        "Inertia.js",
        "ECCUBE",
      ],
    },
    {
      progressName: "Mobile & Game Development",
      progressValue: 82,
      tools: ["Dart", "Flutter", "Godot", "GDScript"],
    },
    {
      progressName: "Databases",
      progressValue: 85,
      tools: ["MySQL", "Firebase"],
    },
    {
      progressName: "DevOps, Cloud & Tools",
      progressValue: 84,
      tools: [
        "Docker",
        "Amazon Web Services (AWS)",
        "PHPUnit",
        "Postman",
        "Git",
        "Bitbucket",
        "GitHub",
      ],
    },
    {
      progressName: "Payments & Integrations",
      progressValue: 80,
      tools: ["Stripe API", "PaymentLite", "Epsilon"],
    },
    {
      progressName: "AI Tools",
      progressValue: 85,
      tools: ["ChatGPT", "Cursor"],
    },
  ],
};
