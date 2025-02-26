"use client";
import { useEffect, useState } from "react";
import { Moon, Sun, Text } from "lucide-react";

export default function AccessibilityToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [textSize, setTextSize] = useState("text-base");
  const [lineHeight, setLineHeight] = useState("leading-normal");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="fixed top-4 right-4 flex space-x-3 bg-amberPrimary p-2 rounded-full shadow-md">
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-white text-black hover:bg-amberDark hover:text-white transition-colors"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Text Size Toggle */}
      <button
        onClick={() =>
          setTextSize(textSize === "text-base" ? "text-lg" : "text-base")
        }
        className="p-2 rounded-full bg-white text-black hover:bg-amberDark hover:text-white transition-colors"
      >
        <Text size={20} />
      </button>

      {/* Line Height Toggle */}
      <button
        onClick={() =>
          setLineHeight(
            lineHeight === "leading-normal" ? "leading-loose" : "leading-normal"
          )
        }
        className="p-2 rounded-full bg-white text-black hover:bg-amberDark hover:text-white transition-colors"
      >
        <span className="text-sm">↕</span>
      </button>

      {/* Apply settings to the entire page */}
      <style>
        {`
          html {
            font-size: ${textSize === "text-lg" ? "18px" : "16px"};
            line-height: ${lineHeight === "leading-loose" ? "2" : "1.5"};
          }
        `}
      </style>
    </div>
  );
}
