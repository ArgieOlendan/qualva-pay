var express = require('express');
var router = express.Router();
var item_service = require('../services/item_service');

// @route GET /view/order/:id
// @desc render order page
router.get('/:id', async (req, res) => {
    try {
        var item = await item_service.find_by_id(req.params.id);
        
        console.log(item)

        res.render('order', { item });

    } catch (err) {
        /**TO DO: create error views */
        res.render('error/404')
        console.log(err);
    }
});

module.exports = router