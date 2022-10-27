const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000
//for cross origin
app.use(cors())

const course = require('./data/course.json')

app.get('/', (req, res) => {
    res.send('Coarsera-bd API running')
})
//get request 
app.get('/courses', (req, res) => {
    res.send(course)
})
// dyanamic route get request
app.get('/courses/:id', (req, res) => {
    const id = req.params.id
    const selectedCourse = course.find(c => c.id === id)
    res.send(selectedCourse)
})

app.listen(port, () => {
    console.log('Coursera-BD running on port', port);
})