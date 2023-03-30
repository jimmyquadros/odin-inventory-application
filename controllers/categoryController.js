const Category = require('../models/category');

// Display list of all categories
exports.category_list = (req, res) => {
    res.send("TODO: Category List");
};

// Display detail page of category
exports.category_detail = (req, res) => {
    res.send(`TODO: Category detail: ${req.params.id}`);
};

// Display category create form on GET
exports.category_create_get = (req, res) => {
    res.send('TODO: Category create GET')
};

// Handle category create on POST
exports.category_create_post = (req, res) => {
    res.send('TODO: Category create POST')
};

// Display category delete on GET
exports.category_delete_get = (req, res) => {
    res.send('TODO: Category delete GET')
};

// Handle category delete on POST
exports.category_delete_post = (req, res) => {
    res.send('TODO: Category delete POST')
};

// Display category update form on GET
exports.category_update_get = (req, res) => {
    res.send('TODO: Category update GET');
};

// Handle category update on POST
exports.category_update_post = (req, res) => {
    res.send('TODO: Category update POST')
};
