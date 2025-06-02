import { toolRegistry } from '../tools/toolRegistry';
import { useState } from 'react';
import LogViewer from './LogViewer';

export default function ToolLauncher() {
  const [tool, setTool] = useState('AI Writer');
  const [logs, setLogs] = useState([]);

  const runTool = () => {
    const toolFn = toolRegistry[tool];
    const output = toolFn('Test Prompt');
    setLogs(prev => [...prev, output]);
  };

  return (
    <div className="p-4 rounded-xl shadow-md border space-y-4">
      <h2 className="text-xl font-bold">Tool Launcher</h2>
      <select
        value={tool}
        onChange={(e) => setTool(e.target.value)}
        className="border p-2 rounded"
      >
        {Object.keys(toolRegistry).map((toolName) => (
          <option key={toolName}>{toolName}</option>
        ))}
      </select>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={runTool}
      >
        Run Tool
      </button>
      <LogViewer logs={logs} />
    </div>
  );
        }
