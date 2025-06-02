// File: pages/api/run-tool.ts import { toolRegistry } from '../../tools/toolRegistry';

export default function handler(req, res) { if (req.method === 'POST') { const { toolName, prompt } = req.body; const toolFn = toolRegistry[toolName];

if (!toolFn) {
  return res.status(404).json({ error: 'Tool not found' });
}

const output = toolFn(prompt);
return res.status(200).json({ result: output });

}

res.status(405).json({ error: 'Method not allowed' }); }

