import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-[70px] bg-gradient-to-r from-[#ff1e1e] to-[#ff8079] text-white overflow-hidden flex">
      <div className="container px-5 mx-auto flex justify-between items-center">
        <div>
          {/* <Image src="/logo.png" alt="logo" width={50} height={50} /> */}
          <Link href="/">
            <h2 className="font-bold text-2xl">Md Najmul Hossen</h2>
          </Link>
        </div>
        <div>
          <ul className="flex gap-10 font-semibold text-lg">
            <Link href="/">Home</Link>
            <Link href="projects">Projects</Link>
            <Link href="components">Components</Link>
            <Link href="about">About</Link>
            <Link href="login">Login</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
