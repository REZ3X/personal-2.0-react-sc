import React from "react";
import { createRoot } from 'react-dom/client';
import "./styles/style.css";
import PersonalApp from "./components/PersonalApp";

const root = createRoot(document.getElementById('root'));
root.render(<PersonalApp/>);