// File: pages/admin/dashboard.tsx

import { useEffect, useState } from 'react'; import { getSession } from 'next-auth/react'; import { useRouter } from 'next/router';

export default function Dashboard() { const [data, setData] = useState(null); const [logs, setLogs] = useState([]); const router = useRouter();

useEffect(() => { getSession().then(session => { if (!session) { router.push('/api/auth/signin'); } });

fetch('/api/analytics')
  .then(res => res.json())
  .then(setData);

fetch('/api/logs')
  .then(res => res.json())
  .then(setLogs);

}, []);

const exportCSV = () => { const csv = Object.entries(data) .map(([tool, count]) => ${tool},${count}) .join("\n");

const blob = new Blob(["Tool,Usage\n" + csv], { type: 'text/csv' });
const url = URL.createObjectURL(blob);
const link = document.createElement('a');
link.href = url;
link.download = 'aivox-analytics.csv';
link.click();

};

if (!data) return <div className="text-center p-10">Loading...</div>;

return ( <div className="p-10"> <h1 className="text-3xl font-bold mb-4">AIVOX Admin Dashboard</h1> <button
onClick={exportCSV}
className="mb-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
> Export CSV </button>

<h2 className="text-2xl font-semibold mt-8 mb-2">Tool Usage</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {Object.entries(data).map(([tool, count]) => (
      <div key={tool} className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold">{tool}</h2>
        <p className="text-2xl text-blue-600">{count}</p>
      </div>
    ))}
  </div>

  <h2 className="text-2xl font-semibold mt-10 mb-2">Recent Logs</h2>
  <div className="bg-white p-4 rounded shadow overflow-auto max-h-[400px]">
    <table className="table-auto w-full">
      <thead>
        <tr className="text-left bg-gray-100">
          <th className="p-2">User</th>
          <th className="p-2">Tool</th>
          <th className="p-2">Time</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log, i) => (
          <tr key={i} className="border-t">
            <td className="p-2">{log.user}</td>
            <td className="p-2">{log.tool}</td>
            <td className="p-2">{new Date(log.timestamp).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

); }

  
