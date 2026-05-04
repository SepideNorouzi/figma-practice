import React from "react";
import { skills } from "../constants/skills";

function Skills() {
  return (
    <section className="flex flex-col items-center mb-4">
      <h1 font-semibold>Skills</h1>

      <div className="flex flex-row justify-between gap-4 overflow-x-auto overflow-y-hidden whitespace-nowrap py-5 px-12 w-full">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center ml-4 mr-4 "
          >
            <div className="bg-gray-200 w-20 h-20 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-full h-full object-cover"
              />
            </div>

            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
