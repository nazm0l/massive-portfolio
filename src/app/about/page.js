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
            <p className="text-lg mt-2">
              I am a full-stack developer from Bangladesh. I am a student of
              Computer Science and Engineering at Green University of
              Bangladesh.
            </p>

            <div className="flex justify-between">
              {/* skills */}

              <div>
                <h1 className="text-2xl font-bold mt-10">Skills</h1>
                <p className="text-lg mt-2">
                  I have experience in the following technologies:
                </p>
                <ul className="mt-2">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>SQL</li>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>C</li>
                  <li>C++</li>
                </ul>
              </div>

              {/* education */}
              <div>
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
            <h1 className="text-2xl font-bold mt-10">Contact</h1>
            <p className="text-lg mt-2">
              You can contact me via the following methods:
            </p>
            <ul className="mt-2">
              <li>
                Email:
                <a href="mailto:abc@gmail.com ">Send Email</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
