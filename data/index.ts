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
    title: "MyMedBook Digital Health",
    des: "All-in-one digital health system. Manage dossiers, therapies, events, alarms, notifications, tele-videocalls, and family collaborations effortlessly for a healthier life.",
    img: "/p1.svg",
    iconLists: [
      "/flutter.svg",
      "/python.png",
      "/ts.svg",
      "/django.png",
      "/postgres.png",
    ],
    link: "/www.mymedbook.it",
  },
  {
    id: 2,
    title: "Diabetes Tracking App",
    des: "Diabetes support with AI coaching, progress sharing, requiring an access code from your healthcare provider.",
    img: "/p2.svg",
    iconLists: [
      "/postgres.png",
      "/django.png",
      "/ts.svg",
      "/flutter.svg",
      "/python.png",
    ],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "VitaTrack - Personalized Vitamin Companion",
    des: "Effortlessly track your vitamins with the latest guidelines from top health organizations. Achieve peak wellness with VitaTrack!",
    img: "/p4.svg",
    iconLists: [
      "/django.png",
      "/postgres.png",
      "/re.svg",
      "/python.png",
      "/ts.svg",
    ],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Crypto Portfolio Tracker",
    des: "Real-time tracking, instant alerts, and comprehensive portfolio management",
    img: "/p5.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/three.svg"],
    link: "/ui.apple.com",
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
