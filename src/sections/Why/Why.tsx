import Callout from "./components/Callout";

export default function Why() {
  return (
    <div className="text-text dark:text-darkText">
      <h2 className="text-2xl font-bold mb-4">Why Kinetic Emails?</h2>
      <p>Kinetic emails increase engagement and user interaction.</p>
      <Callout text="Some email clients don't support kinetic features, but graceful fallbacks solve this." />
    </div>
  );
}
