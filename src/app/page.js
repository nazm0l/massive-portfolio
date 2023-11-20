import ActionCard from "@/components/ActionCard";
import HeroSection from "@/components/HeroSection";

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
    </main>
  );
}
