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
    title: "Aidas Corners - Pastry Management System",
    des: "Comprehensive pastry management system with real-time sales tracking, inventory management, and branch performance analytics.",
    description: "Aidas Corners is a sophisticated pastry management solution designed to streamline operations across multiple branches, enhanced by AI-powered analytics and intelligent forecasting. The system features real-time sales monitoring, detailed product statistics, and comprehensive branch performance analytics driven by machine learning algorithms. I implemented an intuitive interface that allows easy tracking of popular items and branch-specific performance metrics, while AI assistance helps predict optimal inventory levels and suggests data-driven decisions for the pastry business. The integrated AI technology continuously learns from sales patterns to improve accuracy in demand forecasting and product recommendations",
    img: "https://i.imgur.com/pdZ6jTL.png", 
    iconLists: [
      "/re.svg",
      "/expo.svg",
      "/firebase.svg",
    ],
    link: "//aidascorners.com",
    features: [
      {
        title: "Responsive and intuitive user interface with AI integration",
        details: "Branch-specific dashboards with real-time sales tracking and product performance analytics"
      },
      {
        title: "Real-time data synchronization",
        details: "Instant sales updates across branches with automated inventory management"
      },
      {
        title: "Advanced security measures",
        details: "Role-based access control, secure transaction logging, and data encryption"
      },
      {
        title: "Scalable architecture",
        details: "Multi-branch support with centralized management and reporting capabilities"
      }
    ],
    timeline: [
      {
        phase: "Planning and Design",
        duration: "2 weeks",
        details: "Business process analysis, UI/UX design, and system architecture planning"
      },
      {
        phase: "Development Phase",
        duration: "8 weeks",
        details: "Core functionality development, branch management implementation, and reporting system"
      },
      {
        phase: "Testing and QA",
        duration: "2 weeks",
        details: "System integration testing, performance optimization, and user acceptance testing"
      },
      {
        phase: "Deployment",
        duration: "1 week",
        details: "Phased rollout across branches with staff training and data migration"
      }
    ]
  },
  {
    id: 2,
    title: "FitFusion360",
    des: "All-in-one digital health system. Manage dossiers, therapies, events, alarms, notifications, tele-videocalls, and family collaborations effortlessly for a healthier life.",
    description: "Working on FitFusion360 has been an incredible journey in healthcare technology. Our team focused on creating an intuitive platform that simplifies health management while maintaining the highest security standards. We implemented real-time synchronization for medical records and integrated secure video calls, making healthcare more accessible. The project taught me valuable lessons about handling sensitive data and the importance of user-centric design in healthcare applications.",
    img: "https://i.imgur.com/3LKTC6E.png",
    iconLists: [
      "/flutter.svg",
      "/openai.webp",
      "/python.png",
      "/dart.png",
      "/django.png",
      "/postgres.png",
    ],
    link: "//",
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
        duration: "1 week",
        details:
          "Requirements gathering, wireframing, and architecture planning with stakeholders",
      },
      {
        phase: "Development Phase",
        duration: "8 weeks",
        details:
          "Iterative development with bi-weekly sprints and continuous integration",
      },
      {
        phase: "Testing and QA",
        duration: "2 weeks",
        details:
          "Comprehensive testing including unit tests, integration tests, and user acceptance testing",
      },
      {
        phase: "Deployment",
        duration: "1 week",
        details:
          "Staged deployment with monitoring and performance optimization",
      },
    ],
  },
  {
    id: 3,
    title: "Turna Emlak - Real Estate",
    des: "Modern real estate management platform: A comprehensive solution equipped with portfolio tracking, client management and automated listing syndication features",
    description: "The Turna Emlak project emerged from our vision to modernize real estate business processes. By carefully analyzing user feedback and industry needs to streamline real estate agents' daily operations, we developed a solution that balances powerful features with ease of use. The project involved complex challenges like multi-portal listing integration and real-time portfolio management. I'm particularly proud of the automated listing syndication system and client tracking module we built, which significantly improved operational efficiency for real estate offices.",
    img: "https://i.imgur.com/YK7L3Xt.png",
    iconLists: [
      "/re.svg",
      "/next.svg",
      "/supabase.png",
      "/tailwind.png",
      "/typescript.svg",
    ],
    link: "//xenithsoft.com",
    features: [
      {
        title: "Responsive and intuitive user interface",
        details:
          "Modern interface with property listings, client profiles, and interactive dashboards",
      },
      {
        title: "Real-time data synchronization",
        details:
          "Instant property updates across multiple platforms with automated listing management",
      },
      {
        title: "Advanced security measures",
        details:
          "Secure client data handling, role-based access control, and activity logging",
      },
      {
        title: "Scalable architecture",
        details:
          "Cloud-based system supporting multiple offices and large property portfolios",
      },
    ],
    timeline: [
      {
        phase: "Planning and Design",
        duration: "2 weeks",
        details:
          "Real estate workflow analysis, platform architecture design, and UX research",
      },
      {
        phase: "Development Phase",
        duration: "6 weeks",
        details: "Core features development with portal integrations and automation",
      },
      {
        phase: "Testing and QA",
        duration: "2 weeks",
        details:
          "Integration testing, performance optimization, and user acceptance testing",
      },
      {
        phase: "Deployment",
        duration: "1 week",
        details: "Phased office rollout with staff training and data migration",
      },
    ],
  },
  {
    id: 4,
    title: "FinTrackPro",
    des: "Comprehensive financial tracking and analysis platform with real-time insights and automated reporting.",
    description: "FinTrackPro emerged from our desire to simplify financial management for businesses. Through careful consideration of user feedback and industry best practices, we developed a solution that balances powerful features with ease of use. The project involved complex challenges in real-time data processing and security implementation, which helped me grow significantly as a developer. I'm particularly proud of the automated reporting system we built, which has helped many businesses streamline their financial operations.",
    img: "https://i.imgur.com/lUukq1x.png",
    iconLists: [
      "/re.svg",
      "/flutter.svg",
      "/python.png",
      "/dart.png",
      "/django.png",
      "/postgres.png",
    ],
    link: "//xenithsoft.com",
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
        duration: "2 weeks",
        details:
          "Financial systems analysis, security planning, and UX research",
      },
      {
        phase: "Development Phase",
        duration: "6 weeks",
        details: "Agile development with focus on security and performance",
      },
      {
        phase: "Testing and QA",
        duration: "2 weeks",
        details:
          "Security audits, performance testing, and compliance verification",
      },
      {
        phase: "Deployment",
        duration: "1 week",
        details: "Phased rollout with detailed monitoring and backup systems",
      },
    ],
  },
  {
    id: 5,
    title: "i2 Business Companion",
    des: "All-in-one business management platform with integrated CRM, accounting, and project management.",
    description: "The development of i2 Business Companion was driven by the need for a unified business management solution. Working closely with business owners, we created a platform that simplifies daily operations. The project presented interesting challenges in data integration and workflow automation, pushing me to explore innovative solutions. I learned valuable lessons about scalability and the importance of modular design in enterprise applications.",
    img: "https://i.imgur.com/fl9BAMk.png",
    iconLists: [
      "/re.svg",
      "/expo.svg",
      "/openai.webp",
      "/python.png",
      "/django.png",
      "/postgres.png",
    ],
    link: "//xenithsoft.com",
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
        duration: "1 week",
        details:
          "Business process analysis, integration planning, and UX research",
      },
      {
        phase: "Development Phase",
        duration: "8 weeks",
        details: "Module development with continuous integration/deployment",
      },
      {
        phase: "Testing and QA",
        duration: "2 weeks",
        details:
          "End-to-end testing, performance optimization, and security audits",
      },
      {
        phase: "Deployment",
        duration: "1 week",
        details: "Module-wise deployment with business continuity planning",
      },
    ],
  },
  {
    id: 6,
    title: "InventorStock AI",
    des: "Intelligent inventory management system with predictive analytics and automated reordering.",
    description: "InventorStock AI represents our venture into applying artificial intelligence to inventory management. The project allowed me to explore advanced predictive analytics while maintaining a focus on practical business needs. We implemented machine learning algorithms for demand forecasting and automated reordering, which taught me a lot about balancing sophisticated technology with user-friendly interfaces. The system's success in reducing inventory costs for our clients has been particularly rewarding.",
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
    link: "//xenithsoft.com",
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
        duration: "1 week",
        details:
          "Inventory system analysis, AI model design, and integration planning",
      },
      {
        phase: "Development Phase",
        duration: "6 weeks",
        details: "Core functionality development with ML model integration",
      },
      {
        phase: "Testing and QA",
        duration: "2 weeks",
        details: "Predictive model validation and system integration testing",
      },
      {
        phase: "Deployment",
        duration: "1 week",
        details: "Phased warehouse rollout with staff training",
      },
    ],
  },
  {
    id: 7,
    title: "ShiftSmart AI",
    des: "AI-powered workforce management system with intelligent scheduling and performance analytics.",
    description: "Developing ShiftSmart AI was an exciting opportunity to address common workforce management challenges. We focused on creating an intelligent system that learns from scheduling patterns and employee preferences. The project involved complex algorithm development for optimal shift allocation, while ensuring the interface remained simple and intuitive. It was rewarding to see how our solution helped businesses improve their workforce efficiency.",
    img: "https://i.imgur.com/PkJF885.png",
    iconLists: [
      "/flutter.svg",
      "/nodejs.png",
      "/express.png",
      "/ts.svg",
      "/postgres.png",
      "/mongodb.webp",
    ],
    link: "//xenithsoft.com",
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
        duration: "1 week",
        details: "Workforce analysis, AI model planning, and UX prototyping",
      },
      {
        phase: "Development Phase",
        duration: "6 weeks",
        details:
          "AI model training, frontend development, and backend integration",
      },
      {
        phase: "Testing and QA",
        duration: "2 weeks",
        details:
          "Algorithm validation, load testing, and user acceptance trials",
      },
      {
        phase: "Deployment",
        duration: "1 week",
        details:
          "Gradual rollout with performance monitoring and user training",
      },
    ],
  },
  {
    id: 8,
    title: "EngageAI CRM",
    des: "AI-powered customer relationship management system with predictive analytics and automated engagement.",
    description: "EngageAI CRM was born from our vision to modernize customer relationship management. The project challenged us to implement advanced AI capabilities while maintaining ease of use. We developed innovative solutions for customer behavior analysis and automated engagement, which taught me valuable lessons about balancing automation with personalization. The positive feedback from users about improved customer retention has been particularly gratifying.",
    img: "https://i.imgur.com/YFO3XIg.png",
    iconLists: [
      "/Vue.png",
      "/ts.svg",
      "/python.png",
      "/fastapi.svg",
      "/postgres.png",
    ],
    link: "//xenithsoft.com",
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
        duration: "2 weeks",
        details:
          "CRM workflow analysis, AI model selection, and UX prototyping",
      },
      {
        phase: "Development Phase",
        duration: "8 weeks",
        details:
          "AI integration, custom workflow development, and automation implementation",
      },
      {
        phase: "Testing and QA",
        duration: "2 weeks",
        details:
          "AI model validation, workflow testing, and performance optimization",
      },
      {
        phase: "Deployment",
        duration: "1 week",
        details:
          "Department-wise rollout with user training and data migration",
      },
    ],
  },
  {
    id: 9,
    title: "TrendTrove",
    des: "E-commerce analytics platform with trend prediction and inventory optimization.",
    description: "TrendTrove represents our effort to bring data-driven decision making to e-commerce businesses. The project involved creating sophisticated analytics tools while ensuring they remained accessible to non-technical users. Working on the trend prediction algorithms and real-time analytics dashboard helped me understand the importance of presenting complex data in an understandable way. It's been rewarding to see businesses make more informed decisions using our platform.",
    img: "https://i.imgur.com/DfWDX7a.png",
    iconLists: ["/vue.png", "/ts.svg", "/api.png"],
    link: "//xenithsoft.com",
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
        duration: "1 week",
        details:
          "Market analysis, trend algorithm design, and interface planning",
      },
      {
        phase: "Development Phase",
        duration: "6 weeks",
        details:
          "Analytics engine development, API integrations, and frontend implementation",
      },
      {
        phase: "Testing and QA",
        duration: "2 weeks",
        details:
          "Algorithm accuracy testing, load testing, and user acceptance",
      },
      {
        phase: "Deployment",
        duration: "1 week",
        details: "Beta testing with select merchants and full rollout",
      },
    ],
  },
  {
    id: 10,
    title: "MyMedBook Digital Health",
    des: "All-in-one digital health system. Manage dossiers, therapies, events, alarms, notifications, tele-videocalls, and family collaborations effortlessly for a healthier life.",
    description: "MyMedBook Digital Health was a significant undertaking in the healthcare technology space. We focused on creating a comprehensive system that simplifies health management while ensuring strict compliance with medical data regulations. The project taught me valuable lessons about handling sensitive information and the importance of reliable, user-friendly healthcare solutions. Seeing how our platform has helped improve patient care coordination has been incredibly fulfilling.",
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
        duration: "2 weeks",
        details:
          "Healthcare workflow analysis, compliance planning, and UX research",
      },
      {
        phase: "Development Phase",
        duration: "10 weeks",
        details:
          "Core medical features development, telemedicine integration, and security implementation",
      },
      {
        phase: "Testing and QA",
        duration: "2 weeks",
        details: "Compliance testing, security audits, and clinical validation",
      },
      {
        phase: "Deployment",
        duration: "1 week",
        details:
          "Phased rollout across healthcare facilities with staff training",
      },
    ],
  },
  {
    id: 11,
    title: "Diabetes Tracking App",
    des: "Diabetes support with AI coaching, progress sharing, requiring an access code from your healthcare provider.",
    description: "The Diabetes Tracking App project allowed us to make a meaningful impact in healthcare management. We worked closely with healthcare providers to develop an intuitive system for diabetes monitoring and management. The implementation of AI coaching features and secure data sharing mechanisms provided valuable insights into creating effective healthcare solutions. It's been particularly rewarding to see how our app has helped users better manage their condition.",
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
        duration: "1 week",
        details:
          "Medical device integration planning, AI coaching system design, and UX research",
      },
      {
        phase: "Development Phase",
        duration: "8 weeks",
        details:
          "Core tracking features, AI model implementation, and provider dashboard",
      },
      {
        phase: "Testing and QA",
        duration: "2 weeks",
        details:
          "Medical accuracy validation, integration testing, and compliance verification",
      },
      {
        phase: "Deployment",
        duration: "1 week",
        details: "Beta testing with select clinics and phased patient rollout",
      },
    ],
  },
  {
    id: 12,
    title: "VitaTrack - Personalized Vitamin Companion",
    des: "Effortlessly track your vitamins with the latest guidelines from top health organizations. Achieve peak wellness with VitaTrack!",
    description: "VitaTrack emerged from our desire to simplify vitamin and supplement management. The project involved creating a personalized tracking system that adapts to individual needs while following scientific guidelines. Developing the recommendation engine and notification system taught me important lessons about creating engaging health applications. The positive user feedback about improved supplement adherence has been especially motivating.",
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
        duration: "1 week",
        details: "Nutritional database design, recommendation engine planning",
      },
      {
        phase: "Development Phase",
        duration: "6 weeks",
        details:
          "Core tracking features, personalization algorithm, notification system",
      },
      {
        phase: "Testing and QA",
        duration: "2 weeks",
        details:
          "Recommendation accuracy testing, usability studies, performance optimization",
      },
      {
        phase: "Deployment",
        duration: "1 week",
        details: "Staged rollout with continuous monitoring and updates",
      },
    ],
  },
];

export const testimonials = [
  {
    quote:
      "The match tracking system Iskandar developed for PsycoBet brought a new level of engagement to our platform. His attention to detail and understanding of real-time systems helped create a seamless experience for our users. It is a pleasure working with someone so dedicated to delivering quality results.",
    name: "Ersen Guven",
    title: "Owner of PsycoBet",
  },
  {
    quote:
      "Working with Iskandar on our Amazon mentorship platform was a great experience. He understood our vision perfectly and created intuitive tools that our mentors and students love using. His ability to translate complex requirements into user-friendly solutions was impressive.",
    name: "Marcello di Pierro",
    title: "CEO of StormX Digital",
  },
  {
    quote:
      "Iskandar helped transform our traditional pastry shop operations with a smart inventory system. The mobile app he created made our daily operations much smoother, and our staff adapted to it quickly. His solution really helped modernize our business processes.",
    name: "Aidas Corners",
    title: "Owner of Aidas Corners Pasticceria",
  },
  {
    quote:
      "We've collaborated with Iskandar on several projects at XenithSoft, and each time he's delivered excellent results. He has a great eye for design and always focuses on creating solutions that are both beautiful and practical. His problem-solving skills and dedication make him a valuable partner.",
    name: "Erkul Kaymaz",
    title: "CEO of XenithSoft",
  },
  {
    quote:
      "Iskandar helped bring our vision for VitaTrack and FitFusion360 to life. He created two user-friendly health and fitness apps that our customers love using. His understanding of what users need and ability to create intuitive interfaces made both projects a success.",
    name: "Jafar Bayramov",
    title: "Founder of VitaTrack & FitFusion360",
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
