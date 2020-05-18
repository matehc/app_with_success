// TODO require category model

exports.getCategories = (req, res, next) => {
    //TODO retrieve all categories from model
    res.send(`<h1>All categories returned</h1>`);
}

exports.getCategory = (req, res, next) => {
    //TODO retreve a category from model based on id
    res.send(`<h1>Category by id returned</h1>`);

}

