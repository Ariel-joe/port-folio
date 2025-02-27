import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";
import LogoCloud from "./logo-cloud";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center py-20 px-6">
  <div className="md:mt-6 flex items-center justify-center">
    <div className="text-center max-w-2xl">
      {/* <Badge className="bg-primary rounded-full py-1 border-none">
        v1.0.0 is live! 🚀 Built by Ariel Joe 💻
      </Badge> */}
      <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
        Bringing Ideas to Life with Code & Creativity
      </h1>
      <p className="mt-6 max-w-[60ch] xs:text-lg">
        Hi, I'm Ariel Joe, a MERN/MEAN stack developer with a passion for building
        seamless user experiences. From web apps to automation projects, I turn ideas into reality—
        with a sprinkle of fun along the way! 🚀
      </p>
      <div className="mt-12 flex flex-col sm:flex-row items-center sm:justify-center gap-4">
        <Button size="lg" className="w-full sm:w-auto rounded-full text-base">
          Explore My Work <ArrowUpRight className="!h-5 !w-5" />
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="w-full sm:w-auto rounded-full text-base shadow-none"
        >
          <CirclePlay className="!h-5 !w-5" /> Watch My Journey
        </Button>
      </div>
    </div>
  </div>

  {/* this is the trusted by section/ includes the clients I have worked with */}
  {/* <LogoCloud className="mt-24 max-w-3xl mx-auto" /> */}
</div>

  );
};

export default Hero;
