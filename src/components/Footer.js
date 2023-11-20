import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-[250px] bg-gradient-to-r from-[#ff8079] to-[#ce5050] text-white flex flex-col gap-7 justify-center items-center">
      <div className="flex gap-14 md:gap-20">
        <div className=" rounded-full cursor-pointer">
          <Link href="https://www.facebook.com/nazm0l" target="_blank">
            <Image src="/fb-icon.svg" alt="fb" width={30} height={30} />
          </Link>
        </div>
        <div className=" rounded-full cursor-pointer">
          <Link href="https://www.github.com/nazm0l" target="_blank">
            <Image src="/git-icon.svg" alt="fb" width={30} height={30} />
          </Link>
        </div>
        <div className="bg-white rounded-full cursor-pointer">
          <Link href="https://www.linkedin.com/nazm0l" target="_blank">
            <Image src="/linke-icon.svg" alt="fb" width={30} height={30} />
          </Link>
        </div>
      </div>
      <div>
        <p>
          <Link className="hover:text-black" href="/">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link className="hover:text-black" href="/">
            Terms of Conditions
          </Link>
        </p>
      </div>
      <div>
        <small className="text-center text-slate-300 text-sm font-semibold">
          © 2023 All rights reserved.
        </small>
      </div>
    </div>
  );
};

export default Footer;
