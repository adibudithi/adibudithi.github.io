const express = require('express')

const app = express()
const port = 3000

/* 
    resources:
  https://expressjs.com/en/starter/basic-routing.html
*/

// multi page application server using node.js with express

const router = express.Router();

// serve static assets
app.use(express.static('../adi_website'))

// serve home page
app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname })
})

// serve pages
app.get('/about', (req, res) => {
    res.sendFile('pages/about.html', {root: __dirname })
})

app.get('/blog', (req, res) => {
  res.sendFile('pages/blog.html', {root: __dirname })
})

app.get('/projects', (req, res) => {
  res.sendFile('pages/projects.html', {root: __dirname })
})

// server start
app.listen(port, () => {
  console.log(`adi's website server listening on port ${port}`)
})