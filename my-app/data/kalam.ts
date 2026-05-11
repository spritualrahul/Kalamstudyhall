export type Tone =
  | "purple"
  | "green"
  | "blue"
  | "orange"
  | "pink"
  | "yellow";

export type IconName =
  | "book"
  | "blocks"
  | "graduation"
  | "message"
  | "star"
  | "brain"
  | "users"
  | "palette"
  | "heart"
  | "calendar"
  | "clock"
  | "check"
  | "child"
  | "pencil"
  | "mic"
  | "shield"
  | "leaf"
  | "laptop"
  | "gamepad"
  | "film"
  | "scissors"
  | "flask"
  | "party"
  | "pizza"
  | "trophy"
  | "target"
  | "eye"
  | "smile"
  | "gift"
  | "grid"
  | "lightbulb"
  | "home"
  | "map"
  | "mail"
  | "phone"
  | "globe";

export const contact = {
  phone: "+91 XXXXX XXXXX",
  email: "hello@kalamstudyhall.com",
  website: "www.kalamstudyhall.com",
  address: "Kalam Study Hall",
  addressDetail: "A joyful learning space for young minds",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/workshops", label: "Workshops" },
  { href: "/contact", label: "Contact" },
];

export const heroStats = [
  {
    value: "1:5",
    label: "Teacher-Student Ratio",
    detail: "Ensuring every child gets the attention and support they deserve.",
    icon: "users" as IconName,
    tone: "purple" as Tone,
  },
  {
    value: "Pre-K - Grade 8",
    label: "Enrichment Programs",
    detail: "Designed for every age and stage to learn, grow and excel.",
    icon: "graduation" as IconName,
    tone: "orange" as Tone,
  },
  {
    value: "Creative + Academic",
    label: "Learning Approach",
    detail: "Blending creativity with academics for deeper understanding and joy.",
    icon: "lightbulb" as IconName,
    tone: "green" as Tone,
  },
];

export const featuredPrograms = [
  {
    title: "Early Learning Foundations",
    description:
      "A joyful foundation program that nurtures phonics, reading readiness, handwriting, vocabulary, fine motor skills, and early concept development through playful and engaging learning experiences.",
    shortDescription:
      "Helping younger learners build strong foundations through phonics, creativity, reading readiness, and playful learning experiences.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=700&h=440&fit=crop&q=80",
    imagePosition: "50% 30%",
    icon: "book" as IconName,
    tone: "purple" as Tone,
    tags: ["Phonics", "Handwriting", "Reading Readiness", "Creative Learning"],
    age: "Pre-K - UKG",
    schedule: "Mon - Fri",
  },
  {
    title: "Creative Concept Learning",
    description:
      "Children explore and understand concepts through activity-based learning, visual tools, worksheets, games, and hands-on experiences that make learning meaningful and enjoyable.",
    shortDescription:
      "Concept-based learning that encourages understanding, curiosity, logical thinking, and meaningful learning beyond memorization.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=700&h=440&fit=crop&q=80",
    imagePosition: "50% 40%",
    icon: "blocks" as IconName,
    tone: "green" as Tone,
    tags: ["Concept Clarity", "Interactive Learning", "Critical Thinking", "Activity-Based"],
    age: "Pre-K - Grade 8",
    schedule: "Mon - Sat",
  },
  {
    title: "Communication & Expression",
    description:
      "Designed to improve spoken English, vocabulary, storytelling, reading fluency, and expressive communication in a supportive and confidence-building environment.",
    shortDescription:
      "Programs designed to improve spoken English, vocabulary, reading fluency, storytelling, and expressive communication.",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=700&h=440&fit=crop&q=80",
    imagePosition: "50% 35%",
    icon: "message" as IconName,
    tone: "blue" as Tone,
    tags: ["Spoken English", "Vocabulary Building", "Storytelling", "Self-Expression"],
    age: "Grade 1 - 8",
    schedule: "Mon - Sat",
  },
  {
    title: "Confidence & Leadership",
    description:
      "Helping children become expressive, confident, responsible, and independent learners through communication activities, teamwork, and leadership-building experiences.",
    shortDescription:
      "Helping children build confidence, teamwork, self-expression, leadership qualities, and a positive mindset.",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=700&h=440&fit=crop&q=80",
    imagePosition: "50% 25%",
    icon: "star" as IconName,
    tone: "orange" as Tone,
    tags: ["Public Speaking", "Confidence Building", "Teamwork", "Leadership Skills"],
    age: "Grade 1 - 8",
    schedule: "Weekly Activities",
  },
];

export const allPrograms = [
  ...featuredPrograms.map((program) => ({
    ...program,
    highlights:
      program.title === "Early Learning Foundations"
        ? ["Phonics & Early Reading", "Number Sense", "Fine Motor Skills", "Play & Explore"]
        : program.title === "Creative Concept Learning"
          ? ["Maths", "Science", "English", "Hindi"]
          : program.title === "Communication & Expression"
            ? ["Spoken English", "Reading & Writing", "Public Speaking", "Conversation Skills"]
            : ["Confidence Building", "Leadership Activities", "Goal Setting", "Mindset & Motivation"],
  })),
  {
    title: "Reading & Writing Development",
    description:
      "Encouraging reading habits, comprehension skills, vocabulary development, and creative writing abilities.",
    shortDescription:
      "Encouraging reading habits, comprehension skills, vocabulary development, and creative writing abilities.",
    image: "/kalam-assets/hd/program-confidence.jpg",
    imagePosition: "50% 50%",
    icon: "book" as IconName,
    tone: "blue" as Tone,
    tags: ["Reading", "Writing", "Vocabulary", "Grammar"],
    highlights: ["Reading Comprehension", "Vocabulary Building", "Grammar & Sentence Skills", "Creative Writing"],
    age: "Grade 1 - 8",
    schedule: "Mon - Sat",
  },
  {
    title: "Logical Thinking & Problem Solving",
    description:
      "Interactive activities and brain-engaging exercises that strengthen reasoning, critical thinking, and problem-solving skills.",
    shortDescription:
      "Interactive activities and brain-engaging exercises that strengthen reasoning, critical thinking, and problem-solving skills.",
    image: "/kalam-assets/hd/workshop-games.jpg",
    imagePosition: "50% 50%",
    icon: "brain" as IconName,
    tone: "purple" as Tone,
    tags: ["Reasoning", "Puzzles", "Critical Thinking", "Problem Solving"],
    highlights: ["Logical Reasoning", "Brain Games", "Puzzles & Activities", "Critical Thinking"],
    age: "Grade 1 - 8",
    schedule: "Weekly Activities",
  },
  {
    title: "Digital Learning Essentials",
    description:
      "Introducing children to safe, smart, and responsible digital learning practices and basic technology exposure.",
    shortDescription:
      "Introducing children to safe, smart, and responsible digital learning practices and basic technology exposure.",
    image: "/kalam-assets/hd/program-digital.jpg",
    imagePosition: "50% 50%",
    icon: "laptop" as IconName,
    tone: "blue" as Tone,
    tags: ["Computer Basics", "Digital Literacy", "Online Safety", "Smart Tools"],
    highlights: ["Basic Computer Skills", "Digital Literacy", "Online Safety", "Smart Learning Tools"],
    age: "Grade 3 - 8",
    schedule: "Weekly Activities",
  },
  {
    title: "Life Skills & Well-Being",
    description:
      "Supporting emotional growth, social skills, healthy habits, independence, and overall well-being in children.",
    shortDescription:
      "Supporting emotional growth, social skills, healthy habits, independence, and overall well-being in children.",
    image: "/hero-kids.png",
    imagePosition: "50% 58%",
    icon: "leaf" as IconName,
    tone: "green" as Tone,
    tags: ["Well-Being", "Social Skills", "Independence", "Healthy Habits"],
    highlights: ["Emotional Intelligence", "Social Skills", "Time Management", "Healthy Habits"],
    age: "Grade 1 - 8",
    schedule: "Weekly Activities",
  },
];

export const teachingApproach = [
  {
    title: "Conceptual Learning",
    description:
      "We focus on helping children truly understand concepts instead of memorizing answers, encouraging curiosity, logical thinking, and meaningful learning.",
    image: "/kalam-assets/hd/program-concept.jpg",
    imagePosition: "45% 50%",
    icon: "brain" as IconName,
    tone: "purple" as Tone,
  },
  {
    title: "Personalized Attention",
    description:
      "With our small-group learning approach and focused teacher guidance, every child receives the support, encouragement, and attention they need to grow confidently.",
    image: "/hero-kids.png",
    imagePosition: "50% 50%",
    icon: "users" as IconName,
    tone: "green" as Tone,
  },
  {
    title: "Creative Exploration",
    description:
      "Through workshops, activities, hands-on learning, and creative experiences, children discover imagination, confidence, self-expression, and a genuine love for learning.",
    image: "/kalam-assets/hd/workshop-painting.jpg",
    imagePosition: "50% 50%",
    icon: "palette" as IconName,
    tone: "orange" as Tone,
  },
];

export const weekendBenefits = [
  {
    title: "Hands-on Learning",
    description: "Learn by doing, creating, and exploring through joyful experiences.",
    icon: "lightbulb" as IconName,
    tone: "pink" as Tone,
  },
  {
    title: "Boosts Confidence",
    description: "Encourages self-expression, participation, and independent thinking.",
    icon: "star" as IconName,
    tone: "orange" as Tone,
  },
  {
    title: "Creative Exploration",
    description: "Inspires imagination, curiosity, and original ideas through engaging activities.",
    icon: "palette" as IconName,
    tone: "green" as Tone,
  },
  {
    title: "Fun & Skill Development",
    description: "A perfect blend of enjoyment, creativity, teamwork, and learning.",
    icon: "users" as IconName,
    tone: "purple" as Tone,
  },
];

export const experiences = [
  {
    title: "Painting & Drawing",
    description: "Explore colors, sketching and creative art techniques through guided fun sessions.",
    image: "/kalam-assets/hd/workshop-painting.jpg",
    icon: "palette" as IconName,
    tone: "pink" as Tone,
    category: "Workshop",
    date: "Every Saturday",
    time: "10:00 AM - 12:00 PM",
    age: "Ages 6 - 14",
  },
  {
    title: "Clay Art & Sculpting",
    description: "Shape imagination with clay and create fun sculptures while improving creativity.",
    image: "/kalam-assets/hd/workshop-clay.jpg",
    icon: "gift" as IconName,
    tone: "orange" as Tone,
    category: "Workshop",
    date: "Every Friday",
    time: "3:00 PM - 5:00 PM",
    age: "Ages 5 - 12",
  },
  {
    title: "Origami Adventures",
    description: "Learn paper folding techniques and create exciting shapes while improving patience and focus.",
    image: "/kalam-assets/hd/workshop-origami.jpg",
    icon: "leaf" as IconName,
    tone: "green" as Tone,
    category: "Workshop",
    date: "Every Tuesday",
    time: "4:00 PM - 5:30 PM",
    age: "Ages 6 - 13",
  },
  {
    title: "Games Evening",
    description: "Interactive board games, team challenges, and fun activities that encourage teamwork.",
    image: "/kalam-assets/hd/workshop-games.jpg",
    icon: "gamepad" as IconName,
    tone: "purple" as Tone,
    category: "Fun Experience",
    date: "Every Saturday",
    time: "5:00 PM - 7:00 PM",
    age: "Ages 6 - 14",
  },
  {
    title: "Movie Night",
    description: "Enjoy kid-friendly movie evenings with popcorn, laughter, discussions, and memories.",
    image: "/kalam-assets/hd/workshop-movie.jpg",
    icon: "film" as IconName,
    tone: "blue" as Tone,
    category: "Fun Experience",
    date: "Every Saturday",
    time: "6:30 PM - 9:00 PM",
    age: "Ages 6 - 14",
  },
  {
    title: "DIY Craft Studio",
    description: "Create, decorate and take home exciting DIY projects through hands-on craft experiences.",
    image: "/kalam-assets/hd/workshop-diy.jpg",
    icon: "scissors" as IconName,
    tone: "pink" as Tone,
    category: "Workshop",
    date: "Every Sunday",
    time: "11:00 AM - 1:00 PM",
    age: "Ages 6 - 13",
  },
  {
    title: "Storytelling Club",
    description: "Interactive storytelling to boost imagination, expression, confidence and reading interest.",
    image: "/kalam-assets/hd/workshop-storytelling.jpg",
    icon: "book" as IconName,
    tone: "purple" as Tone,
    category: "Workshop",
    date: "Every Saturday",
    time: "4:00 PM - 5:00 PM",
    age: "Ages 6 - 12",
  },
  {
    title: "Science Fun Lab",
    description: "Hands-on experiments and fun science activities that spark curiosity and observation.",
    image: "/kalam-assets/hd/workshop-science.jpg",
    icon: "flask" as IconName,
    tone: "green" as Tone,
    category: "Workshop",
    date: "Every Sunday",
    time: "3:00 PM - 5:00 PM",
    age: "Ages 7 - 14",
  },
  {
    title: "Dance & Movement",
    description: "Fun dance sessions to build energy, rhythm, expression and confidence.",
    image: "/kalam-assets/hd/workshop-dance.jpg",
    icon: "party" as IconName,
    tone: "pink" as Tone,
    category: "Fun Experience",
    date: "Every Friday",
    time: "4:30 PM - 5:30 PM",
    age: "Ages 6 - 14",
  },
  {
    title: "Festival Craft Day",
    description: "Creative crafts and activities themed around festivals, colors, joy and togetherness.",
    image: "/kalam-assets/hd/workshop-festival.jpg",
    icon: "star" as IconName,
    tone: "yellow" as Tone,
    category: "Celebration",
    date: "Upcoming: 12 Oct, 2024",
    time: "11:00 AM - 1:00 PM",
    age: "Ages 6 - 14",
  },
  {
    title: "Pizza & Pajama Night",
    description: "Pizza, games, movies and memories with friends in a safe, joyful environment.",
    image: "/kalam-assets/hd/workshop-pizza.jpg",
    icon: "pizza" as IconName,
    tone: "blue" as Tone,
    category: "Special Event",
    date: "Upcoming: 19 Oct, 2024",
    time: "6:00 PM - 9:00 PM",
    age: "Ages 6 - 14",
  },
  {
    title: "Talent Showcase",
    description: "A stage to express, perform and shine with confidence in front of a warm audience.",
    image: "/kalam-assets/hd/workshop-talent.jpg",
    icon: "mic" as IconName,
    tone: "purple" as Tone,
    category: "Special Event",
    date: "Upcoming: 26 Oct, 2024",
    time: "5:00 PM - 7:00 PM",
    age: "Ages 6 - 15",
  },
];

export const weekendHighlights = [
  {
    title: "Small Group Sessions",
    description: "Personalized attention and comfortable learning experiences for every child.",
    icon: "users" as IconName,
    tone: "green" as Tone,
  },
  {
    title: "Safe & Supportive Environment",
    description: "A warm, welcoming space where children feel happy, confident, and encouraged.",
    icon: "shield" as IconName,
    tone: "purple" as Tone,
  },
  {
    title: "All Materials Provided",
    description: "Children can simply walk in, explore, create, and enjoy every session.",
    icon: "gift" as IconName,
    tone: "yellow" as Tone,
  },
  {
    title: "Fun Meets Learning",
    description: "Every activity is thoughtfully designed to inspire creativity and joyful learning.",
    icon: "star" as IconName,
    tone: "blue" as Tone,
  },
];

export const aboutIntro = [
  '"Kalam" in Hindi means Pen - a symbol of learning, creativity, expression, and the power to shape the future.',
  '"Kalam" in Tamil means a space where people come together - a place for connection, growth, learning, and shared experiences.',
];

export const aboutParagraphs = [
  "At Kalam Study Hall, we bring both meanings to life by creating a warm and inspiring environment where children come together to learn with confidence, creativity, curiosity, and joy.",
  "Inspired by the values and vision of Dr. A.P.J. Abdul Kalam, we believe every child has unique potential and learns best when given the right guidance, encouragement, and environment.",
  "Kalam Study Hall is a thoughtfully designed after-school enrichment space where learning goes beyond memorization and routine tuition methods. Through small-group learning, personalized attention, activity-based teaching, and meaningful enrichment experiences, we help children strengthen academic foundations while also nurturing communication, creativity, confidence, leadership, and independent thinking.",
  "From Pre-K to Grade 8, our programs are designed to make learning engaging, meaningful, and enjoyable through creative teaching methods that encourage children to explore, understand, communicate, and express themselves freely.",
  "Beyond academics, Kalam also offers exciting weekend experiences including creative workshops, storytelling, games, movie evenings, DIY activities, and hands-on learning sessions that help children discover new interests, friendships, skills, and confidence.",
  "At Kalam, we are building more than a learning center - we are creating a joyful community where children feel safe, inspired, encouraged, and excited to grow every day.",
];

export const missionVision = [
  {
    title: "Our Mission",
    description:
      "Our mission is to create a nurturing and inspiring learning environment where children develop strong conceptual understanding, communication skills, creativity, confidence, and a lifelong love for learning. Through personalized guidance, activity-based learning, and meaningful enrichment experiences, we aim to support every child's academic, social, emotional, and creative growth.",
    icon: "target" as IconName,
    tone: "purple" as Tone,
  },
  {
    title: "Our Vision",
    description:
      "Our vision is to build a generation of confident, curious, compassionate, and independent learners who are prepared not only for academic success, but also for life beyond classrooms. We aspire to create a joyful learning community where children feel empowered to think creatively, express themselves freely, discover their strengths, and shape their own future with confidence.",
    icon: "eye" as IconName,
    tone: "orange" as Tone,
  },
];

export const parentReasons = [
  {
    title: "Personalized Attention",
    description: "Small-group learning with focused teacher support and meaningful interaction.",
    icon: "users" as IconName,
    tone: "purple" as Tone,
  },
  {
    title: "Learning Beyond Memorization",
    description: "Concept-based teaching methods that encourage understanding, exploration, and independent thinking.",
    icon: "book" as IconName,
    tone: "pink" as Tone,
  },
  {
    title: "Holistic Child Development",
    description: "Equal focus on academics, communication, creativity, confidence, and life skills.",
    icon: "leaf" as IconName,
    tone: "green" as Tone,
  },
  {
    title: "Joyful Learning Environment",
    description: "A warm, child-friendly space where learning feels positive, engaging, and inspiring.",
    icon: "home" as IconName,
    tone: "yellow" as Tone,
  },
  {
    title: "Creative Weekend Experiences",
    description: "Workshops, storytelling, games, movie evenings, DIY activities, and hands-on sessions.",
    icon: "palette" as IconName,
    tone: "pink" as Tone,
  },
  {
    title: "Inspired by Dr. A.P.J. Abdul Kalam",
    description: "Rooted in the belief that every child can dream, learn, create, and succeed with guidance.",
    icon: "smile" as IconName,
    tone: "blue" as Tone,
  },
];

export const coreValues = [
  {
    title: "Learning Beyond Memorization",
    description:
      "At Kalam Study Hall, we focus on helping children understand concepts through creative and activity-based learning methods instead of rote memorization. We encourage curiosity, questioning, and meaningful understanding.",
    icon: "brain" as IconName,
    tone: "purple" as Tone,
  },
  {
    title: "Personalized Small-Group Learning",
    description:
      "With our small-group approach and focused teacher guidance, every child receives individual attention, support, encouragement, and the confidence to learn at their own pace.",
    icon: "users" as IconName,
    tone: "green" as Tone,
  },
  {
    title: "Communication & Confidence Building",
    description:
      "We help children strengthen communication skills, self-expression, leadership qualities, and the confidence to participate, explore ideas, and express themselves freely.",
    icon: "mic" as IconName,
    tone: "pink" as Tone,
  },
  {
    title: "Holistic Child Development",
    description:
      "Beyond academics, Kalam offers creative workshops, games, storytelling, movie evenings, DIY activities, and hands-on experiences that nurture creativity, friendships, confidence, and life skills.",
    icon: "palette" as IconName,
    tone: "orange" as Tone,
  },
];

export const footerProgramLinks = [
  "Early Learning Foundations",
  "Creative Concept Learning",
  "Communication & Expression",
  "Confidence & Leadership",
  "Weekend Enrichment Programs",
];

export const footerExperienceLinks = [
  "Painting & Drawing",
  "Clay Art & Sculpting",
  "Origami Adventures",
  "Games Evening",
  "Movie Night",
  "DIY Craft Studio",
];

export const programDifference = [
  { title: "Small Batch Learning", icon: "users" as IconName, tone: "purple" as Tone },
  { title: "Personalized Attention", icon: "star" as IconName, tone: "pink" as Tone },
  { title: "Activity-Based Approach", icon: "palette" as IconName, tone: "yellow" as Tone },
  { title: "Safe & Nurturing Environment", icon: "shield" as IconName, tone: "green" as Tone },
  { title: "Holistic Child Development", icon: "smile" as IconName, tone: "blue" as Tone },
];
