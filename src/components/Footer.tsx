import { Github, Linkedin, Mail } from "lucide-react";

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

export default function Footer() {
  return (
    <footer
      id="contact"
      className="py-12 border-t border-white/10 bg-black text-center"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">
          Birlikte <span className="text-amber-500">Çalışalım</span>
        </h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Yeni projeler, iş birlikleri ve fırsatlar için bana ulaşın. Her zaman
          yeni bağlantılar kurmaya açığım!
        </p>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="mailto:ozayozkan101@gmail.com"
            className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-red-300 transition-colors"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://github.com/hazreti-ozay"
            target="_blank"
            className="p-3 bg-white/5 rounded-full hover:bg-white/40 hover:text-white transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ozayozkan/"
            target="_blank"
            className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-sky-700 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://discord.gg/perdaz"
            target="_blank"
            className="p-3 bg-white/5 rounded-full hover:bg-[#5865F2] hover:text-white transition-colors"
          >
            <DiscordIcon size={24} />
          </a>
        </div>

        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Developed by{" "}
          <span className="font-bold text-gray-400 hover:text-amber-500 transition-colors duration-300 cursor-pointer">
            OziDev
          </span>{" "}
          using Next.js & Tailwind CSS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
