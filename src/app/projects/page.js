import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Projects | Md Najmul Hossen",
  description: "Download your favorite projects from Md Najmul Hossen",
};

const projects = [
  {
    id: 1,
    title: "Quiz App Bash",
    description:
      "A quiz app which is build on bash programming. It's a simple quiz app. You can play this game on your terminal.",
    technologies: [
      {
        id: 1,
        name: "Bash",
      },
      {
        id: 2,
        name: "Shell",
      },
    ],
  },
  {
    id: 2,
    title: "Shopping Cart",
    description:
      "A shopping app which is build on bash programming. It's a simple quiz app. You can play this game on your terminal.",
    technologies: [
      {
        id: 1,
        name: "C",
      },
      {
        id: 2,
        name: "Terminal",
      },
    ],
  },
  {
    id: 3,
    title: "Medicine Store",
    description:
      "A medicine store app which is build on bash programming. It's a simple quiz app. You can play this game on your terminal.",
    technologies: [
      {
        id: 1,
        name: "Shell",
      },
      {
        id: 2,
        name: "Bash",
      },
    ],
  },
];

const ProjectPage = () => {
  return (
    <>
      <section className="w-full h-60 bg-gradient-to-b from-purple-500 to-gray-100 grid items-center">
        <div className="container mx-auto ">
          <h1 className="text-4xl font-bold text-center">Projects</h1>
        </div>
      </section>
      <section className="py-20">
        {/* project card here  */}
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <Link href={`/projects/${project.id}`} key={project.id}>
                <div className="projectCard bg-white rounded-lg shadow-lg">
                  <div className="p-5">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-gray-500">
                      {project.description.substring(0, 100) + "..."}
                    </p>
                  </div>
                  <div className="p-5">
                    <div className="flex gap-2">
                      <div className="bg-gray-100 rounded-lg p-2">
                        <Image
                          src="./images/github-icon.svg"
                          alt="github"
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className="bg-gray-100 rounded-lg p-2">
                        <Image
                          src="./images/github-icon.svg"
                          alt="github"
                          width={30}
                          height={30}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
