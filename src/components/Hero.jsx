import { motion } from "framer-motion"
import profile from "../assets/profile.png"
function Hero() {

return (

<section className="hero">

<div className="hero-left">
  <img src={profile} alt="profile" className="hero-image"/>
</div>

<div className="hero-right">
<motion.h1 className="hero-title">

{"Hello, I'm Aditi.".split("").map((char, index) => (
<motion.span
key={index}
initial={{ opacity:0, y:40 }}
animate={{ opacity:1, y:0 }}
transition={{
delay:index * 0.05,
duration:0.4
}}
>
{char === " " ? "\u00A0" : char}
</motion.span>

))}

</motion.h1>

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.4}}

>

A passionate web developer creating modern
and clean web experiences using React and JavaScript.

</motion.p>

<div className="buttons">

<button className="primary"><a href="#contact">Get in touch</a></button> <button className="secondary"><a href="#projects">Explore</a></button>

</div>

</div>

</section>

)

}

export default Hero
