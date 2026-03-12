import { FaGithub } from "react-icons/fa"
import { motion } from "framer-motion"

function Projects(){

return(

<section id="projects" className="projects">

<h2>Projects</h2>

<div className="projects-container">

<motion.div
className="project-card"
whileHover={{scale:1.05}}

>

<h3>Portfolio Website</h3>

<p>
Personal portfolio built using React.
</p>

<a href="https://github.com" className="project-btn">
<FaGithub/> View Code
</a>

</motion.div>

<motion.div
className="project-card"
whileHover={{scale:1.05}}

>

 <h3>A Blackjack Game using Clarity</h3>

<p>
A decentralized Blackjack game built on the Stacks blockchain.
</p>

<a href="https://github.com/Glyph303/Avangel" className="project-btn">
<FaGithub/> View Code
</a>

</motion.div>

<motion.div
className="project-card"
whileHover={{scale:1.05}}

>   

<h3>Hospital Management System</h3>

<p>
A simple  management project.
</p>

<a href="https://github.com/AditiiShikha/myhms_" className="project-btn">
<FaGithub/> View Code
</a>

</motion.div>

</div>

</section>

)

}

export default Projects
