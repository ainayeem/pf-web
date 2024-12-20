import React from "react";
import { promises as fs } from "fs";
// import path from "path";
import Project from "./Project";

// structure of project
interface ProjectType {
  id: number;
  title: string;
  tools: string[];
  details: string;
  images: {
    main: string;
  };
  repository: string;
  liveLink: string;
}

const Projects = async () => {
  // Load and parse the projects JSON file
  // const file = await fs.readFile(path.join(process.cwd(), "projects.json"), "utf8");
  // const projects: ProjectType[] = JSON.parse(file);
  const file = await fs.readFile(process.cwd() + "/projects.json", "utf8");
  const projects = JSON.parse(file);
  // console.log("projects", projects);
  return (
    <div>
      <div>
        <div>
          <div className="px-5 xl:p-20 xl:pb-20 border-b">
            <div>
              <h1 className="text-4xl font-semibold text-center">Projects</h1>
              <span className="w-20 h-1 mx-auto bg-primaryColor rounded block"></span>
            </div>

            <div className="my-10 grid grid-cols-1 xl:grid-cols-2 gap-10 text-lg">
              {projects.map((project: ProjectType) => (
                <Project key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
