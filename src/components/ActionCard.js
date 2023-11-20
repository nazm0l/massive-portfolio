import Image from "next/image";
import Link from "next/link";

const ActionCard = ({ title }) => {
  return (
    <div className="group bg-red-200 md:w-80 p-5 mb-2 md:mb-0 rounded-lg hover:bg-red-500 cursor-pointer">
      <Link href="projects">
        <div className="card-content grid items-center ">
          <h2 className="text-xl md:text-3xl font-bold text-center my-10 group-hover:text-white">
            {title}
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
  );
};

export default ActionCard;
