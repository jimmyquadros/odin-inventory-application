const Item = require('../models/item');

// Display list of all items
exports.item_list = (req, res) => {
    res.send('TODO: Item list');
};

// Display detail page for item
exports.item_detail = (req, res) => {
    res.send(`TODO: Item detail: ${req.params.id}`)
};

// Display item create form on GET
exports.item_create_get = (req, res) => {
    res.send('TODO: item create GET')
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