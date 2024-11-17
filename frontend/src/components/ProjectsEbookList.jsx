import React from "react";
import ebookData from "../utils/projectsEbook";

function ProjectsEbookList() {
    const ebooks = ebookData();

    return (
        <div>
            <h2 className="text-xl font-bold mb-4 text-[#939393]">E-Books</h2>
            <div className="flex flex-wrap gap-4 justify-center">
                {ebooks.map((ebook, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img
                            src={ebook.imgUrl}
                            alt={ebook.title}
                            className="w-48 h-auto rounded-xl object-cover mb-2"
                        />
                        <div className="text-center text-[#939393] font-bold text-xs">
                            {ebook.title}
                        </div>
                        <div className="text-center text-[#939393] font-bold text-xs">
                            {ebook.status}
                        </div>
                        <a
                            href={ebook.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#574949] hover:bg-[#313131] text-white px-4 py-2 rounded mt-2 inline-block"
                        >
                            Read Now
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectsEbookList;