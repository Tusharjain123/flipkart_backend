const supabase = require("../utils/supabaseconfig");

async function specificProduct(req, res) {
    const index = req.body 
    let { data: FlipkartData, error } = await supabase
        .from('FlipkartData')
        .select('*')
        .eq('Index', index )
        .single();

    if (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).json({ error: 'Failed to fetch data' });
    } else {
        res.send(FlipkartData);
    }
}

module.exports = specificProduct;