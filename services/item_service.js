var Item = require('../models/Item');

module.exports = {
    find_by_id: async (id) => {
        try {
            var item = await Item.findById(id).lean();
            
            return item;

        } catch (err) {
            console.error(err);
        }
    },
    get_all: async () => {
        try {
            var items = await Item.find()
            .sort({ date: -1 })
            .lean();

            return items;

        } catch (err) {
            console.error(err);
        }
    }
};