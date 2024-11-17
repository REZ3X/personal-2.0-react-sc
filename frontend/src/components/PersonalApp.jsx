import React, { useState, useEffect } from "react";
import TopSection from "./TopSection";
import DescriptionSection from "./DescriptionSection";
import AlterEgo from "./AlterEgo";
import SkillSection from "./SkillSection";
import AllLanguage from "./AllLanguage";
import Tool from "./Tool";
import Certificate from "./Certification";
import ProjectContainer from "./ProjectContainer";
import LowerSection from "./LowerSection";
import NavDesktop from "./NavDesktop";
import Alert from "./Alert";
import Loader from "./Loader";
import '../styles/style.css';
import NavMobile from "./NavMobile";

function PersonalApp() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => setLoading(false);

        window.addEventListener('load', handleLoad);

        return () => window.removeEventListener('load', handleLoad);
    }, []);

    return (
        <div className="ttl:mb-10 pdn:mb-14 relative flex flex-row max-w-[780px] pdl:max-w-[425px] pdn:max-w-[410px] justify-center items-center min-h-screen align-center">
            {loading && <Loader />}
            <main id="about" className={`flex flex-col m-5 p-5 ttl:m-0 pdl:items-center gap-4 rounded-2xl align-center justify-center max-w-[700px] pdl:max-w-[425px] ttl:max-w-[375px] tdn:max-w-[320px] bg-[#151515] pdl:opacity-100  ${loading ? 'opacity-30' : 'opacity-100'}`}>
                <TopSection />
                <DescriptionSection />
                <AlterEgo />
                <SkillSection />
                <AllLanguage />
                <Tool />
                <Certificate />
                <ProjectContainer />
                <LowerSection />
            </main>
            <nav>
                <NavDesktop />
                <NavMobile />
                <Alert />
            </nav>
        </div>
    );
}

export default PersonalApp;