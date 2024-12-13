import React from "react";
import { FaReact, FaNode } from "react-icons/fa";
import { RiBootstrapLine, RiFirebaseLine, RiNextjsLine, RiTailwindCssLine, RiVercelLine } from "react-icons/ri";
import { AiOutlineHtml5, AiOutlinePython } from "react-icons/ai";
import { TbBrandCss3, TbBrandMongodb, TbBrandTypescript, TbCircleLetterF, TbCircleLetterM } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io";
import { TbCircleLetterC } from "react-icons/tb";
import { SiAntdesign, SiDaisyui, SiExpress, SiMongoose, SiNetlify, SiPostgresql } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const skills = [
  { name: "HTML", icon: AiOutlineHtml5 },
  { name: "CSS", icon: TbBrandCss3 },
  { name: "Javascript", icon: IoLogoNodejs },
  { name: "C / C++", icon: TbCircleLetterC },
  { name: "Python", icon: AiOutlinePython },
  { name: "React JS", icon: FaReact },
  { name: "Typescript", icon: TbBrandTypescript },
  { name: "Next JS", icon: RiNextjsLine }, // Replace with a proper Next.js icon if available
  { name: "Bootstrap", icon: RiBootstrapLine },
  { name: "Tailwind", icon: RiTailwindCssLine },
  { name: "Daisy UI", icon: SiDaisyui },
  { name: "Material UI", icon: TbCircleLetterM },
  { name: "Ant Design", icon: SiAntdesign },
  { name: "Flowbite", icon: TbCircleLetterF },
  { name: "Node JS", icon: FaNode },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: TbBrandMongodb },
  { name: "Mongoose", icon: SiMongoose },
  { name: "Firebase", icon: RiFirebaseLine },
  { name: "MySQL", icon: GrMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Netlify", icon: SiNetlify },
  { name: "Vercel", icon: RiVercelLine },
];

const Skills = () => {
  return (
    <div>
      <div>
        <div className="bg-white py-20 px-5 xl:p-20 xl:pb-10 border-b">
          <div>
            <h1 className="text-4xl font-semibold text-center">Skills</h1>
            <span className="w-20 h-1 mx-auto bg-primaryColor rounded block"></span>
          </div>
          <div className="mt-10 grid grid-cols-2 xl:grid-cols-7 gap-10 text-lg">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="flex border-2 border-primaryColor hover:border-primaryColor hover:bg-primaryColor 
                        hover:text-white duration-300 rounded-md p-4 font-medium"
                >
                  <Icon size={30} />
                  <p className="mx-4">{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
