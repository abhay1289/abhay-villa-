const cdn = "https://framerusercontent.com";

function image(file: string, width: number, height: number) {
  return `${cdn}/images/${file}?width=${width}&height=${height}`;
}

export const assets = {
  about: [
    image("Vkm2yeCJfScQD4Jj23C2k2rsgI.png", 1222, 1322),
    image("p64iMLe5jcNIqFf4ZB9AyisKE.png", 800, 864),
    image("PwDfNNHd8iWihZ4nAhHjFOz1c.png", 800, 864),
  ],
  services: [
    image("q1QVDvGGrvtCU08ob2f0pNVv5w.png", 830, 554),
    image("h97rLdIZ2Gt3yRDPuax4oiOuRis.png", 562, 754),
  ],
  process: image("zErHDAwZBokw2K3gTDN2JJ7AHTg.png", 1600, 575),
  benefits: image("iEIMNksoZDTuqraO9Nevlw1ex3w.jpg", 1920, 1280),
  projects: [
    image("uxptAxTayxEdVCD8X29quUeH0k.png", 800, 1096),
    image("NW2TyCD0alUSNUIpDj66kCRULFE.jpg", 1200, 800),
    image("hfWT4Ek4w9OY5NJgUVb1TKzpIB4.png", 800, 948),
  ],
  blog: [
    image("grEadpfLCtJuGvvzwAIkqNDums.png", 800, 656),
    image("95ZFokiZ1nQ4jRwA8TEXcbxY5k0.png", 800, 450),
    image("CqrL1UGjzL5jNH0IYJ9WgrGDKSw.png", 800, 533),
  ],
  cta: image("MzH2OjD3OZrQ0gDlvUcjnxDDKS4.png", 1920, 782),
  avatars: [
    image("jOeoMXp95jb2T1dgD2CuoYL8BA.png", 88, 88),
    image("SuEHwM75aUmKqztfPeOGStl4s.png", 88, 88),
    image("JSUpFpB0yKxXBfKukHeUku3oto.png", 88, 88),
  ],
  videos: [
    {
      src: `${cdn}/assets/0nheQPz3XFC9jrDGRIM0Ebsx9a4.mp4`,
      poster: image("Caz95Vn4UqrcWkm85yeAcMlXGp8.png", 888, 544),
    },
    {
      src: `${cdn}/assets/p4FPUDbsAR3As0YMso1WWxQ.mp4`,
      poster: image("xGQrPGqUK3tXn40CtqMOiiJJz8.png", 888, 544),
    },
    {
      src: `${cdn}/assets/eiKxby194atBopBFzPrPlHoe1G8.mp4`,
      poster: image("c5pfuju1IPprKzfNnLVK9Hi1h0.png", 888, 544),
    },
  ],
};

export const nav = {
  pages: [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
  phone: "+1 271 281 9795",
  phoneHref: "tel:+12712819795",
  footer: [
    {
      title: "Pages",
      links: [
        { label: "Home", href: "#top" },
        { label: "About Us", href: "#about" },
        { label: "Services", href: "#services" },
      ],
    },
    {
      title: "Resource",
      links: [
        { label: "Blog", href: "#blog" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Custom home design", href: "#services" },
        { label: "Modular home building", href: "#services" },
        { label: "Tiny home building", href: "#services" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms & Conditions", href: "#top" },
        { label: "Privacy Policy", href: "#top" },
        { label: "404", href: "#top" },
      ],
    },
  ],
};

export const aboutCards = [
  {
    title: "Thoughtful design",
    copy: "Innovative designs that transform every room into a cozy, practical, and inviting living space.",
    image: assets.about[0],
  },
  {
    title: "Quality craftsmanship",
    copy: "Built with quality materials and careful attention to every detail, from the first plan to the final finish.",
    image: assets.about[1],
  },
  {
    title: "Built around you",
    copy: "Every home is designed around your lifestyle, needs, and vision for better everyday living.",
    image: assets.about[2],
  },
];

export const services = [
  "Custom home design",
  "Modular home building",
  "Tiny home building",
  "Interior space planning",
  "Home customization",
  "Home delivery setup",
  "Tiny home design",
  "Smart space planning",
  "Exterior home design",
];

export const processSteps = [
  {
    n: "01",
    title: "Smart design",
    copy: "Make the most of every space with practical and thoughtful layouts.",
  },
  {
    n: "02",
    title: "Quality materials",
    copy: "We use reliable materials to create comfortable and lasting homes.",
  },
  {
    n: "03",
    title: "Efficient building",
    copy: "A streamlined building process helps bring your home to life faster.",
  },
  {
    n: "04",
    title: "Flexible living",
    copy: "Create a home that fits your lifestyle, space, and everyday needs.",
  },
];

export const benefits = [
  {
    title: "Smart use of space",
    copy: "Every detail is planned to give you more comfort, better function, and usable space, while making everyday living simple and enjoyable.",
  },
  {
    title: "Thoughtful Design",
    copy: "Every element is carefully considered to create a space that feels comfortable, practical, and perfectly suited to everyday living.",
  },
  {
    title: "Built for Everyday Living",
    copy: "Smart layouts and functional details come together to make daily life easier, more comfortable, and enjoyable.",
  },
];

export const projects = [
  {
    tag: "The haven",
    title: "Peaceful haven home",
    copy: "A modern modular home designed for comfortable everyday living.",
    image: assets.projects[0],
  },
  {
    tag: "Modular home",
    title: "Custom home design",
    copy: "We design and build modular and tiny homes with smart spaces.",
    image: assets.projects[1],
  },
  {
    tag: "Tiny home",
    title: "Serene Living Space",
    copy: "Thoughtful tiny homes designed to make the most of every space.",
    image: assets.projects[2],
  },
];

export const testimonials = [
  {
    quote:
      "Working with Modora has transformed our vision into reality with ease and confidence, thanks to their transparent updates.",
    name: "Jack Wyatt",
    role: "Homeowner",
    avatar: assets.avatars[0],
    video: assets.videos[0],
  },
  {
    quote:
      "From the initial plan to the finished home, everything was handled with exceptional care. We now have a comfortable space.",
    name: "Emily Parker",
    role: "Homeowner",
    avatar: assets.avatars[1],
    video: assets.videos[1],
  },
  {
    quote:
      "We’re so happy with our new modular home. The design is beautiful, the craftsmanship is impressive, and the entire building.",
    name: "Michael Brooks",
    role: "Homeowner",
    avatar: assets.avatars[2],
    video: assets.videos[2],
  },
];

export const posts = [
  {
    date: "Aug 12, 2026",
    dateTime: "2026-08-12",
    title: "How to Make the Most of a Smaller Space",
    copy: "Explore the essential details that make a tiny home feel open, practical, and comfortable.",
    image: assets.blog[0],
  },
  {
    date: "Aug 8, 2026",
    dateTime: "2026-08-08",
    title: "Choosing the Perfect Floor Plan",
    copy: "Discover simple tips for designing a cozy tiny home with smart layouts and abundant light.",
    image: assets.blog[1],
  },
  {
    date: "Aug 8, 2026",
    dateTime: "2026-08-08",
    title: "A Guide to Choosing Your Home",
    copy: "Explore simple tips to create a cozy tiny home with smart layouts and abundant natural light.",
    image: assets.blog[2],
  },
];

export const guarantees = [
  {
    title: "Certified & guaranteed",
    copy: "Expertly trained teams dedicated to caring for your home.",
  },
  {
    title: "Over 20 years serving Modora",
    copy: "Trusted expertise on every roof style throughout the borough.",
  },
  {
    title: "Guaranteed written warranty",
    copy: "Every project guaranteed in writing no hidden clauses, no hassle.",
  },
];
