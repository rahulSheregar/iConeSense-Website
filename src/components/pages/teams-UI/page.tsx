"use client";
import { Tabs } from "../../ui/tabs";
import { HoverEffect } from "../../ui/card-hover-effect";
import {projects} from "./projects";

const Teams = () =>{
  const tabs = [
    {
      title: "Current Team",
      value: "Current Team",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 ">
          <p>/ iConSenSe Team</p>
          <CardHoverEffectDemo />
        </div>
      ),
    },
    {
      title: "Alumni",
      value: "Alumni",
      content: (
        <div className="w-full overflow-hidden relative  rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 ">
          <p>/ Our Alumni</p>
          <CardHoverEffectDemo />
        </div>
      ),
    },
  ];

  return (
    <div className="h-full md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-10" >
      <Tabs tabs={tabs} />
    </div>
  );
}

const CardHoverEffectDemo = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}


export default Teams;