import { motion } from "framer-motion"
function About() {
    return (
     <motion.section
className="about"
initial={{ opacity: 0, y: 100 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
>


            <h2>About Me</h2>

            <p>
                Hi, I'm Aditi. I am a second year Computer Science student.
                I enjoy building websites using React and JavaScript.
                I like learning new technologies and creating clean UI designs.
            </p>

  </motion.section>
    )
}

export default About
