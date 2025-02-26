"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Why from "@/sections/Why/Why";
import How from "@/sections/How/How";
import When from "@/sections/When/When";
import AccessibilityToggle from "@/components/AccessibilityToggle";
import Toggle from "@/components/Toggle";

export default function Home() {
  const [selectedSection, setSelectedSection] = useState("WHY");

  return (
    <div className="flex flex-col min-h-screen bg-secondary text-text dark:bg-secondary dark:text-darkText">
      <Header />
      <AccessibilityToggle />

      <div className="pt-24 flex flex-col flex-grow items-center">
        <div className="flex justify-center mt-6">
          <Toggle onSelect={setSelectedSection} />
        </div>

        <main className="p-6 w-3/4 bg-primary rounded-lg text-center mt-6">
          {selectedSection === "WHY" && <Why />}
          {selectedSection === "HOW" && <How />}
          {selectedSection === "WHEN" && <When />}
        </main>
      </div>

      <Footer />
    </div>
  );
}
