import React from "react";
import webData from "../utils/projectsWeb";

function ProjectsWebList() {
    const webProjects = webData();

    return (
        <div>
            <h2 className="text-xl font-bold mb-4 text-[#939393]">Web Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 cursor-pointer">
                {webProjects.map((project, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div
                            className="group relative rounded-lg w-full h-48 bg-cover bg-center flex flex-col justify-end p-4 text-white font-bold transition-transform duration-300 transform hover:scale-105"
                            style={{ backgroundImage: `url(${project.imgUrl})` }}
                        >
                            <div className="rounded-lg absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0"></div>
                            <div className="relative z-10 bg-black bg-opacity-35 p-2 rounded transition-opacity duration-300 group-hover:opacity-0">
                                <div className="text-lg font-bold">{project.title}</div>
                                <div className="text-sm">{project.material}</div>
                            </div>
                        </div>
                        {project.url && (
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#574949] hover:bg-[#313131] text-white px-4 py-2 rounded mt-2 inline-block"
                            >
                                Visit
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectsWebList;