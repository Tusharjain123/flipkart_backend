const supabase = require("../utils/supabaseconfig");

async function specificProduct(req, res) {
    const id = req.query.id;
    let { data: FlipkartData, error } = await supabase
        .from('FlipkartData')
        .select('*')
        .eq('Index', id)
        .single();

    if (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    } else {
        res.send(FlipkartData);
    }
}

module.exports = specificProduct;
