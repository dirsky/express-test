let express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.status(200);
  res.json({
    '3000': ['/c','/d','/e','/w','/p'],
    '3001': ['/e','/e2/frank']
  });
});

app.get('/d', (req, res) => {
  res.status(200);
  res.json({
    name: 'frank',
    age: 18
  });
});


const questions = [
  {
    id: 1,
    name: 'frank',
    sex: 'man'
  },
  {
    id: 2,
    name: 'candy',
    sex: 'woman'
  },
  {
    id: 3,
    name: 'dog',
    sex: 'man'
  }
];

app.get('/e', (req, res) => {
  res.status(200);
  res.json(questions);
});

app.get('/w', (req, res) => {
  res.status(200).json(questions.filter( q => {
    return q.sex === 'woman'
  }));
});

app.get('/p', (req, res) => {
  res.status(200).send('<h1>hello plain-text</h1>');
});

const port = 3000
app.listen(port, () => console.log(`App listening on port ${port}!`))
