import Image from "next/image";

export const metadata = {
  title: "About | Md Najmul Hossen",
  description:
    "Md Najmul Hossen is a full-stack developer from Bangladesh. He is a student of Computer Science and Engineering at Green University of Bangladesh.",
};

const AboutPage = () => {
  return (
    <>
      <section className="w-full h-60 bg-gradient-to-b from-purple-500 to-gray-100 grid items-center">
        <div className="container mx-auto ">
          <h1 className="text-4xl font-bold text-center">About Me</h1>
        </div>
      </section>
      <div className="container mx-auto p-5 grid place-items-center">
        <div>
          {/* about me */}
          <div className="text-center">
            <p className="text-lg mt-2 bg-green-400 px-4 rounded-xl">
              I am a full-stack developer from Bangladesh. I am still learning.
              Hope i will contribute for the industry .
            </p>

            <div className="flex justify-between gap-5 my-10">
              {/* skills */}

              <div className="border shadow-md p-5">
                <h1 className="text-2xl font-bold mt-10">Skills</h1>
                <p className="text-lg mt-2">
                  I have experience in the following technologies:
                </p>
                <ul className="mt-2 flex gap-2 mt-5">
                  <li>
                    <Image
                      src="./images/html-icon.svg"
                      alt="html"
                      width={30}
                      height={30}
                    />
                  </li>
                  <li>
                    <Image
                      src="./images/css-icon.svg"
                      alt="css"
                      width={30}
                      height={30}
                      className="mx-2"
                    />
                  </li>
                  <li>
                    <Image
                      src="./images/js-icon.svg"
                      alt="javascript"
                      width={30}
                      height={30}
                    />
                  </li>
                  <li>
                    <Image
                      src="./images/react-js-icon.svg"
                      alt="react"
                      width={30}
                      height={30}
                    />
                  </li>
                  <li>
                    <Image
                      src="./images/nodejs-icon.svg"
                      alt="node"
                      width={30}
                      height={30}
                    />
                  </li>
                  <li>
                    <Image
                      src="./images/express-js-icon.svg"
                      alt="mongodb"
                      width={30}
                      height={30}
                    />
                  </li>
                  <li>
                    <Image
                      src="./images/postgresql-icon.svg"
                      alt="mongodb"
                      width={30}
                      height={30}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/mongo-db-icon.png"
                      alt="mongodb"
                      width={30}
                      height={30}
                    />
                  </li>
                  <li>
                    <Image
                      src="./images/github-icon.svg"
                      alt="mongodb"
                      width={30}
                      height={30}
                    />
                  </li>
                  <li>
                    <Image
                      src="./images/c-icon.svg"
                      alt="mongodb"
                      width={30}
                      height={30}
                    />
                  </li>
                  <li>
                    <Image
                      src="./images/cpp-icon.svg"
                      alt="mongodb"
                      width={30}
                      height={30}
                    />
                  </li>
                </ul>
              </div>

              {/* education */}
              <div className="border shadow-md p-5">
                <h1 className="text-2xl font-bold mt-10">Education</h1>
                <p className="text-lg mt-2">
                  I am currently studying at Green University of Bangladesh.
                </p>
                <ul className="mt-2">
                  <li>Green University of Bangladesh</li>
                  <li>Computer Science and Engineering</li>
                  <li>2019 - Present</li>
                </ul>
              </div>
            </div>

            {/* contact */}
            <div className="border shadow-md p-5 rounded-lg">
              <h1 className="text-2xl font-bold">Contact</h1>
              <p className="text-md mt-2">
                You can contact me via the following methods:
              </p>
              <ul className="mt-5">
                <li>
                  <span>Email: </span>
                  <a
                    href="mailto:nazmul0w1@gmail.com"
                    className="bg-green-400 py-1 px-2 rounded-lg"
                  >
                    Send Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
