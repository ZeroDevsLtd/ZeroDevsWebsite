// All static website text/content for easy editing
// Example structure: { section: { key: "Text..." } }

const content = {
  navbar: {
    home: "Home",
    about: "About Us",
    services: "Services",
    team: "Team",
    testimonial: "Testimonials",
    client: "Clients",
    contact: "Contact",
    career: "Career"
  },
  banner: {
    headline: "We provide solutions for your business!",
    subheadline: "ZERODEVS - Your trusted Software Development Partner",
    description: "Empowering business leaders to achieve lasting success through digital innovation. We deliver SaaS products, custom and AI-driven solutions, and connect you with top global talent—helping your business scale and lead in a digital world."
  },
  about: {
    title: "About Us",
    description: "ZeroDevs empowers businesses worldwide with innovative SaaS products, custom and AI-driven solutions, and a global talent hiring program. Our expertise in mobile and web development helps organizations rapidly adapt, scale, and build new capabilities for lasting success.",
    features: [
      {
        title: "Process & Quality",
        text: "We follow an agile project management system which reduces our development cost and helps to meet deadlines. Our dedicated QA team ensures excellent product quality."
      },
      {
        title: "Customer Support",
        text: "There are two offices located in New York and one in Dhaka making a team who will support its clients round the clock."
      },
      {
        title: "Customer Relationship",
        text: "We always go the extra mile to maintain long lasting relationships with our partners & clients."
      }
    ],
    iconFeatures: [
      {
        title: "Agile Process",
        text: "Our agile project management ensures on-time delivery and cost efficiency, with dedicated QA for top-tier quality.",
        icon: "faProjectDiagram"
      },
      {
        title: "24/7 Support",
        text: "With offices in New York and Dhaka, our global team provides round-the-clock support for all clients.",
        icon: "faHeadset"
      },
      {
        title: "Client Partnership",
        text: "We build lasting partnerships, going the extra mile to support and grow with our clients.",
        icon: "faHandshake"
      }
    ],
    extraHeading: "Global Talent Hiring for Your Success",
    extraParagraph1: "Access a world-class pool of engineers, developers, and specialists. Our global talent hiring program connects you with the right experts to drive your business forward, no matter where you are.",
    extraParagraph2: "We manage recruitment, onboarding, and seamless integration, so you can focus on your business while we build your dream team.",
    extraParagraph3: "Partner with ZeroDevs to scale quickly, stay competitive, and ensure your team always has the skills needed for success in a fast-changing digital world.",
  },
  services: {
    title: "OUR SERVICES",
    description: "We build software development teams that grow with our clients, from the early stages to whatever they aspire to be. Our expertise includes front-end, backend, database, and server solutions for mobile, web, and desktop applications. Our purpose is to provide our clients with expert guidance and to build software vital to their organizations.",
    offerings: [
      {
        title: "Custom Software Development",
        text: "Zerodevs helps you create diverse and complex software solutions for your business needs. Listening to your ideas, we implement and create custom software solutions from scratch, designed especially for your business. With Zerodevs, you get quality software and perfect service every time."
      },
      {
        title: "Web Application Development",
        text: "Zerodevs looks beyond conventional solutions to develop disruptive web products. Our skilled and dedicated web development team understands your needs and leverages the dynamism of modern web frameworks to create business valued web applications."
      },
      {
        title: "Mobile Application Development",
        text: "Our expertise in custom mobile app development gives our clients the opportunity to pack incredible functionality into their customer's hands. We develop apps that perform across different mobile devices and operating systems. We are experts at Swift/Objective-C to build native iOS apps and Java/Kotlin for native Android app development. For cross-platform and hybrid development our expertise include, but are not limited to, Ionic, Xamarin, and React Native."
      },
      {
        title: "Quality Assurance & Testing",
        text: "Treading on Agile development methodologies and Rational Unified Process practices in testing, Zerodevs ensures highest quality of software solutions to you. Our software testing strategy ensures every component of your software are free of bugs and issues."
      }
    ]
  },
  team: {
    title: "Team",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",
    members: [
      {
        name: "Alice Johnson",
        title: "CEO & Founder",
        image: require('../Components/images/team-1.jpg'),
      },
      {
        name: "Bob Smith",
        title: "Lead Developer",
        image: require('../Components/images/team-2.jpg'),
      },
      {
        name: "Carol Lee",
        title: "UI/UX Designer",
        image: require('../Components/images/team-3.jpg'),
      },
      {
        name: "David Kim",
        title: "Project Manager",
        image: require('../Components/images/team-4.jpg'),
      },
    ]
  },
  testimonial: {
    title: "Testimonials"
  },
  client: {
    title: "Our Clients",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque dere santome nida."
  },
  contact: {
    title: "Contact Us",
    address: "A108 Adam Street, New York, NY 535022, United States",
    phone: "+1 5589 55488 55",
    email: "info@example.com"
  },
  career: {
    title: "Open Positions",
    intro: "Join our team and help shape the future of technology!"
  },
  footer: {
    description: "Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue."
  },
  whatWeOffer: {
    title: "WHAT WE OFFER",
    description: "Zerodevs works as an extension of your development and testing team. We will work together to solve your business cases and get the maximum value of your budget. One of our differentiating qualities is that we take the time to understand the particular challenges, difficulties, and needs of your business.",
    items: [
      {
        title: "Qualified Engineers",
        text: "Zerodevs is a team of 350+ software experts. We continue to strive in being the best in the industry by hiring engineers from renowned universities. Having team members experienced in a wide range of technology stacks enables us to meet different customers needs."
      },
      {
        title: "Dedicated Team",
        text: "Our in-house team is yours too. We will jump in and ramp up quickly. Your goals become our goals. We will navigate the risks of software development together."
      },
      {
        title: "Collaborative Process",
        text: "We work as an extension of your team, not as a vendor. We help you to participate in a deeply collaborative process to develop the desired product. We will be in constant communication with your team every step of the way."
      },
      {
        title: "Continuous Supervision",
        text: "A project manager will be involved in the entire lifecycle of your project to plan, organize, control, and deploy key deliverables according to your desired milestones, including process improvement analysis and implementation."
      },
      {
        title: "Global Talent Hiring",
        text: "Zerodevs connects you with top global talent, ensuring you have access to the best engineers and specialists for your unique business needs, no matter where you are."
      },
      {
        title: "SaaS Product Development",
        text: "From ideation to launch, Zerodevs helps you build scalable, secure, and user-friendly SaaS products tailored to your market and business goals."
      }
    ]
  }
};

export default content;
