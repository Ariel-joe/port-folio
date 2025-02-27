import { HTMLAttributes } from "react";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

function LogoCloud(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <p className="text-center">Connect with me</p>
      <div className="mt-6 flex items-center justify-center flex-wrap gap-4">
        <Github size={38} />
        <Linkedin size={38} /> 
        <Instagram size={38} /> 
        <Mail size={38} />
      </div>
    </div>
  );
}

export default LogoCloud;
