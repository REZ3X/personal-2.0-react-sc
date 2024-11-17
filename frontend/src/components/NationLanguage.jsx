import React from "react";
import nationLanguage from "../utils/nationLanguage";

function NationLanguage() {
    const languages = nationLanguage();

    return (
        <div>
            <h2 className="text-xl font-bold mb-4 text-[#939393]">National</h2>
            <div className="flex flex-wrap gap-4 justify-center">
                {languages.map((language, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img
                            src={language.imgUrl}
                            alt={language.title}
                            className="w-12 h-12 object-contain mb-2"
                        />
                        <div className="text-center text-[#939393] font-bold text-xs">
                            {language.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NationLanguage;