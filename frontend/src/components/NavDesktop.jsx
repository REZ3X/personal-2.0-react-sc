import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

function NavDesktop() {
    return (
        <nav className="fixed pdl:hidden top-0 h-[590px] w-20 m-5 p-5 gap-4 rounded-2xl bg-[#151515] text-white flex flex-col items-center py-4">
            <div className="flex flex-col items-center gap-6">
                <a href="#about" className="flex flex-col items-center">
                    <i className="bi bi-person-circle text-4xl"></i>
                    <span className="text-xs mt-1">About</span>
                </a>
                <a href="#skill" className="flex flex-col items-center">
                    <i className="bi bi-tools text-4xl"></i>
                    <span className="text-xs mt-1">Skill</span>
                </a>
                <a href="#projects" className="flex flex-col items-center">
                    <i className="bi bi-folder text-4xl"></i>
                    <span className="text-xs mt-1">Projects</span>
                </a>
                <a href="#contact" className="flex flex-col items-center">
                    <i className="bi bi-envelope text-4xl"></i>
                    <span className="text-xs mt-1">Contact</span>
                </a>
                <a href="https://links.xian.my.id" target="_blank" className="flex flex-col items-center">
                    <i className="bi bi-link-45deg text-4xl"></i>
                    <span className="text-xs mt-1">Links</span>
                </a>
                <div className="mt-[-10px] pt-3 border-t flex-col flex gap-2">
                    <img src="/x-ireng.png" className="w-20"/>
                    <img src="/react-white.png" className="w-20"/>
                    <img src="https://www.loopple.com/img/tailwind-logo.png" className="w-20"/>
                </div>
            </div>
        </nav>
    );
}

export default NavDesktop;