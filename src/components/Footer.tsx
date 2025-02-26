import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-text py-4 text-center text-sm shadow-inner mt-auto">
      <p>© 2025 <a href="https://seanmun.com" className="hover:underline">seanmun.com</a></p>
      <p>Designed and built by Sean Munley</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="/build-details" className="hover:underline">Build Details</a>
        <span>•</span>
        <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
      </div>
      <div className="flex justify-center space-x-4 mt-3">
        <a href="https://github.com/seanmun" target="_blank" rel="noopener noreferrer" className="hover:text-darkText">
          <Github size={24} />
        </a>
        <a href="https://linkedin.com/in/sean-munley" target="_blank" rel="noopener noreferrer" className="hover:text-darkText">
          <Linkedin size={24} />
        </a>
      </div>
    </footer>
  );
}
