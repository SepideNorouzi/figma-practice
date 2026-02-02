import { useEffect, useState } from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  url: string;
  cover: string;
};

function Sidebar() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  return (
    <aside
      className="bg-green-200 shadow-lg  ml-0 
   flex flex-col gap-4 overflow-x-hidden overflow-y-auto p-4"
    >
      {projects.map((project) => (
        <div
          key={project.id}
          onClick={() => window.open(project.url, "_blank")}
          className="bg-white w-full rounded-2xl shadow-lg
          p-4 flex flex-col justify-center items-center gap-4 "
        >
          <img src={project.cover} alt={project.title} />
          <div className="flex flex-col justify-center items-center">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;
