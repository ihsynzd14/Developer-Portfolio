import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Workout Planner AI app with Flutter",
    description: "Flutter + Django + Postgres",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "FitFusion360",
    des: "All-in-one digital health system. Manage dossiers, therapies, events, alarms, notifications, tele-videocalls, and family collaborations effortlessly for a healthier life.",
    img: "https://i.imgur.com/3LKTC6E.png",
    iconLists: [
      "/flutter.svg",
      "/openai.webp",
      "/python.png",
      "/dart.png",
      "/django.png",
      "/postgres.png",
    ],
    link: "//mymedbook.eu",
    features: [
      {
        title: "Responsive and intuitive user interface",
        details:
          "Adaptive design that works seamlessly across all devices with gesture controls and smooth animations",
      },
      {
        title: "Real-time data synchronization",
        details:
          "Instant updates across devices using WebSocket technology and efficient caching mechanisms",
      },
      {
        title: "Advanced security measures",
        details:
          "End-to-end encryption, two-factor authentication, and HIPAA compliance for medical data protection",
      },
      {
        title: "Scalable architecture",
        details:
          "Microservices-based architecture with containerization for easy scaling and maintenance",
      },
    ],
    timeline: [
      {
        phase: "Planning and Design",
        duration: "6 weeks",
        details:
          "Requirements gathering, wireframing, and architecture planning with stakeholders",
      },
      {
        phase: "Development Phase",
        duration: "14 weeks",
        details:
          "Iterative development with bi-weekly sprints and continuous integration",
      },
      {
        phase: "Testing and QA",
        duration: "4 weeks",
        details:
          "Comprehensive testing including unit tests, integration tests, and user acceptance testing",
      },
      {
        phase: "Deployment",
        duration: "2 weeks",
        details:
          "Staged deployment with monitoring and performance optimization",
      },
    ],
  },
  {
    id: 2,
    title: "FinTrackPro",
    des: "Comprehensive financial tracking and analysis platform with real-time insights and automated reporting.",
    img: "https://i.imgur.com/lUukq1x.png",
    iconLists: [
      "/re.svg",
      "/flutter.svg",
      "/python.png",
      "/dart.png",
      "/django.png",
      "/postgres.png",
    ],
    link: "//mymedbook.eu",
    features: [
      {
        title: "Responsive and intuitive user interface",
        details:
          "Dynamic dashboards with interactive charts and customizable widgets",
      },
      {
        title: "Real-time data synchronization",
        details:
          "Live financial data updates with automated reconciliation and backup systems",
      },
      {
        title: "Advanced security measures",
        details:
          "Bank-grade encryption, multi-factor authentication, and automated threat detection",
      },
      {
        title: "Scalable architecture",
        details:
          "Cloud-native architecture with automatic scaling and load balancing",
      },
    ],
    timeline: [
      {
        phase: "Planning and Design",
        duration: "8 weeks",
        details:
          "Financial systems analysis, security planning, and UX research",
      },
      {
        phase: "Development Phase",
        duration: "16 weeks",
        details: "Agile development with focus on security and performance",
      },
      {
        phase: "Testing and QA",
        duration: "6 weeks",
        details:
          "Security audits, performance testing, and compliance verification",
      },
      {
        phase: "Deployment",
        duration: "3 weeks",
        details: "Phased rollout with detailed monitoring and backup systems",
      },
    ],
  },
  {
    id: 3,
    title: "i2 Business Companion",
    des: "All-in-one business management platform with integrated CRM, accounting, and project management.",
    img: "https://i.imgur.com/fl9BAMk.png",
    iconLists: [
      "/re.svg",
      "/expo.svg",
      "/openai.webp",
      "/python.png",
      "/django.png",
      "/postgres.png",
    ],
    link: "//mymedbook.eu",
    features: [
      {
        title: "Responsive and intuitive user interface",
        details:
          "Unified dashboard with customizable widgets and cross-platform accessibility",
      },
      {
        title: "Real-time data synchronization",
        details: "Seamless data flow between modules with automated backups",
      },
      {
        title: "Advanced security measures",
        details:
          "Enterprise-grade encryption, SSO integration, and compliance monitoring",
      },
      {
        title: "Scalable architecture",
        details:
          "Microservices architecture with modular design for easy expansion",
      },
    ],
    timeline: [
      {
        phase: "Planning and Design",
        duration: "9 weeks",
        details:
          "Business process analysis, integration planning, and UX research",
      },
      {
        phase: "Development Phase",
        duration: "18 weeks",
        details: "Module development with continuous integration/deployment",
      },
      {
        phase: "Testing and QA",
        duration: "6 weeks",
        details:
          "End-to-end testing, performance optimization, and security audits",
      },
      {
        phase: "Deployment",
        duration: "4 weeks",
        details: "Module-wise deployment with business continuity planning",
      },
    ],
  },
  {
    id: 4,
    title: "InventorStock AI",
    des: "Intelligent inventory management system with predictive analytics and automated reordering.",
    img: "https://i.imgur.com/cK3brKh.png",
    iconLists: [
      "/next.svg",
      "/python.png",
      "/ts.svg",
      "/nodejs.png",
      "/express.png",
      "/postgres.png",
      "/mongodb.webp",
    ],
    link: "//mymedbook.eu",
    features: [
      {
        title: "Responsive and intuitive user interface",
        details:
          "Real-time inventory dashboards with barcode scanning and search functionality",
      },
      {
        title: "Real-time data synchronization",
        details:
          "Cross-warehouse inventory tracking with automated stock level updates",
      },
      {
        title: "Advanced security measures",
        details:
          "Secure supplier integration, transaction logging, and fraud detection",
      },
      {
        title: "Scalable architecture",
        details:
          "Multi-tenant architecture supporting unlimited SKUs and locations",
      },
    ],
    timeline: [
      {
        phase: "Planning and Design",
        duration: "5 weeks",
        details:
          "Inventory system analysis, AI model design, and integration planning",
      },
      {
        phase: "Development Phase",
        duration: "10 weeks",
        details: "Core functionality development with ML model integration",
      },
      {
        phase: "Testing and QA",
        duration: "4 weeks",
        details: "Predictive model validation and system integration testing",
      },
      {
        phase: "Deployment",
        duration: "3 weeks",
        details: "Phased warehouse rollout with staff training",
      },
    ],
  },
  {
    id: 5,
    title: "ShiftSmart AI",
    des: "AI-powered workforce management system with intelligent scheduling and performance analytics.",
    img: "https://i.imgur.com/PkJF885.png",
    iconLists: [
      "/flutter.svg",
      "/nodejs.png",
      "/express.png",
      "/ts.svg",
      "/postgres.png",
      "/mongodb.webp",
    ],
    link: "//mymedbook.eu",
    features: [
      {
        title: "Responsive and intuitive user interface",
        details:
          "Smart scheduling interface with drag-and-drop functionality and mobile-first design",
      },
      {
        title: "Real-time data synchronization",
        details:
          "Instant schedule updates with conflict resolution and automated notifications",
      },
      {
        title: "Advanced security measures",
        details:
          "Role-based access control, audit logging, and encrypted employee data storage",
      },
      {
        title: "Scalable architecture",
        details:
          "Distributed system architecture supporting multiple locations and time zones",
      },
    ],
    timeline: [
      {
        phase: "Planning and Design",
        duration: "7 weeks",
        details: "Workforce analysis, AI model planning, and UX prototyping",
      },
      {
        phase: "Development Phase",
        duration: "12 weeks",
        details:
          "AI model training, frontend development, and backend integration",
      },
      {
        phase: "Testing and QA",
        duration: "5 weeks",
        details:
          "Algorithm validation, load testing, and user acceptance trials",
      },
      {
        phase: "Deployment",
        duration: "2 weeks",
        details:
          "Gradual rollout with performance monitoring and user training",
      },
    ],
  },
  {
    id: 6,
    title: "EngageAI CRM",
    des: "AI-powered customer relationship management system with predictive analytics and automated engagement.",
    img: "https://i.imgur.com/YFO3XIg.png",
    iconLists: [
      "/Vue.png",
      "/ts.svg",
      "/python.png",
      "/fastapi.svg",
      "/postgres.png",
    ],
    link: "//mymedbook.eu",
    features: [
      {
        title: "Responsive and intuitive user interface",
        details:
          "360-degree customer view with AI-driven insights and interaction timeline",
      },
      {
        title: "Real-time data synchronization",
        details:
          "Omnichannel data integration with intelligent lead scoring and opportunity tracking",
      },
      {
        title: "Advanced security measures",
        details:
          "GDPR-compliant data handling, granular access controls, and encrypted customer data",
      },
      {
        title: "Scalable architecture",
        details:
          "Cloud-native architecture supporting millions of customer records with instant search",
      },
    ],
    timeline: [
      {
        phase: "Planning and Design",
        duration: "8 weeks",
        details:
          "CRM workflow analysis, AI model selection, and UX prototyping",
      },
      {
        phase: "Development Phase",
        duration: "16 weeks",
        details:
          "AI integration, custom workflow development, and automation implementation",
      },
      {
        phase: "Testing and QA",
        duration: "6 weeks",
        details:
          "AI model validation, workflow testing, and performance optimization",
      },
      {
        phase: "Deployment",
        duration: "3 weeks",
        details:
          "Department-wise rollout with user training and data migration",
      },
    ],
  },
  {
    id: 7,
    title: "TrendTrove",
    des: "E-commerce analytics platform with trend prediction and inventory optimization.",
    img: "https://i.imgur.com/DfWDX7a.png",
    iconLists: ["/vue.png", "/ts.svg", "/api.png"],
    link: "//mymedbook.eu",
    features: [
      {
        title: "Responsive and intuitive user interface",
        details:
          "Interactive trend visualization with predictive analytics dashboard",
      },
      {
        title: "Real-time data synchronization",
        details:
          "Multi-channel sales tracking with automated trend analysis and reporting",
      },
      {
        title: "Advanced security measures",
        details:
          "Secure API integrations, encrypted data storage, and audit logging",
      },
      {
        title: "Scalable architecture",
        details:
          "Distributed processing architecture for real-time trend analysis",
      },
    ],
    timeline: [
      {
        phase: "Planning and Design",
        duration: "7 weeks",
        details:
          "Market analysis, trend algorithm design, and interface planning",
      },
      {
        phase: "Development Phase",
        duration: "15 weeks",
        details:
          "Analytics engine development, API integrations, and frontend implementation",
      },
      {
        phase: "Testing and QA",
        duration: "5 weeks",
        details:
          "Algorithm accuracy testing, load testing, and user acceptance",
      },
      {
        phase: "Deployment",
        duration: "2 weeks",
        details: "Beta testing with select merchants and full rollout",
      },
    ],
  },
  {
    id: 8,
    title: "MyMedBook Digital Health",
    des: "All-in-one digital health system. Manage dossiers, therapies, events, alarms, notifications, tele-videocalls, and family collaborations effortlessly for a healthier life.",
    img: "https://i.imgur.com/kdGK7eh.png",
    iconLists: [
      "/flutter.svg",
      "/next.svg",
      "/python.png",
      "/django.png",
      "/postgres.png",
      "/mongodb.webp",
      "/googlecalendar.png",
    ],
    link: "//mymedbook.eu",
    features: [
      {
        title: "Responsive and intuitive user interface",
        details:
          "Patient-centric design with easy navigation and accessibility features",
      },
      {
        title: "Real-time data synchronization",
        details:
          "Seamless synchronization of medical records, appointments, and prescriptions",
      },
      {
        title: "Advanced security measures",
        details:
          "HIPAA-compliant infrastructure, medical data encryption, and audit trails",
      },
      {
        title: "Scalable architecture",
        details:
          "Microservices-based healthcare platform supporting multiple medical facilities",
      },
    ],
    timeline: [
      {
        phase: "Planning and Design",
        duration: "10 weeks",
        details:
          "Healthcare workflow analysis, compliance planning, and UX research",
      },
      {
        phase: "Development Phase",
        duration: "20 weeks",
        details:
          "Core medical features development, telemedicine integration, and security implementation",
      },
      {
        phase: "Testing and QA",
        duration: "8 weeks",
        details: "Compliance testing, security audits, and clinical validation",
      },
      {
        phase: "Deployment",
        duration: "4 weeks",
        details:
          "Phased rollout across healthcare facilities with staff training",
      },
    ],
  },
  {
    id: 9,
    title: "Diabetes Tracking App",
    des: "Diabetes support with AI coaching, progress sharing, requiring an access code from your healthcare provider.",
    img: "https://i.imgur.com/G4UZfHw.png",
    iconLists: [
      "/flutter.svg",
      "/python.png",
      "/django.png",
      "/mysql.png",
      "/mongodb.webp",
    ],
    link: "//ui.diabtrack.com",
    features: [
      {
        title: "Responsive and intuitive user interface",
        details:
          "Easy glucose logging with customizable charts and trend analysis",
      },
      {
        title: "Real-time data synchronization",
        details:
          "Instant sync with glucose monitors and healthcare provider systems",
      },
      {
        title: "Advanced security measures",
        details:
          "HIPAA-compliant data storage, encrypted medical data, and secure provider access",
      },
      {
        title: "Scalable architecture",
        details:
          "Microservices architecture supporting real-time monitoring and alerts",
      },
    ],
    timeline: [
      {
        phase: "Planning and Design",
        duration: "8 weeks",
        details:
          "Medical device integration planning, AI coaching system design, and UX research",
      },
      {
        phase: "Development Phase",
        duration: "16 weeks",
        details:
          "Core tracking features, AI model implementation, and provider dashboard",
      },
      {
        phase: "Testing and QA",
        duration: "6 weeks",
        details:
          "Medical accuracy validation, integration testing, and compliance verification",
      },
      {
        phase: "Deployment",
        duration: "3 weeks",
        details: "Beta testing with select clinics and phased patient rollout",
      },
    ],
  },
  {
    id: 10,
    title: "VitaTrack - Personalized Vitamin Companion",
    des: "Effortlessly track your vitamins with the latest guidelines from top health organizations. Achieve peak wellness with VitaTrack!",
    img: "https://i.imgur.com/fxSqbQu.png",
    iconLists: ["/re.svg", "/expo.svg", "/nodejs.png", "/express.png"],
    link: "//vitatrack.com",
    features: [
      {
        title: "Responsive and intuitive user interface",
        details:
          "Personalized supplement dashboard with intake reminders and progress tracking",
      },
      {
        title: "Real-time data synchronization",
        details: "Cross-device vitamin tracking with health app integrations",
      },
      {
        title: "Advanced security measures",
        details:
          "Encrypted personal health data, secure third-party integrations",
      },
      {
        title: "Scalable architecture",
        details:
          "Cloud-based system supporting millions of daily tracking entries",
      },
    ],
    timeline: [
      {
        phase: "Planning and Design",
        duration: "6 weeks",
        details: "Nutritional database design, recommendation engine planning",
      },
      {
        phase: "Development Phase",
        duration: "12 weeks",
        details:
          "Core tracking features, personalization algorithm, notification system",
      },
      {
        phase: "Testing and QA",
        duration: "4 weeks",
        details:
          "Recommendation accuracy testing, usability studies, performance optimization",
      },
      {
        phase: "Deployment",
        duration: "2 weeks",
        details: "Staged rollout with continuous monitoring and updates",
      },
    ],
  },
  {
    id: 11,
    title: "Crypto Portfolio Tracker",
    des: "Real-time tracking, instant alerts, and comprehensive portfolio management",
    img: "https://i.imgur.com/sv5lSiL.png",
    iconLists: ["/re.svg", "/expo.svg", "/nodejs.png", "/express.png"],
    link: "//ui.crypto.com",
    features: [
      {
        title: "Responsive and intuitive user interface",
        details:
          "Interactive portfolio dashboard with real-time price charts and asset allocation views",
      },
      {
        title: "Real-time data synchronization",
        details:
          "Multi-exchange integration with automated portfolio balancing and tax reporting",
      },
      {
        title: "Advanced security measures",
        details:
          "Hardware wallet integration, 2FA, and encrypted API connections",
      },
      {
        title: "Scalable architecture",
        details:
          "High-frequency data processing with sub-second market updates",
      },
    ],
    timeline: [
      {
        phase: "Planning and Design",
        duration: "7 weeks",
        details:
          "Exchange API integration planning, security architecture design",
      },
      {
        phase: "Development Phase",
        duration: "14 weeks",
        details:
          "Trading interface development, real-time data processing implementation",
      },
      {
        phase: "Testing and QA",
        duration: "5 weeks",
        details:
          "Exchange connectivity testing, security audits, performance optimization",
      },
      {
        phase: "Deployment",
        duration: "3 weeks",
        details: "Beta testing with power users and gradual public release",
      },
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Iskandar was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Iskandar's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Iskandar is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Iskandar was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Iskandar's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Iskandar is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Iskandar was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Iskandar's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Iskandar is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Iskandar was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Iskandar's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Iskandar is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Iskandar was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Iskandar's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Iskandar is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "",
    img: "",
    nameImg: "",
  },
  {
    id: 2,
    name: "",
    img: "",
    nameImg: "",
  },
  {
    id: 3,
    name: "",
    img: "",
    nameImg: "",
  },
  {
    id: 4,
    name: "",
    img: "",
    nameImg: "",
  },
  {
    id: 5,
    name: "",
    img: "",
    nameImg: "",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Lead Backend Developer",
    desc: "Assisted in the development of a web/app platform using Python / Django for digital health system.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using Flutter / Dart.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ihsynzd14",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://www.instagram.com/iskender_hsynzd/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/iskandar-huseynzade-8670682b4/",
  },
];
