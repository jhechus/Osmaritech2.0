module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { question, page } = req.body || {};

  if (!question || typeof question !== 'string' || !question.trim()) {
    res.status(400).json({ error: 'Missing question' });
    return;
  }

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    res.status(500).json({ error: 'Server not configured' });
    return;
  }

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/unanswered_questions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        Prefer: 'return=minimal'
      },
      body: JSON.stringify({
        question: question.trim().slice(0, 500),
        page: typeof page === 'string' ? page.trim().slice(0, 300) : null
      })
    });

    if (!response.ok) {
      res.status(502).json({ error: 'Insert failed' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch {
    res.status(500).json({ error: 'Unexpected error' });
  }
};
