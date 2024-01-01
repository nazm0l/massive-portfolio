import Image from "next/image";

export default function ProjectDetails({ params }) {
  return (
    <>
      <section className="w-full h-60 bg-gradient-to-b from-purple-500 to-gray-100 grid items-center">
        <div className="container mx-auto ">
          <h1 className="text-4xl font-bold text-center">
            About Project {params.id}
          </h1>
        </div>
      </section>
      <section className="container mx-auto mt-10">
        <div className="flex">
          <div className="flex-1">
            <Image
              src="/images/quiz.png"
              alt="project image"
              width={500}
              height={500}
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold">Project Name</h1>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quidem, quos, quibusdam voluptatem voluptates
              voluptas, quod molestiae voluptate quas. Quisquam voluptatum,
              quidem, quos, quibusdam voluptatem voluptates voluptas, quod
              molestiae voluptate quas.
            </p>
            <div className="flex gap-2 mt-5">
              <div className="bg-gray-100 rounded-lg p-2">
                <Image src="/github.svg" alt="github" width={30} height={30} />
              </div>
              <div className="bg-gray-100 rounded-lg p-2">
                <Image src="/github.svg" alt="github" width={30} height={30} />
              </div>
            </div>
          </div>
        </div>
        <div className="grid place-items-center">
          <button className="bg-red-200 py-2 px-4 rounded-lg ">
            Click Here to Get Code
          </button>
        </div>
      </section>
    </>
  );
}
