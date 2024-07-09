export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Approach", link: "#approach" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I aspire to be a software developer, creating innovative and impactful applications.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "To make a Global Impact.",
    description: "Passionate about using technology ",
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
    title: "Delving into modern web development, one project at a time.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's start a Project Together",
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
    title: "Application Management System",
    des: "A website with user authentication and admin panel features for the faculties of our college.",
    img: "/ams-light.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://app-ms.vercel.app",
    repo:"https://github.com/gyannj/application-management-system",
    techstack:[
        //   {
          //     id: 1,
          //     name: "React",
          //     designation: "",
          //     image:
          //       "/re.svg",
          //   },
          {
            id: 2,
            name: "Next",
            designation: "",
            image:
              "next.svg",
          },
          {
            id: 3,
            name: "TailWindCSS",
            designation: "",
            image:
              "/tail.svg",
          },
          {
            id: 4,
            name: "TypeScript",
            designation: "",
            image:
              "/ts.svg",
          },
          {
            id: 5,
            name: "MongoDB",
            designation: "",
            image:
              "/mdb.svg",
          },
          {
            id: 6,
            name: "Clerk",
            designation: "",
            image:
              "/clerk2.png",
          },
    ]
  },
  {
    id: 2,
    title: "BookOwl - A Book Selling Website",
    des: "Simplify your book purchasing experience with BookOwl. Browse and shop books across different categories.",
    img: "/bookowl.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://bookowl.vercel.app",
    repo:"https://github.com/gyannj/littlebox-ecommerce",
    techstack:[
      //   {
        //     id: 1,
        //     name: "React",
        //     designation: "",
        //     image:
        //       "/re.svg",
        //   },
        {
          id: 2,
          name: "Next",
          designation: "",
          image:
            "next.svg",
        },
        {
          id: 3,
          name: "TailWindCSS",
          designation: "",
          image:
            "/tail.svg",
        },
        {
          id: 4,
          name: "TypeScript",
          designation: "",
          image:
            "/ts.svg",
        },
        {
          id: 5,
          name: "AWS DynamoDB",
          designation: "",
          image:
            "/DynamoDB.svg",
        },
  ]
  },
  {
    id: 3,
    title: "NetConnect - A Professional Network",
    des: "A LinkedIn like website for building professional connections and boosting your career.",
    img: "/nc.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://net-connect-iota.vercel.app/",
    repo:"https://github.com/gyannj/linkedin-clone-next",
    techstack:[
      //   {
        //     id: 1,
        //     name: "React",
        //     designation: "",
        //     image:
        //       "/re.svg",
        //   },
        {
          id: 2,
          name: "Next",
          designation: "",
          image:
            "next.svg",
        },
        {
          id: 3,
          name: "TailWindCSS",
          designation: "",
          image:
            "/tail.svg",
        },
        {
          id: 4,
          name: "TypeScript",
          designation: "",
          image:
            "/ts.svg",
        },
        {
          id: 5,
          name: "MongoDB",
          designation: "",
          image:
            "/mdb.svg",
        },
        {
          id: 6,
          name: "Clerk",
          designation: "",
          image:
            "/clerk2.png",
        },
      
  ]
  },
  {
    id: 4,
    title: "Instagram Reel Viewer",
    des: "A website to view Instagram Reels built using React, TailWindCSS and JavaScript.",
    img: "/igreel.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://gyannj.github.io/insta-reel-deploy/",
    repo:"https://github.com/gyannj/insta-reel-deploy",
    techstack:[
        {
            id: 1,
            name: "React",
            designation: "",
            image:
              "/re.svg",
          },
        // {
        //   id: 2,
        //   name: "Next",
        //   designation: "",
        //   image:
        //     "next.svg",
        // },
        {
          id: 3,
          name: "TailWindCSS",
          designation: "",
          image:
            "/tail.svg",
        },
        // {
        //   id: 4,
        //   name: "TypeScript",
        //   designation: "",
        //   image:
        //     "/ts.svg",
        // },
        // {
        //   id: 5,
        //   name: "AWS DynamoDB",
        //   designation: "",
        //   image:
        //     "/DynamoDB.svg",
        // },
        {
          id:6,
          name: "JavaScript",
          designation: "",
          image:"/js.svg"
        }
  ]
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  // {
  //   id: 2,
  //   title: "Mobile App Dev - JSM Tech",
  //   desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp2.svg",
  // },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  {
    id: 4,
    title: "Network Engineering Intern",
    desc: "Trained on usage and configuration of network devices, and troubleshooting network issues.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/gyannj"
  },
  {
    id: 2,
    img: "/fb3.svg",
    link:"https://www.facebook.com/gyanjyoti.das.1048"
  },
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/gyan-jyoti/"
  },
];