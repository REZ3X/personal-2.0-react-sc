import React from "react";

function Footer() {
    return (
        <div className="border-t text-gray-400 text-sm py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} REZ3X and Xi4N. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;