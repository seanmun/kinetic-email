export default function Callout({ text }: { text: string }) {
    return (
      <div className="p-4 border-l-4 border-yellow-500 bg-yellow-100 text-yellow-900 rounded">
        {text}
      </div>
    );
  }
  