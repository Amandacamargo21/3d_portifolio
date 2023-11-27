import {
  mobile,
  backend,
  creator,
  web,
  all,
  L,
  link,
  loja,
  carol,
  teilor,
  netflix,
  carolphoto,
  vanessaphoto,
  publicacoesonline_logo,
} from '../assets'

export const navLinks = [
  {
    id: 'language',
    title: 'Language',
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Frontend Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Designer',
    icon: creator,
  },
]

const experiences = [
  {
    title: 'Fullstack developer',
    company_name: 'Publicações Online',
    icon: publicacoesonline_logo,
    iconBg: '#383E56',
    date: 'July 2023 - Present',
    points: [
      'Collaborating with cross-functional teams, I develop effective software solutions in Php, Javascript, Html, and CSS.',
      'I conduct tests to ensure software quality and continuously monitor system integrity',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Implementing new features, I also maintain code standards for scalability and maintainability while designing scalable architectures for high user volumes',
    ],
  },
  {
    title: 'Fullstack developer',
    company_name: 'Allstrategy',
    icon: all,
    iconBg: '#383E56',
    date: 'July 2022 - May 2023',
    points: [
      'Developing and maintaining web applications using PHP, Zend, HTML, CSS, Javascript, JQuery, and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Frontend Freelancer',
    company_name: 'SevenTech',
    icon: L,
    iconBg: '#E6DEDD',
    date: 'March 2022 - Present',
    points: [
      'Developing responsive layouts using technologies such as HTML, CSS, and JavaScript',
      'Implementing animations and visual effects using libraries like jQuery, GSAP, and CSS3',
      'Integrating with third-party APIs to obtain dynamic data and content.',
      'Usability and compatibility testing across different browsers and devices.',
      'Optimizing site or application performance using techniques such as file minification and asynchronous loading.',
      'Researching and implementing new technologies and trends to improve user experience and development efficiency.',
      'As a freelancer, I am also responsible for managing my own time and projects, communicating with clients, and ensuring the delivery of high-quality results within the established deadlines.',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      'Amanda successfully captured the essence of my brand and delivered something beyond my expectations. It was truly an amazing experience.',
    name: 'Caroline Castro',
    designation: 'CEO',
    company: 'Carol Castro MakeUp',
    image: carolphoto,
  },
  {
    testimonial:
      "After Amanda optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Vanessa Teilor',
    designation: 'CTO',
    company: 'Teilor advocacia',
    image: vanessaphoto,
  },
]

const projects = [
  {
    name: 'Carol Castro MakeUp',
    description:
      'The website is designed with responsiveness in mind, ensuring a seamless experience across different devices and screen sizes. The visual design not only captures the essence of the clients brand identity but also ensures a consistent and engaging experience for visitors. The project showcases a strong commitment to delivering a high-quality, user-centric website that highlights the makeup artists services and expertise. With a combination of HTML, CSS, and JavaScript libraries, the site incorporates smooth scrolling and captivating image sliders.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'Javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: carol,
    source_code_link:
      'https://github.com/Amandacamargo21/Carol-Castro-MakeUp.git',
    project_link: 'https://carol-castro-make-up.vercel.app/',
  },
  {
    name: 'Teilor Advocacia',
    description:
      'This is responsive website designed to provide a user-friendly experience. With a modern and intuitive design, the site adapts to different devices, ensuring its functionality on all devices. It features clear navigation, relevant content, attractive design, and interactive features. Additionally, the site provides information about the companys services, areas of expertise, team of professionals, and location. Responsiveness and user experience are prioritized in this project, aiming to deliver a positive experience for users interested in the services',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'JQuery',
        color: 'pink-text-gradient',
      },
      {
        name: 'Javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: teilor,
    source_code_link: 'https://github.com/Amandacamargo21/Teilor-Advocacia.git',
    project_link: 'https://teilor-advocacia.vercel.app/',
  },
  {
    name: 'Netlix clone',
    description:
      'NetflixClone is a React-based project that replicates the popular streaming platform Netflix. Developed for learning purposes, it utilizes the "Movie Database" API to provide a wide range of movies and TV shows. The website is designed to be responsive, ensuring a seamless user experience across different devices. Users can create profiles, personalize their preferences, and receive tailored recommendations. NetflixClone demonstrates React skills and showcases the creation of a modern and interactive movie streaming website.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'ApiMovieDatabase',
        color: 'blue-text-gradient',
      },
      {
        name: 'HTML',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: netflix,
    source_code_link: 'https://github.com/Amandacamargo21/Netflix-Clone.git',
    project_link: 'https://netflix-clone-flame-ten.vercel.app/',
  },
  {
    name: 'Cara Store',
    description:
      'This responsive app showcases a visually appealing website design with a stylish header, user-friendly navigation, and adaptability. Key features like free shipping, online ordering, promotions, and 24/7 support are highlighted with icons and descriptions. It presents featured products with images, descriptions, ratings, and prices, allowing users to add items to their cart. Catchy banners promote special offers. Overall, it provides a delightful user experience, engaging users to explore and shop on the website.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS/SCSS',
        color: 'green-text-gradient',
      },
      {
        name: 'Javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: loja,
    source_code_link:
      'https://github.com/Amandacamargo21/LojaOnline--Responsivo-.git',
    project_link: 'https://loja-online-9wuw.vercel.app/',
  },
]

export { services, experiences, testimonials, projects }
