import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Project = ({ project }) => {
  // console.log("project", project);
  return (
    <div className="flex flex-col items-center mb-7">
      {/* <h1>{project.title}</h1> */}

      <div className="w-full sm:w-[80%] lg:w-[60%] xl:w-full shadow-md hover:shadow-none z-0 bg-white rounded-md relative cursor-pointer group before:absolute before:top-0 hover:before:top-[10px] before:left-0 hover:before:left-[-10px] before:w-full before:h-full before:rounded-md before:bg-indigo-400 before:transition-all before:duration-300 before:z-[-1] after:w-full after:h-full after:absolute after:top-0 hover:after:top-[20px] after:left-0 hover:after:left-[-20px] after:rounded-md after:bg-indigo-300 after:z-[-2] after:transition-all after:duration-500 border-spacing-3 h-[570px]">
        {/*  image  */}
        <div className="h-[408px] overflow-hidden overflow-y-scroll scrollbar-hidden rounded-t-md border-b">
          {project.images.main && (
            <Image src={project?.images?.main} alt="Project Image" className="h-auto w-full" width={0} height={0} sizes="100w" />
          )}
        </div>

        {/*  contents  */}
        <div className="p-[28px] bg-white rounded-b-md ">
          <h3 className="text-[1.5rem] font-bold text-primaryColor">{project.title}</h3>
          <div className="flex gap-4 my-4">
            <Link href={project?.repository} target="_blank">
              <FiGithub />
            </Link>
            <Link href={project?.liveLink} target="_blank">
              <FaLink />
            </Link>
          </div>
          <div className="flex justify-center xl:justify-start gap-2 mt-2">
            {project?.tools?.map((tool) => (
              <span key={project?.tools?.indexOf(tool)} className="px-2 border border-primaryColor rounded-md text-sm xl:text-base">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
