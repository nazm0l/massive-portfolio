import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <section className="w-full h-96 md:h-[600px] px-5 md:px-0 bg-gradient-to-r from-white to-cyan-200 grid items-center overflow-hidden">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h2 className="text-3xl md:text-6xl font-bold ">
              Find your desired <br /> Web Project
            </h2>
            <p className="my-4">
              Largest project and components provider in Bangladesh
            </p>
            <Link href="projects">
              <button className="bg-red-700 py-2 px-5 rounded-lg font-semibold text-white flex gap-2 items-center hover:scale-105 duration-100 hover:bg-red-500">
                Explore Now
                <Image
                  src="/arrow-up-right-circle.svg"
                  alt="arrow"
                  width={17}
                  height={17}
                />
              </button>
            </Link>
          </div>
          <div className="hidden md:block">
            <Image src="/Logo.png" alt="logo" width={140} height={140} />
          </div>
        </div>
      </section>

      <section className="w-full py-10">
        <div className="container mx-auto p-5 md:p-0 md:flex md:justify-evenly gap-5 ">
          <div className="group bg-red-200 md:w-80 p-5 mb-2 md:mb-0 rounded-lg hover:bg-red-500 cursor-pointer">
            <Link href="projects">
              <div className="card-content grid items-center ">
                <h2 className="text-xl md:text-3xl font-bold text-center my-10 group-hover:text-white">
                  Projects
                </h2>
                <Image
                  src="/arrow-up-right-circle.svg"
                  alt="projects"
                  className="mx-auto group-hover:scale-105 duration-100"
                  width={40}
                  height={40}
                />
              </div>
            </Link>
          </div>
          <div className="group bg-red-200 md:w-80 p-5 mb-2 md:mb-0 rounded-lg hover:bg-red-500  cursor-pointer">
            <Link href="components">
              <div className="card-content grid items-center ">
                <h2 className="text-xl md:text-3xl font-bold text-center my-10 group-hover:text-white">
                  Components
                </h2>
                <Image
                  src="/arrow-up-right-circle.svg"
                  alt="projects"
                  className="mx-auto group-hover:scale-105 duration-100"
                  width={40}
                  height={40}
                />
              </div>
            </Link>
          </div>
          <div className="group bg-red-200 md:w-80 p-5 rounded-lg hover:bg-red-500 cursor-pointer">
            <Link href="about">
              <div className="card-content grid items-center ">
                <h2 className="text-xl md:text-3xl font-bold text-center my-10 group-hover:text-white">
                  Contacts
                </h2>
                <Image
                  src="/arrow-up-right-circle.svg"
                  alt="projects"
                  className="mx-auto group-hover:scale-105 duration-100"
                  width={40}
                  height={40}
                />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
