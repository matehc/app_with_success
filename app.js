const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const registerRoutes = require('./routes/register');
const subjectRoutes = require('./routes/subject');
const studentRoutes = require('./routes/student');
const tutorRoutes = require('./routes/tutor');
const categoryRoutes = require('./routes/category');
const adminRoutes = require('./routes/admin');


// Registeration route
app.use('/register', registerRoutes);

// General routes
app.use(subjectRoutes);
app.use(studentRoutes);
app.use(tutorRoutes);
app.use(categoryRoutes);
app.use(loginRoutes);



app.listen(3000);