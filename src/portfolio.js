/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sai's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Sai Venkat Portfolio",
    type: "website",
    url: "https://github.com/sai-potala",
  },
};

//Home Page
const greeting = {
  title: "Sai Venkat",
  logo_name: "Sai Venkat",
  nickname: "",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/14e2iHLmLw9NooP7cBDwwbRJ8z8Hud5DS/view?usp=drive_link",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/sai-potala",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/sai-potala",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sai-p-b8719496/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:bhaskarpotala@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/saiii_397/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Web Developer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developed and maintained mission-critical responsive web applications for insurance clients using React, Next.js, and Material UI, handling approximately 4 million requests annually",
        "⚡ Employed modern front-end technologies such as React Hooks and Context API to enhance performance and maintainability of web applications",
        "⚡ Utilized server-side rendering (SSR) capabilities of Next.js to optimize initial page load times and improve search engine optimization (SEO)",
        "⚡ Implemented stringent security measures, including data encryption and user authentication, to ensure compliance with industry regulations and protect sensitive customer information",
        "⚡ Collaborated closely with cross-functional teams, including product managers, UX designers, and quality assurance engineers, to deliver high-quality software releases on schedule",
        "⚡ Actively participated in agile development methodologies, attending sprint planning sessions and providing accurate time estimates to meet project milestones and deliverables",
        "⚡ Provided technical support and troubleshooting expertise to internal and external stakeholders, ensuring smooth operation and user satisfaction with application",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#F7DF1E",
            color: "#000000",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:next-dot-js",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Material-UI",
          fontAwesomeClassname: "simple-icons:material-ui",
          style: {
            color: "#0081CB",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "GMR Institute of Technology",
      subtitle: "Bachelor of Technology: Mechanical Engineering",
      logo_path: "gmrit_logo.png",
      alt_name: "GMRIT",
      duration: "May 2010 - May 2014",
      descriptions: ["⚡ Achieved a percentage of 75.75."],
      website_link: "https://gmrit.edu.in/",
    },
    {
      title: "Woolf University / ScalerNeoVersity",
      subtitle: "Master's in Computer Science",
      logo_path: "scaler_logo.png",
      alt_name: "Woolf University",
      duration: "2022 - 2023",
      descriptions: [
        "⚡ Currently pursuing a Master's degree in Computer Science.",
      ],
      website_link: "https://www.scaler.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Full Stack Web Development",
      subtitle: "Attainu",
      logo_path: "attainu_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1ZjgltKSQITtzG6QID9yXRR0LLJre95NE/view?usp=sharing",
      alt_name: "Attainu",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work History",
  description:
    "I have worked with many established MNC's as a Software Development Engineer and Deputy Operations Manager primarily in challenging roles. My commitment to teamwork and effective collaboration has led me to take on key roles in various professional communities and networks, where I contribute to the organization of events and initiatives.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Development Engineer",
          company: "OPTUM",
          company_url: "https://www.optum.com/",
          logo_path: "optum_logo.jpeg",
          duration: "July 2021 - Current",
          location: "Hyderabad, Telangana",
          description:
            "Developed and maintained mission-critical responsive web applications for insurance clients using React, Next.js, and Material UI, handling approximately 4 million requests annually. Employed modern front-end technologies such as React Hooks and Context API to enhance performance and maintainability of web applications. Utilized server-side rendering (SSR) capabilities of Next.js to optimize initial page load times and improve search engine optimization (SEO). Implemented stringent security measures, including data encryption and user authentication, to ensure compliance with industry regulations and protect sensitive customer information. Collaborated closely with cross-functional teams, including product managers, UX designers, and quality assurance engineers, to deliver high-quality software releases on schedule. Actively participated in agile development methodologies, attending sprint planning sessions and providing accurate time estimates to meet project milestones and deliverables. Provided technical support and troubleshooting expertise to internal and external stakeholders, ensuring smooth operation and user satisfaction with application.",
          color: "#0879bf",
        },
        {
          title: "Deputy Operations Manager",
          company: "Axis Bank",
          company_url: "https://www.axisbank.com/",
          logo_path: "axisBank_logo.png",
          duration: "Sep 2015 - Apr 2020",
          location: "Bengaluru, Karnataka",
          description:
            "Collaborate with cross-functional teams, stakeholders, and engineering teams to define a clear product roadmap that aligns with the company's vision, business goals, and customer needs. Elicit and document detailed product requirements through effective communication with stakeholders, customers, and end-users. Prioritize features based on value, feasibility, and strategic goals. Collaborate with UX designers to create intuitive and user-friendly software interfaces that enhance overall user experience and drive customer satisfaction. Utilized strong problem-solving skills and effective communication to address and resolve customer issues related to retail assets, ensuring high levels of customer satisfaction and retention. Led and managed loan disbursement process, ensuring accurate and timely disbursement of loans to customers, while adhering to regulatory requirements and internal policies. Analyzed loan disbursement and customer issue resolution data, identifying trends, patterns, and areas for improvement. Utilized insights to develop strategies and initiatives for enhancing operational effectiveness and customer satisfaction.",
          color: "#9b1578",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_sai.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you MERN stack tools and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "103, Ocean green apartments, Visakhapatnam - 530016",
    locality: "Kanodar",
    country: "IN",
    region: "Andhra Pradesh",
    postalCode: "530016",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
