// NavMobile.jsx
import React from "react";

function NavMobile() {
    return (
        <nav className="fixed gedhe:hidden bottom-0 left-0 right-0 ttl:w-[375px] h-[60px] bg-[#151515] text-white flex flex-row justify-around tdn:max-w-[320px] items-center py-4 z-50">
            <a href="#abt" className="flex flex-col items-center ">
                <i className="bi bi-person-circle text-2xl tdn:text-lg"></i>
                <span className="text-xs mt-1">About</span>
            </a>
            <a href="#skill" className="flex flex-col items-center ">
                <i className="bi bi-tools text-2xl tdn:text-lg"></i>
                <span className="text-xs mt-1">Skill</span>
            </a>
            <a href="#projects" className="flex flex-col items-center">
                <i className="bi bi-folder text-2xl tdn:text-lg"></i>
                <span className="text-xs mt-1">Projects</span>
            </a>
            <a href="#contact" className="flex flex-col items-center ">
                <i className="bi bi-envelope text-2xl tdn:text-lg"></i>
                <span className="text-xs mt-1">Contact</span>
            </a>
            <a href="https://links.xian.my.id" target="_blank" className="flex flex-col items-center tdn:hidden">
                <i className="bi bi-link-45deg text-2xl tdn:text-lg"></i>
                <span className="text-xs mt-1">Links</span>
            </a>
        </nav>
    );
}

export default NavMobile;