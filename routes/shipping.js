var express = require('express');
var router = express.Router();


// @route GET /shippinginformation
// @desc render shipping information page
// @access public
router.get('shippinginformation', async (req, res) => {
    try {
        var item = req.body.item;
        var total_price = item.price + item.tax;
    
        res.render('shipping_info', { item, total_price });
        
    } catch (err) {
        res.redirect('error/500');
        console.error(err);
    }
});

module.exports = router;