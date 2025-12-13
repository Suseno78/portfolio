export interface ProjectData {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  tools: string[];
  image: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "AI Konseling Chatbot",
    description: "An intelligent counseling chatbot integrated with Telegram for mental health support.",
    fullDescription: "A sophisticated AI-powered chatbot that provides counseling services through Telegram. Built with Laravel backend, integrated with n8n for workflow automation, and uses AI to provide empathetic and helpful responses to users seeking mental health support.",
    tools: ["Laravel", "PHP", "Telegram API", "n8n", "AI/ML"],
    image: "/n8n.png"
  },
  {
    id: 2,
    title: "Medicare",
    description: "A web-based healthcare information system designed to help users access medical services and health-related data easily. Focused on clean UI and simple user interaction.",
    fullDescription: "A web-based healthcare information system designed to help users access medical services and health-related data easily. The system provides a clean and intuitive interface for accessing medical information, managing health records, and connecting with healthcare services.",
    tools: ["HTML", "CSS", "JavaScript", "JSON", "Bootstrap"],
    image: "/medicare.png"
  },
  {
    id: 3,
    title: "LifeHub",
    description: "A health information web platform that provides disease education and basic health insights with a responsive and user-friendly interface.",
    fullDescription: "A health information web platform that provides disease education and basic health insights with a responsive and user-friendly interface. Built to help users understand common health conditions and make informed health decisions.",
    tools: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/lifehub.png"
  },
  {
    id: 4,
    title: "Personal Portfolio",
    description: "A modern one-page personal portfolio website showcasing projects, skills, and contact information with a clean Gen-Z aesthetic and smooth interactions.",
    fullDescription: "A modern one-page personal portfolio website showcasing projects, skills, and contact information with a clean Gen-Z aesthetic and smooth interactions. Features include dark mode, multi-language support, smooth animations, and a responsive mobile-first design.",
    tools: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    image: "/portfolio.png"
  },
  {
    id: 5,
    title: "Hotel Management System",
    description: "A native PHP-based hotel management system for handling room data, bookings, and customer information with database integration.",
    fullDescription: "A native PHP-based hotel management system for handling room data, bookings, and customer information with database integration. Provides comprehensive features for managing hotel operations including reservations, room availability, and guest management.",
    tools: ["PHP (Native)", "MySQL", "CSS", "Bootstrap", "JavaScript"],
    image: "/hotel.png"
  },
  {
    id: 6,
    title: "Food Recipe App",
    description: "A web application that allows users to explore, manage, and store food recipes with a simple interface and database-driven content.",
    fullDescription: "A web application that allows users to explore, manage, and store food recipes with a simple interface and database-driven content. Features include recipe search, category filtering, ingredient management, and user-friendly recipe storage.",
    tools: ["PHP", "MySQL", "CSS", "Bootstrap", "JavaScript"],
    image: "/resep.png"
  }
];
