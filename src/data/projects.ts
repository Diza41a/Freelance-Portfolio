/**
 * @note Images should respect 16:9 aspect ratio.
 */
export type Media = {
  type: 'imageUrl' | 'youtubeUrl';
  alt?: string;
  source: string;
};

// WIP
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
    keyFeatures: ['Responsive design', 'Interactive project showcase', 'Contact form integration'],
    servicesProvided: ['Web Development', 'UI/UX Design', 'SEO Optimization'],
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
    title: 'E-commerce Platform',
    typeTitle: 'Shopify online store',
    subtitle: 'An online store for selling products and services.',
    description:
      'This project involved developing a full-fledged e-commerce platform that allows users to browse, search, and purchase products online.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
    keyFeatures: [
      'User authentication and authorization',
      'Product search and filtering',
      'Shopping cart functionality',
    ],
    servicesProvided: ['Web Development', 'Database Design/Management', 'API Development'],
    challenges: [
      'Implementing secure user authentication and authorization.',
      'Ensuring smooth performance with a large product database.',
    ],
    solutions: [
      'Used JWT for secure user authentication and role-based access control.',
      'Optimized database queries and used caching techniques to improve performance.',
    ],
    links: [{ label: 'Live Demo', path: '/projects/ecommerce-platform' }],
    media: {
      cover: {
        type: 'imageUrl',
        source:
          'https://cdn.prod.website-files.com/5b5729421aca332c60585f78/63f5fa23da820b87c87958be_61ba503872080311dde1ea56_long-form-landing-page-examples.png',
      },
      media1: {
        type: 'imageUrl',
        source:
          'https://cdn.prod.website-files.com/5b5729421aca332c60585f78/63f5fa23da820b87c87958be_61ba503872080311dde1ea56_long-form-landing-page-examples.png',
      },
      media2: {
        type: 'imageUrl',
        source:
          'https://cdn.prod.website-files.com/5b5729421aca332c60585f78/63f5fa23da820b87c87958be_61ba503872080311dde1ea56_long-form-landing-page-examples.png',
      },
    },
  },
  {
    title: 'Social Media App',
    typeTitle: 'Comprehensive mobile application',
    subtitle: 'A platform for connecting with friends and sharing content.',
    description:
      'Ultricies integer quis auctor elit sed vulputate mi sit. Aliquam sem et tortor consequat id porta nibh. Id cursus metus aliquam eleifend. Cursus sit amet dictum sit amet justo donec enim diam. Feugiat nisl pretium fusce id velit ut tortor. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Ultricies integer quis auctor elit sed vulputate mi sit. Aliquam sem et tortor consequat id porta nibh. Id cursus metus aliquam eleifend. Cursus sit amet dictum sit amet justo donec enim diam. Feugiat nisl pretium fusce id velit ut tortor. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Ultricies integer quis auctor elit sed vulputate mi sit. Aliquam sem et tortor consequat id porta nibh. Id cursus metus aliquam eleifend. Cursus sit amet dictum sit amet justo donec enim diam. Feugiat nisl pretium fusce id velit ut tortor. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Ultricies integer quis auctor elit sed vulputate mi sit. Aliquam sem et tortor consequat id porta nibh. Id cursus metus aliquam eleifend.',
    technologies: ['React Native', 'Firebase', 'GraphQL'],
    keyFeatures: [
      'User profiles and friend connections',
      'Real-time chat functionality',
      'Post sharing and commenting',
    ],
    servicesProvided: ['Mobile App Development', 'Backend Development', 'UI/UX Design'],
    challenges: [
      'Ensuring real-time communication between users.',
      'Designing an intuitive user interface for mobile devices.',
    ],
    solutions: [
      'Used Firebase for real-time database and authentication services.',
      'Implemented a user-friendly UI using React Native components.',
    ],
    links: [{ label: 'Live Demo', path: '/projects/social-media-app' }],
    media: {
      cover: {
        type: 'imageUrl',
        source:
          'https://images.unsplash.com/photo-1699891730676-037bed3c1bed?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D',
      },
      media1: {
        type: 'imageUrl',
        source:
          'https://images.unsplash.com/photo-1699891730676-037bed3c1bed?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D',
      },
      media2: {
        type: 'imageUrl',
        source:
          'https://images.unsplash.com/photo-1699891730676-037bed3c1bed?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D',
      },
    },
    feedback: {
      name: 'Jane Smith',
      position: 'Product Manager',
      review:
        'The social media app has transformed the way we connect with our audience. The user experience is seamless and engaging.',
    },
  },
];
