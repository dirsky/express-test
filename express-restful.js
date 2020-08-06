const express = require('express')
const app = express()

app.get('/user', function (req, res) {
  res.send('Hello user!')
})

app.post('/user', function (req, res) {
  res.send('Got a POST request')
})

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

const port = 3002
app.listen(port, () => console.log(`App listening on port ${port}!`))
