import { Github, Linkedin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className="flex items-center gap-6 px-6 py-3 rounded-full
                   bg-white/40 backdrop-blur-xl
                   shadow-lg border border-white/30"
      >
        {/* GitHub */}
        <a
          href="https://github.com/Harsh2015"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full transition
                     hover:bg-black/5
                     hover:shadow-md"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5 text-gray-900" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/harsh-katariya-b2b20a282/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full transition
                     hover:bg-blue-500/10
                     hover:shadow-md"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5 text-blue-600" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
