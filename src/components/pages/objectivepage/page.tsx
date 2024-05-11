// src/app/pages/objectivepage/page.tsx

import { twMerge } from "tailwind-merge";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "../../ui/tracing-beam";

const ObjectivePage = () => {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        <h2 className={twMerge("text-2xl mb-4")}>/ OBJECTIVES</h2>
        <p className={twMerge("text-lg mb-4")}>
          The iConSenSe Lab is committed to hosting an academic research center that provides a stimulating scientific environment for Architecture, Engineering, Construction, and Facility Management researchers who strive towards advancements in effective Collaboration, Globalization, Technical Awareness, and Learning.
        </p>
      </div>
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div
            key={`content-${index}`}
            className={`mb-10 flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {item?.image && (
              <div className="md:w-3/5 mr-4">
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="800"
                  width="1000"
                  className="rounded-lg object-cover"
                />
              </div>
            )}

            <div className={`md:w-2/5 mr-4 ${index % 2 !== 0 ? "text-right" : ""}`}>
              <p className={twMerge("text-xl mb-4")}>{item?.title}</p>

              <div className="text-sm prose prose-sm dark:prose-invert">
                {item?.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
};

export default ObjectivePage;

const dummyContent = [
  {
    title: "Seamless Integration",
    description: (
      <>
        <p>
          By enabling changes using an effective interface through a virtual environment during the design, construction, and operation of projects. We believe in the collection, accumulation, and adoption of technologies by pooling resources. Enabling the students and faculty to collaborate and explore advancements in the field.
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Adoption",
    description: (
      <>
        <p>
          Appropriate, adopt, and deploy technology to enable an effective interfacing of connected groups of actors and members of the community to more intelligently reach solutions, solve problems, and reach consensus. Collaborating with faculty and students to develop and advance with greater success.
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Awareness",
    description: (
      <>
        <p>
          Enhance awareness of civil and construction project information through better-connected teams and savvy users to increase productivity and reduce the use of natural resources for enhancing sustainability practices. The end goal is to create awareness and gather the best talents for effective Collaboration, Globalization, Technical Awareness, and Learning.
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Advancements",
    description: (
      <>
        <p>
          Advance and incorporate new and transformative technologies and theoretical approaches in informatics and civil and construction engineering. Examples are making use of recent developments in automation and augmented reality and virtual reality to find better and optimized solutions.
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
