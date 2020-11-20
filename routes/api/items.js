var express = require('express');
var router = express.Router();

// Item Model
var Item = require('../../models/Item');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});

// @route POST api/items
// @desc Create a Item
// @access Public
router.post('/', (req, res) => {
    var newItem = new Item({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        tax: req.body.tax,
        company_name: req.body.company_name
    });

    newItem.save().then(item => res.json(item));
});

// @route GET api/items/:id
// @desc Get a Item
// @access Public
router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(404).json({ success: false }));
})

// @route DELETE api/items/:id
// @desc Delete a Item
// @access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => 
            item.remove()
            .then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
})

module.exports = router;