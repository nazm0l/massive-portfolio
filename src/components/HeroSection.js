import Image from "next/image";
import Link from "next/link";
import HeroImg from "../../public/images/hero-img.svg";

const HeroSection = () => {
  return (
    <section className="w-full h-96 md:h-[600px] px-5 md:px-0 bg-gradient-to-r from-cyan-100 to-white grid items-center overflow-hidden">
      <div className="container px-5 mx-auto flex justify-between items-center">
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
          <Image src={HeroImg} alt="hero" width={500} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
