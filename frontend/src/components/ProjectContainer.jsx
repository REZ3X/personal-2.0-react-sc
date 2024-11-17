import React from "react";
import ProjectsWebList from "./ProjectsWebList";
import ProjectsNovelList from "./ProjectsEnovelList";
import ProjectsEbookList from "./ProjectsEbookList";

function ProjectContainer() {
    return (
        <div id="projects" className="p-3 border rounded-lg">
            <h1 className="text-2xl font-bold mb-4 text-[#D1D1D1]">Projects</h1>
            <div className="flex flex-col gap-4">
                <ProjectsWebList />
                <div className="border-t p-2 flex flex-row w-full items-center justify-center gap-8">
                    <ProjectsNovelList />
                    <ProjectsEbookList />
                </div>
            </div>
        </div>
    );
}

export default ProjectContainer;