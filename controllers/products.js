const supabase = require("../utils/supabaseconfig");

async function randProducts(req, res) {
    let { data: FlipkartData, error } = await supabase
        .from('FlipkartData')
        .select('*')
        .limit(5);

    if (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).json({ error: 'Failed to fetch data' });
    } else {
        res.send(FlipkartData);
    }
}

module.exports = randProducts;