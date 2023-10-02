const express = require('express')
const path = require('path')

const app = express()
const port = 3000

/*
  resources:
  https://expressjs.com/en/starter/basic-routing.html
*/

// multi page application server using node.js with express

const router = express.Router();

const root = {root: path.join('..', 'adi_website')}
const pages = {root: path.join('..', 'adi_website', 'front', 'pages')}

// serve static assets
app.use(express.static('../adi_website'))

// serve home page
app.get('/', (req, res) => {
  res.sendFile('index.html', root)
})

// serve pages
app.get('/about', (req, res) => {
    res.sendFile('about.html', pages)
})

app.get('/blog', (req, res) => {
  res.sendFile('blog.html', pages)
})

app.get('/projects', (req, res) => {
  res.sendFile('projects.html', pages)
})

// server start
app.listen(port, () => {
  console.log(`adi's website server listening on port ${port}`)
})