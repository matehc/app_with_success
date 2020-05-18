// require subject model here


exports.getSubjects = (req, res, next) => {
    //get all subjects from model
    res.send(`<h1>All Subjects here</h1>`);
}

exports.getSubject = (req, res, next) => {
    // get subject by id
    res.send('<h1>Get Subject by specified id</h1>');
}

exports.getSubjectByCategory = (req, res, next) => {
    // get subject by category id
    res.send(`<h1>Get Subject by specified category id</h1>`);
}

exports.getSubjectByName = (req, res, next) => {
    // get subject by name using query parameters
    res.send(`<h1>Subject retrieved by name</h1>`);
}