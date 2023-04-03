const Category = require('../models/category');
const Item = require('../models/item');
const async = require('async');

// Display list of all categories and gather quantities of each
exports.category_list = (req, res, next) => {
    async.waterfall([
        function(callback) {
            Category.find({}, 'name')
                .exec(function(err, result) {
                    if (err) {
                        return next(err);
                    }
                    callback(null, result);
                })
        },
        function(result, callback) {
            const comboResults = [];
            async.each(result, function(cat, callback) {
                Item.countDocuments({ category: cat._id })
                    .exec(function(err, num) {
                        if (err) {
                            return next(err);
                        }
                        comboResults.push([cat, num]);
                        callback(null, num);
                    })
            }, function(err) {
                if (err) {
                    return next(err)
                }
                comboResults.sort((a, b) => a[0].name.toLowerCase().charCodeAt(0) - b[0].name.toLowerCase().charCodeAt(0))
                callback(null, comboResults)
            })         
        }
    ],
    function(err, result) {
        if (err) {
            return next(err);
        }
        res.render('category_list', { title: 'Categories', category_list: result});
    });
};

// Display detail page of category
exports.category_detail = (req, res, next) => {
    async.parallel(
        {
            category(callback) {
                Category.findById(req.params.id).exec(callback);
            },
            items(callback) {
                Item.find({ category: req.params.id }).exec(callback);
            },
        },
        (err, results) => {
            if (err) {
                return next(err);
            }
            if (results.category == null) {
                const err = new Error('Category not found');
                err.status = 404;
                return next(err);
            }
            res.render('category_detail', {
                title: results.category.name,
                category: results.category,
                items: results.items,
            });
        }
    );
};

// Display category create form on GET
exports.category_create_get = (req, res) => {
    res.render('category_form', { title: 'Create Category' });
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
