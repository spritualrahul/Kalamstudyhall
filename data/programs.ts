export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
  subjects?: string[];
  ageGroup: string;
  schedule: string;
  color: string;
  highlights: string[];
}

export const programs: Program[] = [
  {
    id: "mathematics",
    title: "Mathematics",
    description:
      "Build a strong foundation in numbers, logic, and problem-solving. Our approach focuses on conceptual clarity over rote memorization.",
    icon: "📐",
    subjects: ["Arithmetic", "Algebra", "Geometry", "Word Problems"],
    ageGroup: "Classes 1–10",
    schedule: "Mon–Sat",
    color: "sky",
    highlights: [
      "Concept-based learning",
      "Weekly practice tests",
      "Doubt-clearing sessions",
    ],
  },
  {
    id: "science",
    title: "Science",
    description:
      "Explore the world of science through experiments, visual aids, and interactive discussions that make complex concepts simple.",
    icon: "🔬",
    subjects: ["Physics", "Chemistry", "Biology", "Environmental Science"],
    ageGroup: "Classes 1–10",
    schedule: "Mon–Sat",
    color: "mint",
    highlights: [
      "Hands-on experiments",
      "Visual learning aids",
      "Real-world examples",
    ],
  },
  {
    id: "english",
    title: "English",
    description:
      "Develop strong reading, writing, and communication skills. From grammar to creative writing, we make English engaging and fun.",
    icon: "📖",
    subjects: ["Grammar", "Comprehension", "Creative Writing", "Literature"],
    ageGroup: "Classes 1–10",
    schedule: "Mon–Sat",
    color: "lavender",
    highlights: [
      "Reading comprehension drills",
      "Essay & story writing",
      "Spoken English practice",
    ],
  },
  {
    id: "hindi",
    title: "Hindi",
    description:
      "Master Hindi language skills with a focus on grammar, comprehension, and expressive writing in a supportive environment.",
    icon: "✍️",
    subjects: ["Vyakaran", "Gadya & Padya", "Nibandh", "Comprehension"],
    ageGroup: "Classes 1–10",
    schedule: "Mon–Sat",
    color: "coral",
    highlights: [
      "Grammar fundamentals",
      "Literature appreciation",
      "Writing & expression",
    ],
  },
];

export const weekendWorkshops = [
  {
    id: "painting",
    title: "Painting & Drawing",
    icon: "🎨",
    description: "Explore watercolors, sketching, and creative art techniques.",
  },
  {
    id: "crochet",
    title: "Crochet & Craft",
    icon: "🧶",
    description: "Learn crochet, origami, and hands-on craft skills.",
  },
  {
    id: "clay-art",
    title: "Clay Art",
    icon: "🏺",
    description: "Sculpt and create with clay in fun, messy sessions.",
  },
];
