
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import { color } from "framer-motion";

const AboutDetails = () => {
  const containerStyle = {
    padding: '1rem',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: 'yellow',
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
  };
  const headingStyle1 = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '1rem',
    textAlign: 'center',
  
  };

  const listStyle = {
    listStyleType: 'disc',
    paddingLeft: '1rem',
    color: 'white'
  };

  const listItemStyle = {
    marginBottom: '0.5rem',
  };

  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize ">
            About Me
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          I am a software developer with a strong focus on web development, cloud computing, and DevOps practices.
           I’ve worked with various technologies, including React.js, JavaScript, Express, Node.Js, gRPC, Kubernetes, and cloud platforms like GCP and AWS. 
           I’ve built microservices, integrated payment gateways, and developed applications like Connectify, a video conferencing app using WebRTC SDK.
During my internship at Upswing Cognitive Hospitality Solution, I gained hands-on experience with DevOps tools and gRPC API development. I’m also certified in Neo4j and AWS Cloud Foundations, and I recently participated in the GenAI Workshop, where I built a chatbot using LangChain and Neo4j.

Currently, I’m working on projects like CureWell, a health management system. I enjoy solving problems in areas like data structures, algorithms, and machine learning while staying up-to-date with modern tech stacks and tools.
          </p>
        </ItemLayout>

        {/* <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full   sm:text-5xs">
            Position Of Responsibility
          </p><br></br>
          <h6>DSW AMBASSADOR- Dean of Student Welfare Community</h6>
          <h6>Student Placement Representative-Placement Cell </h6>

        </ItemLayout> */}
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
      <div style={containerStyle}>
        <p style={headingStyle1}>Position Of Responsibility</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <strong>DSW AMBASSADOR</strong> - Dean of Student Welfare Community
          </li>
          <li style={listItemStyle}>
            <strong>Student Placement Representative</strong> - Placement Cell
          </li>
        </ul>
      </div>
    </ItemLayout>

        {/* <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xs sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout> */}

        {/* <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=codebucks27&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout> */}

        {/* <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=codebucks27&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout> */}

        {/* <ItemLayout className={"col-span-full"}>
        <div>
        <p className="font-semibold text-base">Skills</p>
        </div>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout> */}
        <ItemLayout className="col-span-full">
      <div style={containerStyle}>
        <p style={headingStyle}>Skills</p>
        <img
          style={imgStyle}
          src="https://skillicons.dev/icons?i=aws,bootstrap,css,docker,figma,firebase,git,github,html,kubernetes,linux,mongodb,mysql,nextjs,nodejs,npm,react,redux,sass,tailwind,vite,vscode"
          alt="Skills"
          loading="lazy"
        />
      </div>
    </ItemLayout>
    

        {/* <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=codebucks27&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout> */}

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
        <div style={containerStyle}>
        <p style={headingStyle}>Certifications</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <strong>Neo4j Certified Professional</strong>
          </li>
          <li style={listItemStyle}>
            <strong>AWS Academy Graduate - AWS Academy Cloud Foundations</strong>
          </li>
          <li style={listItemStyle}>
            <strong>AWS Academy Graduate - AWS Academy Introduction to Cloud Semester 1.</strong>
          </li>
          <li style={listItemStyle}>
            <strong>Awarded with Academic Scholarship twice by UPES for securing the highest GPA among my batch mates for the academic session 2021-22 & 222-23</strong>
          </li>
          <li style={listItemStyle}>
            <strong>Successfully completed a comprehensive 2023 DevOps Boot camp, organized by UPES in collaboration with INT. </strong>
          </li>
          <li style={listItemStyle}>
            <strong>Achieved a nationwide rank of 5341 in the CodeKaze’23 contest conducted by Coding Ninjas.</strong>
          </li>
        </ul>
      </div>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
