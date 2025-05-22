import React from "react";
import {AiFillAppstore} from "react-icons/ai";
import {FaMobile, FaGlobe} from "react-icons/fa";
import {SiProgress, SiAntdesign} from "react-icons/si";
import Title from "../layouts/Title";
import Card from './Card';

// bg-[#3c6894]
// bg-[#7DA0C4]
const Features = () => {
  return ( 
    <section
      id="features"
      className="w-full bg-[#3c6894] py-20 border-b-[1px] border-b-black"
    > 
    <div className="w-[90%] mx-auto">


      <Title title="Features" des="What I do"/>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card title = "Business Strategy"
        des="Lorem ipsium dolla is herez to a chat convsertsation with you. Lorem ipsium dolla is herez to a chat convsertsation with you"/>
        <Card title = "Frontend Development"
        des="Lorem ipsium dolla is here to have a chat convsertsation with you.Lorem ipsium dolla is herez to a chat convsertsation with you " icon ={<AiFillAppstore/>}/>
        <Card title = "SEO Optimization"
        des="Lorem ipsium dolla is here to have a chat convsertsation with you.Lorem ipsium dolla is herez to a chat convsertsation with you " icon =
        {<SiProgress/>}/>
        <Card title = "AI Automation"
        des="Lorem ipsium dolla is here to have a chat convsertsation with you.Lorem ipsium dolla is herez to a chat convsertsation with you "
        icon =
        {<FaMobile/>}/>
        <Card title = "Backend Development"
        des="Lorem ipsium dolla is here to have a chat convsertsation with you.Lorem ipsium dolla is herez to a chat convsertsation with you " 
        icon =
        {<SiAntdesign/>}/>
        <Card title = "Computer Aided Designs"
        des="Lorem ipsium dolla is here to have a chat convsertsation with you.Lorem ipsium dolla is herez to a chat convsertsation with you "
        icon =
        {<FaGlobe/>}/>
      </div>
    </div>
    </section>
  );
};

export default Features;
