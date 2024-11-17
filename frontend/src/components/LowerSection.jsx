import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";

function LowerSection() {
    return (
        <div id="contact" className="rounded-lg border tdn:w-[290px] pdl:w-[345px]">
            <Contact />
            <Footer />
        </div>
    );
}

export default LowerSection;