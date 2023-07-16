import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Link
          href={`/projects/${project.slug}`}
          key={project.name}
          className="rounded-lg p-1 hover:border hover:border-gray-400 transition hover:scale-105 duration-300 ease-in-out"
        >
          <div className="">
            {project.image && (
              <Image
                src={project.image}
                alt=""
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}

            <h3 className="mt-2">
              <span className=" font-extrabold bg-gradient-to-r from-purple-600 via-red-400 to-orange-400 bg-clip-text text-transparent">
                {project.name}
              </span>
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
