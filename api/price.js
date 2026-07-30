export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const symbol = req.query.symbol || 'XAUTUSDT';
        const response = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`);
        const data = await response.json();
        
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
