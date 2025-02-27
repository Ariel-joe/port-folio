import Image from "next/image";

const features = [
  {
    icon: "/javascript-logo.png",
    title: "JavaScript: The OG Powerhouse",
    description:
      "The language that started it all—whether it's web apps, automation, or making the browser dance, JS is my first love! 💛",
  },
  {
    icon: "/typescript-logo.png",
    title: "TypeScript: The Bug Slayer",
    description:
      "Strongly typed, error-proof, and smooth—TypeScript keeps my code clean, safe, and maintainable. No more 'undefined is not a function' surprises! 🔥",
  },
  {
    icon: "/react-1-logo-png-transparent.png",
    title: "React.js: UI Sorcery",
    description:
      "Building interactive, lightning-fast UIs with React is my jam. Hooks, state management, and reusable components? Easy peasy! ⚛️",
  },
  {
    icon: "/next-js-logo-png_seeklogo-449824.png",
    title: "Next.js: The Full-Stack Beast",
    description:
      "SSG, SSR, API routes—Next.js turns my React apps into high-performance, SEO-friendly powerhouses. It's like React, but on steroids. 🚀",
  },
  {
    icon: "/tailwindcss.png",
    title: "Tailwind CSS: Styling at Warp Speed",
    description:
      "No more messy stylesheets—just utility classes for the win! Tailwind makes every project look clean, modern, and responsive in no time. 🎨",
  },
  {
    icon: "/Python-logo-notext.svg.png",
    title: "Python: My Automation Sidekick",
    description:
      "From scripting to data crunching, Python is my go-to for backend logic, automation, and AI experiments. 🐍",
  },
];

const Features = () => {
  return (
    <div id="features" className="w-full py-12 xs:py-20 px-6">
      <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
        My Tech Stack
      </h2>
      <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col bg-background border rounded-xl py-6 px-5"
          >
            <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={24}
                height={24}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <span className="text-lg font-semibold">{feature.title}</span>
            <p className="mt-1 text-foreground/80 text-[15px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
