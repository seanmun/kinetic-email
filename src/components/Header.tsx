import AccessibilityToggle from "@/components/AccessibilityToggle";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 bg-amberPrimary text-white shadow-md z-10">
      <div className="max-w-4xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold tracking-wide">Kinetic Email</h1>
        <AccessibilityToggle />
      </div>
    </header>
  );
}
