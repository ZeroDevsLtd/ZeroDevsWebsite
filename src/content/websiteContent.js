// All static website text/content for easy editing
// Example structure: { section: { key: "Text..." } }

const content = {
  navbar: {
    home: "Home",
    about: "About Us",
    services: "Services",
    products: "Products",
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
      },
      {
        title: "Global Talent Hiring",
        text: "We connect companies worldwide with top-tier talent, offering flexible hiring solutions for both permanent and contract-based roles. Our global network ensures you have access to the right experts to drive your business forward, wherever you are."
      },
      {
        title: "SaaS Product Development",
        text: "We build and sell innovative SaaS products, and also create custom feature-rich solutions tailored to your business needs. Whether you need a ready-to-use platform or a bespoke product, our team delivers scalable, secure, and user-friendly software."
      }
    ]
  },
  products: {
    title: "Our Products",
    description: "Explore our suite of innovative products, each designed to solve real-world problems and empower businesses and individuals to achieve more.",
    stats: [
      { label: "Products Launched", value: 3 },
      { label: "Active Users", value: "10,000+" },
      { label: "Countries Served", value: 12 },
      { label: "Years of Innovation", value: 5 }
    ],
    items: [
      {
        name: "InverseMe",
        url: "https://inverseme.com",
        summary: "A powerful, privacy-focused social platform for sharing thoughts, connecting with like-minded people, and building your personal brand.",
        features: [
          "Real-time content sharing and discovery",
          "Advanced privacy controls for users",
          "Personalized feeds and trending topics",
          "Community building tools and analytics",
          "Mobile-first, responsive design"
        ],
        image: null // Add image path if available
      },
      {
        name: "SchoolMS",
        url: "https://schoolms.zerodevs.com",
        summary: "A comprehensive school management system that streamlines administration, communication, and learning for modern educational institutions.",
        features: [
          "Student enrollment and records management",
          "Attendance tracking and reporting",
          "Online gradebooks and assessments",
          "Parent-teacher communication portal",
          "Timetable and event scheduling",
          "Secure cloud-based access"
        ],
        image: null
      },
      {
        name: "BR Pakshi",
        url: "https://brpakshi.zerodevs.com",
        summary: "A robust business resource platform for managing operations, inventory, and customer relationships, tailored for growing enterprises.",
        features: [
          "Inventory and order management",
          "Customer relationship management (CRM)",
          "Sales and purchase analytics dashboard",
          "Multi-user roles and permissions",
          "Automated invoicing and billing",
          "Integration with popular accounting tools"
        ],
        image: null
      }
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
    address: "A108 Adam Street, New York, NY 535022, United States\nDevelopment Center: 36/18, S-11, Uttara, Dhaka 1230",
    phone: "+880 1521 415838",
    email: "info@zerodevs.com"
  },
  career: {
    title: "Open Positions",
    intro: "Join our team and help shape the future of technology!"
  },
  footer: {
    description: "ZeroDevs is your global partner for innovative software solutions. With a presence in New York and Dhaka, we empower businesses worldwide through custom development, SaaS products, and access to top-tier talent. Our expert team is dedicated to delivering quality, fostering long-term partnerships, and helping you scale and succeed in today’s digital world."
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
