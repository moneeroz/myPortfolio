import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

const Project = ({ params }: Props) => {
  const slug = params.slug;

  const project = projects.find((project) => project.slug === slug);

  return (
    <div>
      {project && (
        <div>
          <header className="flex justify-between items-center">
            <h1 className="text-3xl font-extrabold drop-shadow bg-gradient-to-r from-purple-600 via-red-400 to-orange-400 bg-clip-text text-transparent">
              {project.name}
            </h1>
            <Link
              href={project.url}
              key={project.name}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 rounded-lg text-gray-500 font-bold whitespace-nowrap py-3 px-4 hover:text-gray-400 hover:bg-black transition hover:scale-105 duration-300 ease-in-out"
            >
              View Code
            </Link>
          </header>

          {/* content */}
          <div className="text-lg text-gray-700 mt-5">
            {project.description}
          </div>
          {/* images */}
          <div>
            <Image
              src={project.image}
              alt=""
              width={1920}
              height={1080}
              className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
