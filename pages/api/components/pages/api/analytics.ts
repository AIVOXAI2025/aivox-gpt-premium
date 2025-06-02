// File: pages/api/analytics.ts

let usageStats = {
  aiWriter: 0,
  imageGenerator: 0,
  seoAudit: 0,
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { toolName } = req.body;

    if (usageStats[toolName] !== undefined) {
      usageStats[toolName]++;
    }

    return res.status(200).json({ status: 'Logged' });
  }

  if (req.method === 'GET') {
    return res.status(200).json(usageStats);
  }

  res.status(405).json({ error: 'Method not allowed' });
}
