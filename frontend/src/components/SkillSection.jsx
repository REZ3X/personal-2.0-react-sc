import React from "react";
import skillData from "../utils/allSkill";

function SkillSection() {
    const skills = skillData();

    return (
        <div id="skill" className="rounded-lg border p-3">
            <h1 className="text-2xl font-bold mb-4 text-[#D1D1D1]">My Skill</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 cursor-pointer">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="group relative rounded-lg w-full h-48 bg-cover bg-center flex items-end p-4 text-white font-bold transition-transform duration-300 transform hover:scale-105"
                        style={{ backgroundImage: `url(${skill.imgUrl})` }}
                    >
                        <div className="rounded-lg absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0"></div>
                        <div className="relative z-10 bg-black bg-opacity-35 p-2 rounded transition-opacity duration-300 group-hover:opacity-0">
                            {skill.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillSection;