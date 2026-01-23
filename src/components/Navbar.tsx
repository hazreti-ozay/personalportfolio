import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const DiscordIcon = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 127.14 96.36"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.09,105.09,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22c2.36-24.44-2-47.27-18.9-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
  </svg>
);

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo veya İsim */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-transparent bg-clip-text 
        bg-linear-to-r from-blue-400 via-purple-500 to-blue-300 
        bg-size-[200%_auto] 
        bg-left hover:bg-right 
        transition-all duration-500 ease-in-out"
        >
          &lt;OziDev /&gt;
        </Link>

        {/* Menü Linkleri */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <Link href="#about" className="hover:text-cyan-400 transition-colors">
            Hakkımda
          </Link>
          <Link
            href="#projects"
            className="hover:text-purple-400 transition-colors"
          >
            Projeler
          </Link>
          <Link
            href="#skills"
            className="hover:text-emerald-400 transition-colors"
          >
            Yetenekler
          </Link>
          <Link
            href="#contact"
            className="hover:text-amber-400 transition-colors"
          >
            İletişim
          </Link>
        </div>

        {/* Sosyal İkonlar */}
        <div className="flex gap-4">
          <Link
            href="https://github.com/hazreti-ozay"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ozayozkan/"
            target="_blank"
            className="text-gray-400 hover:text-sky-700 transition-colors"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="https://discord.gg/perdaz"
            target="_blank"
            className="text-gray-400 hover:text-[#5865F2] transition-colors"
          >
            <DiscordIcon size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
