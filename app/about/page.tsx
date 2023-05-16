import React from "react";
import { Navigation } from "../components/nav";
import trentHeadshot from "/public/trent_picture.png";
import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="min-h-screen pb-16">
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            About
          </h2>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <div className="mt-4 text-zinc-400">
              <p style={{ whiteSpace: 'pre-wrap' }}>
                &emsp;Hey there! My name is Trent Ho. I was born in Baton Rouge, Louisiana and grew up in Frisco, Texas. 
                I'm currently a University of Texas at Austin student pursuing a B.S. in Computer Science and expect to graduate in Spring 2024.
                I'm passionate about helping others with technology and making a world a better place. 
                In particular, I am interested in software engineering and machine learning.
              </p>
              <p style={{ whiteSpace: 'pre-wrap'}}>
                &emsp;In my free time, I enjoy playing sports like volleyball and soccer, working out in the gym, playing videogames, and learning more about technology. 
                My favorite activity is watching my favorite soccer team Arsenal dominate in the Premiere League! (COYG!!)
              </p>
            </div>
            <div className="mt-16">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                Skills
              </h2>
              <div className="mt-4 text-zinc-400">
                <p>
                  I have experience working with the following languages and tools:
                </p>
                <ul className="list-disc list-inside">
                  <li>Programming languages: [Python, Java, C, C++, TypeScript, JavaScript]</li>
                  <li>Frameworks: [React, NextJS, TailwindCSS]</li>
                  <li>Tools: [Docker, Git, Jenkins, Kubernetes, Postman]</li>
                  <li>Platforms: [AWS, Google Cloud]</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:w-1/2 w-48 h-48 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden self-center ml-auto">
            <Image
              src={trentHeadshot}
              alt="Trent Ho"
              width={250}
              height={320}
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;