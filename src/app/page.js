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
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center">
            Our Satisfied Users
          </h2>
          <p className="text-center mt-2">
            Here is review of our users, who download and use our projects
          </p>
        </div>
        <div className="container mx-auto flex gap-5 overflow-hidden">
          <RatingsCard />
        </div>
      </section>
    </main>
  );
}
