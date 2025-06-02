import { Nav } from './components/Nav.js';
import './styles.css';
import { Hero } from './components/Hero.js';
import './components/Hero.css';
import { Section1 } from './components/Section1.js';
import './components/Section1.css';
import { Section1_5 } from './components/Section1_5.js';
import './components/Section1_5.css';
import { Section2 } from './components/Section2.js'; 
import './components/Section2.css';
import { Section3 } from './components/Section3.js';
import './components/Section3.css';
import { Footer } from './components/Footer.js';
import './components/Footer.css';

const root = document.getElementById('root');

root.appendChild(Nav());
root.appendChild(Hero());
root.appendChild(Section1());
root.appendChild(Section1_5());
root.appendChild(Section2());
root.appendChild(Section3());
root.appendChild(Footer());
