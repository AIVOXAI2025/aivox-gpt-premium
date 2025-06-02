// File: components/AnalyticsDashboard.tsx import { useEffect, useState } from 'react';

const dummyData = [ { tool: 'aiWriter', uses: 32 }, { tool: 'imageGenerator', uses: 18 }, { tool: 'seoAudit', uses: 9 }, ];

export default function AnalyticsDashboard() { const [data, setData] = useState([]);

useEffect(() => { // Replace with fetch('/api/analytics') in production setData(dummyData); }, []);

return ( <div className="p-4 rounded-xl shadow-xl bg-white dark:bg-gray-800"> <h2 className="text-2xl font-semibold mb-4">Tool Usage Analytics</h2> <div className="space-y-2"> {data.map((item) => ( <div key={item.tool} className="flex justify-between border-b pb-2"> <span className="capitalize">{item.tool}</span> <span className="font-bold">{item.uses} uses</span> </div> ))} </div> </div> ); }

          
