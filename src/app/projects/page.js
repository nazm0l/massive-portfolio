import Image from "next/image";

export const metadata = {
  title: "Projects | Md Najmul Hossen",
  description: "Download your favorite projects from Md Najmul Hossen",
};

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
        <div className="container mx-auto px-5 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="projectCard bg-white rounded-lg shadow-lg">
              <div className="p-5">
                <h3 className="text-xl font-bold">Quiz App Bash</h3>
                <p className="text-gray-500">
                  A quiz app which is build on bash programming. It&apos;s a
                  simple quiz app. You can play this game on your terminal.
                </p>
              </div>

              <div className="p-5">
                <div className="flex gap-2">
                  <div className="bg-gray-100 rounded-lg p-2">
                    <Image
                      src="/github.svg"
                      alt="github"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-2">
                    <Image
                      src="/github.svg"
                      alt="github"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="projectCard bg-white rounded-lg shadow-lg">
              <div className="p-5">
                <h3 className="text-xl font-bold">Project Name</h3>
                <p className="text-gray-500">Project Description</p>
              </div>
              <div className="p-5">
                <div className="flex gap-2">
                  <div className="bg-gray-100 rounded-lg p-2">
                    <Image
                      src="/github.svg"
                      alt="github"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-2">
                    <Image
                      src="/github.svg"
                      alt="github"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="projectCard bg-white rounded-lg shadow-lg">
              <div className="p-5">
                <h3 className="text-xl font-bold">Project Name</h3>
                <p className="text-gray-500">Project Description</p>
              </div>
              <div className="p-5">
                <div className="flex gap-2">
                  <div className="bg-gray-100 rounded-lg p-2">
                    <Image
                      src="/github.svg"
                      alt="github"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-2">
                    <Image
                      src="/github.svg"
                      alt="github"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
