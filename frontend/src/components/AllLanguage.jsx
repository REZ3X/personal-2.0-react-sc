import React from "react";
import ProgrammingLanguage from "./ProgrammingLanguage";
import NationLanguage from "./NationLanguage";
import TraditionalLanguage from "./TraditionalLanguage";

function AllLanguage() {
    return (
        <div className="p-3 border rounded-lg pdl:max-w-[425px]">
            <h1 className="text-2xl font-bold mb-4 text-[#D1D1D1]">Languages</h1>
            <div className="flex flex-row pdl:flex-col gap-5">
                <div className="flex-1 border-r pdl:border-none border-gray-700 pr-4">
                    <ProgrammingLanguage />
                </div>
                <div className="flex-1 border-r pdl:border-none border-gray-700 pr-4">
                    <NationLanguage />
                </div>
                <div className="flex-1 pl-4">
                    <TraditionalLanguage />
                </div>
            </div>
        </div>
    );
}

export default AllLanguage;