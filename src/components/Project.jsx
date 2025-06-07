import React from "react";
import ProjectsData from "./projects/ProjectsData";

function Project() {
  return (
    <div
      id="Project"
      className="min-h-screen w-full flex flex-col justify-center items-center gap-20 p-10 md:p-16 xl:p-32  "
    >
      <h1 className="text-center text-5xl font-light">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <ProjectsData />
      </div>
    </div>
  );
}

export default Project;
