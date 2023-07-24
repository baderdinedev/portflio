import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe} from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
      <Card 
          title="Web Developement"
          des="azdazazda"
          icon={<AiFillAppstore />}
       />
        <Card 
          title="Web Designer"
          des="azdazazda"
          icon={<AiFillAppstore />}
       />
        <Card 
          title="Laravel Developer"
          des="azdazazda"
          icon={<AiFillAppstore />}
       />
        <Card 
          title="Full Stack Web Developer"
          des="azdazazda"
          icon={<AiFillAppstore />}
       />
        <Card 
          title="WEB3.0 Developer"
          des="azdazazda"
          icon={<AiFillAppstore />}
       />
        <Card 
          title="Marketing Degital"
          des="azdazazda"
          icon={<AiFillAppstore />}
       />                     
      </div>
    </section>
  )
}

export default Features