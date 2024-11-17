import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Contact() {
    return (
        <div className="p-6 pdl:p-3 text-white">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <img src="" className="w-32 h-auto" />
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <div>
                        <h2 className="text-lg font-bold mb-2">Contact Me</h2>
                        <p>Email: contact@example.com</p>
                        <p>Telephone: +62 821 xxxx xxxx</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold mb-2">Follow Me</h2>
                        <div className="flex gap-3">
                            <a href="https://www.instagram.com/rejakasusanto?igsh=dnZlZ25uZ2xuNzU1" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-instagram w-6 h-6"></i>
                            </a>
                            <a href="https://www.facebook.com/rejaka.susanto?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-facebook w-6 h-6"></i>
                            </a>
                            <a href="https://github.com/REZ3X" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-github w-6 h-6"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/rejaka-abimanyu-susanto-6713482b6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bw8HAD7wvSnSWvKkQO%2FkpFg%3D%3D" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-linkedin w-6 h-6"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold mb-2">Other</h2>
                        <ul>
                            <li><a href="https://links.xian.my.id" target="_blank" className="hover:underline">Links</a></li>
                            <li><a href="https://blogrezex.wordpress.com" target="_blank" className="hover:underline">Blog</a></li>
                            <li><a href="https://wa.me/62xxxxxx" target="_blank" className="hover:underline">Whatsapp</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;