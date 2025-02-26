"use client";
import { useEffect, useState } from "react";
import { Moon, Sun, AlignJustify, Settings2, ALargeSmall } from "lucide-react";

export default function AccessibilityToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [textSize, setTextSize] = useState("text-base");
  const [lineHeight, setLineHeight] = useState("leading-normal");
  const [expanded, setExpanded] = useState(false); // Controls expansion

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="fixed top-4 right-4 flex flex-col items-end z-50">
      {/* Main Toggle Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        aria-label="Open Accessibility Controls"
        className="p-2 rounded-full bg-primary text-text hover:bg-accent transition-colors shadow-md"
      >
        <Settings2 size={20} /> {/* ✅ Updated to `settings-2` icon */}
      </button>

      {/* Expanded Controls */}
      {expanded && (
        <div className="mt-2 bg-primary p-2 rounded-lg shadow-md flex space-x-2">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-full bg-secondary text-text hover:bg-accent transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Text Size Toggle */}
          <button
            onClick={() =>
              setTextSize(textSize === "text-base" ? "text-lg" : "text-base")
            }
            aria-label="Adjust Text Size"
            className="p-2 rounded-full bg-secondary text-text hover:bg-accent transition-colors"
          >
            <ALargeSmall size={20} /> {/* ✅ Updated to "A Large - A Small" icon */}
          </button>

          {/* Line Height Toggle */}
          <button
            onClick={() =>
              setLineHeight(
                lineHeight === "leading-normal" ? "leading-loose" : "leading-normal"
              )
            }
            aria-label="Adjust Line Height"
            className="p-2 rounded-full bg-secondary text-text hover:bg-accent transition-colors"
          >
            <AlignJustify size={20} />
          </button>
        </div>
      )}

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
