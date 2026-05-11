export interface Workshop {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  ageGroup: string;
  image: string;
  category: string;
  color: string;
  spotsLeft: number;
}

export const workshops: Workshop[] = [
  {
    id: "painting-watercolors",
    title: "Watercolor Painting",
    description:
      "Discover the magic of watercolors! Kids will learn blending, wet-on-wet techniques, and create their own masterpiece to take home.",
    date: "Every Saturday",
    time: "10:00 AM – 12:00 PM",
    ageGroup: "6-12 years",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop",
    category: "Art",
    color: "sky",
    spotsLeft: 5,
  },
  {
    id: "crochet-basics",
    title: "Crochet for Beginners",
    description:
      "Learn the art of crochet from scratch! Make cute amigurumi toys and colorful coasters in a fun, hands-on workshop.",
    date: "Every Sunday",
    time: "2:00 PM – 4:00 PM",
    ageGroup: "8-14 years",
    image:
      "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=600&h=400&fit=crop",
    category: "Craft",
    color: "mint",
    spotsLeft: 3,
  },
  {
    id: "pencil-drawing",
    title: "Pencil Sketching",
    description:
      "Master the fundamentals of pencil sketching — shading, perspective, and proportions — through guided exercises and creative projects.",
    date: "Every Wednesday",
    time: "4:00 PM – 5:30 PM",
    ageGroup: "7-15 years",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop",
    category: "Art",
    color: "lavender",
    spotsLeft: 8,
  },
  {
    id: "clay-modeling",
    title: "Clay Art & Sculpting",
    description:
      "Get your hands dirty with clay! Kids sculpt animals, pots, and creative figures while building fine motor skills.",
    date: "Every Friday",
    time: "3:00 PM – 5:00 PM",
    ageGroup: "5-12 years",
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=400&fit=crop",
    category: "Craft",
    color: "coral",
    spotsLeft: 6,
  },
  {
    id: "origami-fun",
    title: "Origami Adventures",
    description:
      "Fold your way to fun! Learn to make animals, flowers, and 3D shapes using the ancient Japanese art of paper folding.",
    date: "Every Tuesday",
    time: "4:30 PM – 6:00 PM",
    ageGroup: "6-13 years",
    image:
      "https://images.unsplash.com/photo-1604076913837-52ab5f31e3b8?w=600&h=400&fit=crop",
    category: "Craft",
    color: "yellow",
    spotsLeft: 10,
  },
  {
    id: "calligraphy-lettering",
    title: "Creative Calligraphy",
    description:
      "Explore beautiful lettering styles with brush pens and markers. Create greeting cards and wall art in this expressive workshop.",
    date: "Every Thursday",
    time: "5:00 PM – 6:30 PM",
    ageGroup: "8-16 years",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
    category: "Art",
    color: "sky",
    spotsLeft: 4,
  },
];
