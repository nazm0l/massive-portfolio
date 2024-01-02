"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const demoData = [
  {
    name: "John Doe",
    title: "CEO",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    name: "John Coral",
    title: "SEO",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    name: "Fokrul Doe",
    title: "CEO",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    name: "Sadhon Doe",
    title: "CEO of Doe",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    name: "Md Najmul Doe",
    title: "CEO of Tesla",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    name: "John Doe",
    title: "CEO",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    name: "John Doe",
    title: "CEO",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

const RatingsCard = ({ name, title, desc, star }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {demoData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="ratingsCard w-full md:w-72 rounded-lg bg-lime-400">
            <div className="p-10">
              <div className="flex gap-2 items-center">
                <Image src="/fb-icon.svg" alt="user" width={40} height={40} />
                <div>
                  <h4 className="text-xl font-bold">{item.name}</h4>
                  <p className="text-sm">{item.title}</p>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-justify">{item.desc}</p>
                <p className="text-center mt-5">*****({star})</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      ...
    </Swiper>
  );
};

export default RatingsCard;
