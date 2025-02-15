import React from "react";
import {AiFillAppstore} from "react-icons/ai";
import {FaMobile, FaGlobe} from "react-icons/fa";
import {SiProgress, SiAntdesign} from "react-icons/si";
import Title from "../layouts/Title";
import Card from './Card';


const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    > 
      <Title title="Features" des="What I do"/>

      <div className="grid grid-cols-3 gap-20">
        <Card title = "Business Strategy"
        des="Lorem ipsium dolla is herez to have a chat convsertsation with you. I hope you will ready to have her in your living room"/>
        <Card title = "App Devlopment"
        des="Lorem ipsium dolla is here to have a chat convsertsation with you. I hope you will ready to have her in your living room" icon ={<AiFillAppstore/>}/>
        <Card title = "SEO Optimization"
        des="Lorem ipsium dolla is here to have a chat convsertsation with you. I hope you will ready to have her in your living room" icon =
        {<SiProgress/>}/>
        <Card title = "Mobile Development"
        des="Lorem ipsium dolla is here to have a chat convsertsation with you. I hope you will ready to have her in your living room"
        icon =
        {<FaMobile/>}/>
        <Card title = "UI/UX Design"
        des="Lorem ipsium dolla is here to have a chat convsertsation with you. I hope you will ready to have her in your living room" 
        icon =
        {<SiAntdesign/>}/>
        <Card title = "Business Strategy"
        des="Lorem ipsium dolla is here to have a chat convsertsation with you. I hope you will ready to have her in your living room"
        icon =
        {<FaGlobe/>}/>
      </div>
    </section>
  );
};

export default Features;
