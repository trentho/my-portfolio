import React from "react";
import { Navigation } from "../components/nav";

const Resume = () => {
  const resumeUrl = "/HoTrent05.2023_RESUME.pdf";

  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="pb-16">
        <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Resume
            </h2>
          </div>
          <div className="flex items-center justify-center h-[80vh]">
            <iframe
              className="w-full h-full max-w-9xl max-h-[100%] border-none"
              src={resumeUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
