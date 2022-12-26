const express = require('express');
const app = express();


const courses = [
    { id: 1, name:"course1"},
    { id: 2, name:"course2"},
    { id: 3, name:"course3"},
];
app.get('/', (req, res) => {
    res.send("hello")
});

app.get('/api', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('this id is invalid') 
    res.send(course);
});

/*app.get('/api/home', (req, res) => {
    res.send("lol");
});*/
app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params);
});

const port = process.env.PORT || 8000;

app.listen(port,() => console.log(`Listening on port ${port}...`));