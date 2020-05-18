
exports.postAddStudent = (req, res, next) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;


    console.log(firstName, lastName, email)

    res.send({firstName, lastName, email});
}

exports.postAddTutor = (req, res, next) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    console.log(firstName, lastName, email)

    res.send({firstName, lastName, email});
}


exports.postAddAdmin = (req, res, next) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    console.log(firstName, lastName, email)

    res.send({firstName, lastName, email});
}