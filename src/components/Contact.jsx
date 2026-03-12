import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { motion } from "framer-motion"

function Contact(){

return(

<section id="contact" className="contact">

{/* background shapes */}

<div className="bg-circle c1"></div>
<div className="bg-circle c2"></div>
<div className="bg-circle c3"></div>

<h2>Contact</h2>

<motion.div
className="contact-card"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
whileHover={{scale:1.05}}

>

<div className="contact-icon">
<FaEnvelope/>
</div>

<h3>Aditi</h3>

<p>Second Year Computer Science Student</p>

<div className="contact-links">

<a href="mailto:srivastavaaaditya3112@gmail.com">
<FaEnvelope/> Email
</a>

<a href="https://github.com/Aaditya311206">
<FaGithub/> GitHub
</a>

<a href="https://linkedin.com">
<FaLinkedin/> LinkedIn
</a>

</div>

</motion.div>

</section>

)

}

export default Contact
