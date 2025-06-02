// File: pages/api/analytics.ts

import { getToken } from 'next-auth/jwt';

let usageStats = { aiWriter: 0, imageGenerator: 0, seoAudit: 0, };

export default async function handler(req, res) { const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

if (!token) { return res.status(401).json({ error: 'Unauthorized' }); }

if (req.method === 'POST') { const { toolName } = req.body;

if (usageStats[toolName] !== undefined) {
  usageStats[toolName]++;
}

return res.status(200).json({ status: 'Logged' });

}

if (req.method === 'GET') { return res.status(200).json(usageStats); }

res.status(405).json({ error: 'Method not allowed' }); }

