const express = require('express')
const app = express()
const path = require('path');

app.use(express.static('public'))

// app.use('/static', express.static('public'))

// the path that you provide to the express.static function is relative to the directory from where you launch your node process.
// If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve:
app.use('/static', express.static(path.join(__dirname, 'public')))

const port = 3003
app.listen(port, () => console.log(`App listening on port ${port}!`))

// 调用方式：http://localhost:3003/static/frank.txt
