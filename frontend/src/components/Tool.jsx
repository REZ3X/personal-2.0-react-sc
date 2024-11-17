import React from "react";
import tools from "../utils/allTools";

function Tool() {
    const toolList = tools();

    return (
        <div className="p-3 border rounded-lg">
            <h1 className="text-2xl font-bold mb-4 text-[#D1D1D1]">Tools</h1>
            <div className="flex flex-wrap gap-4 justify-center">
                {toolList.map((tool, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img
                            src={tool.imgUrl}
                            alt={tool.title}
                            className="w-12 h-12 object-contain mb-2"
                        />
                        <div className="text-center text-[#939393] font-bold text-xs">
                            {tool.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tool;