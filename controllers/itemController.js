const Item = require('../models/item');
const Category = require('../models/category')

// Display list of all items
exports.item_list = (req, res, next) => {
    Item.find({}, 'name category')
        .sort({ name: 1 })
        .populate('category')
        .exec(function (err, list_items) {
            if (err) {
                return next(err);
            }
            res.render('item_list', { title: 'Item List', item_list: list_items});
        });
};

// Display detail page for item
exports.item_detail = (req, res, next) => {
    Item.findById(req.params.id)
        .populate('category')
        .exec(function(err, item) {
            if (err) {
                return next(err)
            }
            res.render('item_detail', { title: 'Item Detail', item: item });
        })
};

// Display item create form on GET
exports.item_create_get = (req, res, next) => {
    Category.find({})
        .sort( {'name': 1 })
        .exec(function (err, categories) {
            if (err) {
                return next(err);
            }
            res.render('item_form', { title: 'Create Item', categories: categories });
        })
};

// Handle item create on POST
exports.item_create_post = (req, res) => {
    res.send('TODO: item create POST')
};

// Display item delete form on GET
exports.item_delete_get = (req, res) => {
    res.send('TODO: item delete GET')
};

// Handle item delete on POST
exports.item_delete_post = (req, res) => {
    res.send('TODO: item delete POST')
};

// Display item update form on GET
exports.item_update_get = (req, res) => {
    res.send('TODO: item update GET')
};

// Handle item update on POST
exports.item_update_post = (req, res) => {
    res.send('TODO: item update POST')
};
