const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())

const categories = require('./data/categories.json')
const course = require('./data/course.json')

app.get('/', (req, res) => {
    res.send('Coarsera-bd API running')
})

app.get('/courses', (req, res) => {
    res.send(categories)
})


app.get('/course', (req, res) => {
    res.send(course)
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id
    const selectedCourse = course.find(c => c.id === id)
    res.send(selectedCourse)
})

app.listen(port, () => {
    console.log('Courser-BD running on port', port);
})