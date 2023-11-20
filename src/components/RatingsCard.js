import Image from "next/image";

const RatingsCard = ({ name, title, desc, star }) => {
  return (
    <div className="ratingsCard w-80 rounded-lg bg-lime-400">
      <div className="p-10">
        <div className="flex gap-2 items-center">
          <Image src="/fb-icon.svg" alt="user" width={40} height={40} />
          <div>
            <h4 className="text-xl font-bold">{name}</h4>
            <p className="text-sm">{title}</p>
          </div>
        </div>
        <div className="mt-3">
          <p className="text-justify">{desc}</p>
          <p className="text-center mt-5">*****({star})</p>
        </div>
      </div>
    </div>
  );
};

export default RatingsCard;
