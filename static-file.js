const express = require('express')
const path = require('path');
const app = express()
const port = 3003

app.use(express.static('public'))

// app.use('/static', express.static('public'))

// the path that you provide to the express.static function is relative to the directory from where you launch your node process.
// If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve:
app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
