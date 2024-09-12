/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "E-Commerce Platform Development",
    description: "Developed an E-commerce platform with React.js for the frontend and Strapi for the backend, featuring a user-friendly catalog with categories such as Bluetooth speakers, headphones, and smartwatches. Integrated Stripe for secure payments and implemented a streamlined cart system and efficient product search to enhance user experience.",
    demoLink: "https://ecotracker.example.com",
  },
  {
    id: 2,
    name: "Automating Tetris Deployment",
    description: "Orchestrated the deployment pipeline for two Tetris game versions using ArgoCD, Terraform, and Jenkins, cutting deployment time by 50% and increasing frequency by 40%. Implemented Trivy scans and SonarQube integration to reduce vulnerabilities by 99.9% and ensure OWASP Top 10 compliance. Utilized Docker and AWS EKS for scalable, efficient deployment, optimizing resource use and system performance.",
    demoLink: "https://github.com/avnichauhan12/Tetris-Project",
  },
  {
    id: 3,
    name: " Rock Paper Scissors Game",
    description: "Developed a Rock Paper Scissors game using HTML, CSS, and JavaScript, offering real-time interactive engagement with near-instantaneous responses (usually <1 second).",
    demoLink: "https://avnichauhan12.github.io/Rock-PaPer-Scissor/",
  },
  {
    id: 4,
    name: "Three-Tier Web Application",
    description: "Orchestrated the deployment of a Three-Tier Web Application on AWS EKS using Terraform, AWS CLI, and Jenkins, cutting deployment time by 40% and reducing errors by 50%. Enhanced system reliability by 30% and decreased deployment failures by 25% through the implementation of Helm, Prometheus, Grafana, and ArgoCD for monitoring and GitOps practices.",
    demoLink: "https://github.com/avnichauhan12/TWSThreeTierAppChallenge",
  }
];
export const experienceData = [
  {
    id: 1,
    name: "Upswing-Cognitive Hospitality Solutions",
    description: "Developed a production-based highly secure, scalable, and SSH-certified database microservice using MongoDB, deployed on Google Kubernetes Engine (GKE), and hosted on Google Cloud Platform (GCP). The service is platform-independent, capable of running on any cloud platform and local machines, utilizing persistent SSD volumes for data storage, ensuring 99.9% uptime.\n Deployed Helm charts for Grafana and Prometheus, enabling robust monitoring for over 500 microservices.\n Implemented gRPC for backend APIs, handling over 1000 requests per second, ensuring efficient inter-service communication.",
    demoLink: "https://ecotracker.example.com",
    position: "Software Developer Intern"
  },
  {
    id: 2,
    name: "PwC",
    description: "Gained comprehensive knowledge of IT infrastructure, cybersecurity principles, and relational database management systems (RDBMS), with hands-on experience in SQL, database design, normalization, and optimization techniques.\n Developed skills in designing and building data pipelines, implementing ETL processes, and working with data warehousingconcepts and big data technologies for efficient data collection, processing, and analysis",
    demoLink: "https://drive.google.com/file/d/15-XAzERaM-J-NW5_6CFu_b2-EC4foQRy/view?usp=sharing",
    position: "Intern Trainee’24"
  }
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  // { label: "Experience", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/avnichauhan127",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/avni-chauhan-52518723b/",
    icon: "linkedin",
    newTab: true,
  },
  // {
  //   label: "X",
  //   link: "https://www.x.com/code_bucks",
  //   icon: "twitter",
  //   newTab: true,
  // },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];


