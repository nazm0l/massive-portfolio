"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const demoData = [
  {
    name: "John Doe",
    title: "CEO",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    ratings: 4,
  },
  {
    name: "John Coral",
    title: "SEO",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    ratings: 3.5,
  },
  {
    name: "Fokrul Doe",
    title: "CEO",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    ratings: 4.5,
  },
  {
    name: "Sadhon Doe",
    title: "CEO of Doe",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    ratings: 5,
  },
  {
    name: "Md Najmul Doe",
    title: "CEO of Tesla",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    ratings: 4,
  },
  {
    name: "John Doe",
    title: "CEO",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    ratings: 3,
  },
  {
    name: "John Doe",
    title: "CEO",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    ratings: 1,
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
          slidesPerView: 4,
          spaceBetween: 30,
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
                <p className="flex justify-center font-bold mt-5">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                      width={20}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                      width={20}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                      width={20}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                      width={20}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                      width={20}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </div>
                  ({item.ratings})
                </p>
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
