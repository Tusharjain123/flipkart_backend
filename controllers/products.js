const express = require("express")
const router = express.Router()
const supabase = require("../utils/supabaseconfig")

async function allProducts (req,res){
    let { data: FlipkartData, error } = await supabase
    .from('FlipkartData')
    .select('Brand')
    if (error) {
      console.error('Error fetching data:', error.message);
    } else {
      res.send(FlipkartData)
    }
}

module.exports = allProducts