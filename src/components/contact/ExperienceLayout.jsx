import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ExperienceLink = motion(Link);

const ExperienceLayout = ({ name, description, demoLink, position }) => {
  return (
    <ExperienceLink
      variants={item}
      href={demoLink}
      target={"_blank"}
    //   className=" text-sm md:text-base flex  items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
      className="text-sm md:text-base flex flex-col items-start justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex flex-col items-start justify-start w-full space-y-2">
        <h2 className="text-2xl font-bold text-blue-600">{name}</h2>
        <h4 className="text-lg italic text-white">{position}</h4>
        <ul className="list-disc list-inside text-yellow-600">
          {description.split("\n").map((line, index) => (
            <li key={index} className="mb-1">{line}</li>
          ))}
        </ul>
      </div>
      <div className="w-full mt-2 bg-transparent border-t border-dashed border-gray-300" />
    </ExperienceLink>
  );
};

export default ExperienceLayout;
