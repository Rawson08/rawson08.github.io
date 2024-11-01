/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Roshan Subedi",
  title: "Hello everyone, I'm Roshan",
  subTitle: emoji(
    "A senior Computer Science student at UNM and passionate Software Developer 🚀 having personal and academic experience of building Web applications and mini-games with Java / JavaScript / Reactjs / Nodejs / Angular / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1O6OdLEjAqo8XDcYIKwbpg0NRF07JALKZ/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rawson08",
  linkedin: "https://www.linkedin.com/in/roshansbd/",
  gmail: "roshansbd8@gmail.com",
  facebook: "https://www.facebook.com/nahsorsbd",
  medium: "https://medium.com/@roshansbd8",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ASPIRING SOFTWARE DEVELOPER | ALWAYS EAGER TO INNOVATE AND LEARN",
  skills: [
    emoji("⚡ Proficient in various programming languages, including Java, Python, and C++"),
    emoji("⚡ Database management with SQL and NoSQL, experienced in MongoDB and Firebase"),
    emoji("⚡ Skilled in front-end development with JavaScript frameworks and responsive design"),
    emoji("⚡ Understanding of system-level programming and optimization techniques in C and Assembly"),
    emoji("⚡ Experienced with server-side development and managing server-based platforms"),
    emoji("⚡ Proficient in using software tools like IntelliJ, VSC, and CLion for development"),
    emoji("⚡ Skilled in developing web applications with emphasis on user experience and functionality"),
    emoji("⚡ Knowledgeable in cloud services and deployment on platforms such as AWS and Digital Ocean")
  ]
  ,

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "SQL-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fab fa-c"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-c-plus-plus"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    }
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of New Mexico",
      logo: require("./assets/images/unmLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2021 - May 2025",
      desc: "Undergrad Computer Science with a GPA of 3.5+.",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  //   {
  //     schoolName: "Stanford University",
  //     logo: require("./assets/images/stanfordLogo.png"),
  //     subHeader: "Bachelor of Science in Computer Science",
  //     duration: "September 2013 - April 2017",
  //     desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
  //     descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
  //   }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "Communication and Customer Service",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full-Stack Developer",
      company: "Expense Manager",
      companylogo: require("./assets/images/expenseManager.webp"),
      date: "June 2024 – Present",
      desc: "A solo project of my own; web-based application to manage expenses.",
      descBullets: [
        "Add and manage expenses",
        "Share expenses between people of a group",
        "Scan receipts to autofill expenses"
      ]
    },
    {
      role: "Team Lead",
      company: "Auction House",
      companylogo: require("./assets/images/auctionHouse.webp"),
      date: "February 2023 – March 2023",
      desc: "Led a team to develop an auction management system, enabling clients to participate in auctions through a server-based platform.",
      descBullets: [
        "Managed auction creation, listing, bidding, and closure processes",
        "Oversaw team development to ensure smooth operations",
        "Handled client interactions for both buyers and sellers"
      ]
    },
    {
      role: "System Programmer",
      company: "Bomb Lab",
      companylogo: require("./assets/images/bombLab.webp"),
      date: "March 2023 – April 2023",
      desc: "Engaged in system-level programming and optimization to defuse a simulated bomb.",
      descBullets: [
        "Implemented and optimized code in C and Assembly language",
        "Explored computer architecture principles",
        "Gained insights into system-level optimization techniques"
      ]
    }
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Some of the Certifications I have earned!",
  display: true,

  achievementsCards: [
    {
  title: "What Is Generative AI",
  subtitle:
    "Course covering Generative AI tools, Artificial Intelligence, and Generative AI basics.",
  image: require("./assets/images/generativeAI.webp"),
  imageAlt: "Generative AI Logo",
  footerLink: [
    {
      name: "Certification",
      url: "https://drive.google.com/file/d/1JB8lvVDmBjoLKExDcVmqfBWHjdXIhI9j/view?usp=sharing"
    }
  ]
},
{
  title: "Generative AI: The Evolution of Thoughtful Online Search",
  subtitle:
    "Course covering Search Engine Technology, AI for Business, and Generative AI.",
  image: require("./assets/images/thoughtfulSearch.webp"),
  imageAlt: "Generative AI Thoughtful Search Logo",
  footerLink: [
    {
      name: "Certification",
      url: "https://drive.google.com/file/d/1gZKw9SjlRK_aqaFWHWEvCyqBvE3VtsXk/view?usp=sharing"
    }
  ]
},
{
  title: "Streamlining Your Work with Microsoft Copilot",
  subtitle:
    "Course on using Microsoft Copilot for productivity improvement and AI for Business.",
  image: require("./assets/images/microsoftCopilot.webp"),
  imageAlt: "Microsoft Copilot Logo",
  footerLink: [
    {
      name: "Certification",
      url: "https://drive.google.com/file/d/1cUiFZEof5Qh3eMU9nrFg8t1jRJR_1F6T/view?usp=sharing"
    }
  ]
},
{
  title: "Learning Microsoft 365 Copilot",
  subtitle:
    "Course on Microsoft 365 tools and Microsoft Copilot for enhanced productivity.",
  image: require("./assets/images/microsoft365Copilot.webp"),
  imageAlt: "Microsoft 365 Copilot Logo",
  footerLink: [
    {
      name: "Certification",
      url: "https://drive.google.com/file/d/1mne3Ne2Lw8-AaJlA1EA9OvsmGEOm7K6s/view?usp=sharing"
    }
  ]
},
{
  title: "Ethics in the Age of Generative AI",
  subtitle:
    "Course on Responsible AI and Computer Ethics in the context of Generative AI.",
  image: require("./assets/images/ethicsGenerativeAI.webp"),
  imageAlt: "Ethics in AI Logo",
  footerLink: [
    {
      name: "Certification",
      url: "https://drive.google.com/file/d/1cjADdxGtzKKsyqQoM-7HLANKk8GX-AjK/view?usp=sharing"
    }
  ]
},
{
  title: "Introduction to Artificial Intelligence",
  subtitle:
    "Course covering fundamentals of AI, AI for Business, and its applications.",
  image: require("./assets/images/introAI.webp"),
  imageAlt: "Introduction to AI Logo",
  footerLink: [
    {
      name: "Certification",
      url: "https://drive.google.com/file/d/1HYHoHQZowcDX9nqzHbcatqegGRuTVEtV/view?usp=sharing"
    }
  ]
},
{
  title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
  subtitle:
    "Learning path covering AI, Generative AI, and Computer Ethics.",
  image: require("./assets/images/careerGenerativeAI.webp"),
  imageAlt: "Career Essentials AI Logo",
  footerLink: [
    {
      name: "Certification",
      url: "https://drive.google.com/file/d/1qDxGWbqBUqkCNS3OaRbRW6P1RO82r8bf/view?usp=drive_link"
    }
  ]
},
{
  title: "Introduction to Prompt Engineering for Generative AI (2023)",
  subtitle:
    "Course on Prompt Engineering techniques for working with Generative AI.",
  image: require("./assets/images/promptEngineering.webp"),
  imageAlt: "Prompt Engineering Logo",
  footerLink: [
    {
      name: "Certification",
      url: "https://drive.google.com/file/d/1_2eJQIWNmeg5LMi6uHAKzA7PcdRtgNzO/view?usp=sharing"
    }
  ]
}

  ],
 // display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  display: true,
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
 // display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-5058188952",
  email_address: "roshansbd8@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "rawson08", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
