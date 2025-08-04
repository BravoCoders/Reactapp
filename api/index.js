export default async (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json({ status: 'GET request success' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
