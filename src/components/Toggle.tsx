"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const sections = ["WHY", "HOW", "WHEN"];

export default function Toggle({ onSelect }: { onSelect: (section: string) => void }) {
  const [selected, setSelected] = useState("WHY");

  const handleSelect = (section: string) => {
    setSelected(section);
    onSelect(section); // ✅ Now correctly updates `selectedSection` in `page.tsx`
  };

  return (
    <div className="flex bg-amberPrimary rounded-full p-1">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => handleSelect(section)}
          className={`relative flex-1 px-4 py-2 text-center rounded-full transition-all ${
            selected === section ? "bg-amberDark text-white" : "text-gray-900"
          }`}
        >
          {selected === section && (
            <motion.div
              layoutId="toggle"
              className="absolute inset-0 bg-amberDark rounded-full"
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          )}
          <span className="relative z-10">{section}</span>
        </button>
      ))}
    </div>
  );
}
