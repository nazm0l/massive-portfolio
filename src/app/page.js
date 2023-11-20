import ActionCard from "@/components/ActionCard";
import HeroSection from "@/components/HeroSection";
import RatingsCard from "@/components/RatingsCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <section className="w-full py-10 md:py-20">
        <div className="container mx-auto p-5 md:p-0 md:flex md:justify-evenly gap-5 ">
          <ActionCard title="Projects" />
          <ActionCard title="Components" />
          <ActionCard title="Contacts" />
        </div>
      </section>
      <section className="bg-slate-100 py-10 md:py-20">
        <div className="flex gap-5  overflow-x-scroll">
          <RatingsCard
            name="John Doe"
            title="CEO of Facebook"
            desc="Lorem ipsum dolor ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            star="5"
          />
          <RatingsCard
            name="John Doe"
            title="CEO of Facebook"
            desc="Lorem ipsum dolor ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            star="5"
          />
          <RatingsCard
            name="John Doe"
            title="CEO of Facebook"
            desc="Lorem ipsum dolor ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            star="5"
          />
        </div>
      </section>
    </main>
  );
}
