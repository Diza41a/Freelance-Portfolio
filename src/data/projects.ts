/**
 * @note Images should respect 16:9 aspect ratio.
 */
export type Media = {
  type: 'imageUrl' | 'youtubeUrl';
  alt?: string;
  source: string;
};

// TODO: WIP
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
    subtitle: 'A web portfolio and photo blog for a graphic designer.',
    description: `A portfolio website requested by the visual designer client - Nick Abramov. The client requested several core
      features, including Project(s), FAQs, and Contact pages, as well as an admin dashboard for the client to
      manually perform create/update, as well as other CRUD operations, on projects and FAQs. The client provided a
      complete Figma design spec.`,
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
  },
  {
    title: 'OfKors European Bakery Website',
    typeTitle: 'Dynamic bakery website',
    subtitle: 'Business website for a local Ukrainian bakery.',
    description: `
      A business website for a local Ukrainian bakery. `,
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
      'User authentication and authorization',
      'Product search and filtering',
      'Shopping cart functionality',
    ],
    servicesProvided: ['Full Stack Web Development'],
    challenges: [
      'Implementing secure user authentication and authorization.',
      'Ensuring smooth performance with a large product database.',
    ],
    solutions: [
      'Used JWT for secure user authentication and role-based access control.',
      'Optimized database queries and used caching techniques to improve performance.',
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
