/**
 * @note Images should respect 16:9 aspect ratio.
 */
export type Media = {
  type: 'imageUrl' | 'youtubeUrl';
  alt?: string;
  source: string;
};

interface Project {
  title: string;
  typeTitle: string;
  subtitle: string;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  servicesProvided: string[];
  challenges: string[];
  solutions: string[];
  links?: { label: string; path: string }[];
  images?: string[];
  media: {
    cover: Media;
    media1: Media;
    media2: Media;
  };
  feedback?: {
    name: string;
    position: string;
    review: string;
  };
}

export const PROJECTS: Project[] = [
  {
    title: 'Design Portfolio for Nick Abramov',
    typeTitle: 'Personal portfolio website',
    subtitle: 'A web portfolio and a photo blog for a graphic designer.',
    description: `A portfolio website requested by a visual designer client - Nick Abramov. The client requested several core
      features, including Projects, Photo Blog, FAQs, and Contact pages, as well as an admin dashboard to
      manually and intuitively manage their content. The client provided a Figma design spec.`,
    technologies: [
      'React',
      'React Query',
      'TypeScript',
      'Nest.js',
      'MongoDB',
      'Styled Components',
      'Figma',
    ],
    keyFeatures: [
      "Responsive and vibrant portfolio showcasing Nick's design projects, personal photography, and talent.",
      'Dynamic content management via a custom admin dashboard.',
      'SEO optimization for better search engine visibility.',
    ],
    servicesProvided: ['Full Stack Web Development', 'SEO Optimization'],
    challenges: [
      "Creating a responsive and dynamic web application that aligns with the client's design specification.",
      'Implementing an admin dashboard to allow Nick to manage dynamic content (projects, FAQs, photo blog) easily.',
      'Ensuring the website is SEO-optimized and performs well on all devices.',
    ],
    solutions: [
      "Utilizing React, Styled Components, and GSAP (scroll-triggered animations), delivered a responsive web application matching the client's Figma design closely.",
      'Created a custom admin dashboard using React, Nest.js, and MongoDB, allowing Nick to manage his dynamic content easily.',
      'Implemented SEO best practices, including meta tags and alt text for images (both static and dynamic), to improve search engine visibility.',
    ],
    links: [{ label: 'View Site', path: 'https://nickabramov.com/' }],
    media: {
      cover: {
        type: 'imageUrl',
        source: 'https://i.ibb.co/7JYPHn0p/Screenshot-2025-04-09-at-1-05-07-PM.png',
      },
      media1: {
        type: 'imageUrl',
        source: 'https://i.ibb.co/0px96jYm/Untitled-design.png',
      },
      media2: {
        type: 'youtubeUrl',
        source: 'https://www.youtube.com/embed/uJ6Sh85oLYc?si=57-Xusp78hutanBZ',
      },
    },
    feedback: {
      name: 'Nick Abramov',
      position: 'Graphic Designer',
      review: `David did an amazing job bringing my portfolio website to life. He took my Figma designs and transformed them into a sleek, fully functional site that includes everything I needed: a home page showcasing all my projects, a photo blog, an FAQ page, and a user-friendly custom admin dashboard. I’m absolutely thrilled with the final result and the positive reactions I receive from people when I show them the site.`,
    },
  },
  {
    title: 'OfKors European Bakery Website',
    typeTitle: 'Bakery business website',
    subtitle: 'Business website for a local Ukrainian bakery.',
    description: `
      A business website for a local Ukrainian bakery. Inna needed several core pages, including Menu, Gallery, About us, and others, to showcase her produce,
      services, and overview of the bakery itself. As a Ukrainian business owner, Inna wanted to ensure that the website was accessible to her Slavic clients as well,
      so I've implemented a Ukrainian and Russian language support using ReactI18n library. The dynamic content such as menu items and hours of operation have been
      exposed through a private API, allowing Inna to update the information easily, should the need arise.`,
    technologies: [
      'React',
      'ReactI18',
      'TypeScript',
      'Nest.js',
      'MongoDB',
      'Styled Components',
      'Figma',
    ],
    keyFeatures: [
      "Responsive and vibrant website showcasing the bakery's products, services, and overview.",
      'Multi-lingual support for Ukrainian and Russian-speaking clients.',
      'Dynamic content management via a custom API.',
    ],
    servicesProvided: ['Full Stack Web Development'],
    challenges: [
      'Handpicking and implementing responsive web design that aligns with the bakery’s brand and aesthetic.',
      'Researching the core features needed for bakery business overview and promotion.',
      'Integrating a multi-lingual support for Ukrainian and Russian-speaking clients.',
      'Creating a custom API and database to manage dynamic content on the website.',
    ],
    solutions: [
      'Utilizing React, Styled Components, and GSAP (scroll-triggered animations), delivered a responsive web application matching the bakery’s brand and aesthetic.',
      'Implemented a custom API using Nest.js and MongoDB to manage dynamic content such as menu items and hours of operation.',
      'Integrated ReactI18n library for multi-lingual support, allowing the website to be accessible to both Ukrainian and Russian-speaking clients.',
    ],
    links: [{ label: 'View Site', path: 'https://www.ofkorseurobakery.com/' }],
    media: {
      cover: {
        type: 'imageUrl',
        source: 'https://i.ibb.co/CsMBxxFG/Screenshot-2025-04-12-at-10-29-53-PM.png',
      },
      media1: {
        type: 'imageUrl',
        source: 'https://i.ibb.co/KjJ2317t/Untitled-design.png',
      },
      media2: {
        type: 'imageUrl',
        source: 'https://i.ibb.co/B2Bxw3HD/Screenshot-2025-04-12-at-11-02-06-PM.png',
      },
    },
  },
];
