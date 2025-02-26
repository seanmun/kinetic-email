import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-amberDark text-gray-100 py-4 text-center text-sm shadow-inner mt-auto">
      <p>© 2025 kinetic.email</p>
      <p>Designed and built by <a href="https://seanmun.com" rel="noopener noreferrer"  className="hover:underline" >Sean Munley</a> </p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="/build-details" className="hover:underline">Build Details</a>
        <span>•</span>
        <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
      </div>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://github.com/seanmun" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <Github size={16} />
        </a>
        <a href="https://linkedin.com/in/sean-munley" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <Linkedin size={16} />
        </a>
      </div>
    </footer>
  );
}
