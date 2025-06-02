export default function LogViewer({ logs }) {
  return (
    <div className="bg-gray-100 p-4 rounded mt-4 max-h-40 overflow-y-auto">
      <h3 className="font-bold mb-2">Execution Logs:</h3>
      <ul className="text-sm space-y-1">
        {logs.map((log, i) => (
          <li key={i} className="text-gray-700">→ {log}</li>
        ))}
      </ul>
    </div>
  );
}
