// TODO require student model

exports.getStudents = (req, res, next) => {
    // retreive student data from model
    res.send(`<h1>All Students retreived</h1>`);
}

exports.getStudent = (req, res, next) => {
    // retreive student data from model
    res.send(`<h1>Students retreived by id</h1>`);
}

