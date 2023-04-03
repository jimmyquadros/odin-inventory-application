const Item = require('../models/item');
const Category = require('../models/category');

const async = require('async');

exports.index_get = (req, res) => {
    async.parallel(
        {
            item_count(callback) {
                Item.countDocuments({}, callback);
            },
            category_count(callback) {
                Category.countDocuments({}, callback);
            },
        },
        (err, results) => {
            res.render('index', {
                title: 'FooBar Supply',
                error: err,
                data: results,
            });
        }
    );
};
