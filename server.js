const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// user login session
app.use(session({
  secret: 'quiz_game_secret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'game'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Database connected!');
});


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});


app.use(express.static('public'));

//quiz page
app.get('/game', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

//register new user
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'User registered successfully!' });
  });
});

//login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length > 0) {
      req.session.user = results[0];
      res.send({ message: 'Login successful!' });
    } else {
      res.status(401).send({ message: 'Invalid credentials!' });
    }
  });
});

//quiz question
app.get('/quiz', async (req, res) => {
  try {
    const response = await fetch('https://marcconrad.com/uob/banana/api.php');
    const data = await response.json();
    res.json(data); 
  } catch (error) {
    console.error('Error fetching quiz question:', error);
    res.status(500).send({ message: 'Error fetching quiz question' });
  }
});

//submit,save score
app.post('/submit-score', (req, res) => {
  const { username, level, score } = req.body;
  db.query(
    'INSERT INTO scores (username, level, high_score) VALUES (?, ?, ?)',
    [username, level, score],
    (err, results) => {
      if (err) return res.status(500).send(err);
      res.send({ message: 'Score saved successfully!' });
    }
  );
});

//scoreboard
app.get('/scoreboard', (req, res) => {
  
  const loggedInUser = req.session.user ? req.session.user.username : null;

  db.query(`
    SELECT username, level, MAX(high_score) AS high_score
    FROM scores
    GROUP BY username
    ORDER BY high_score DESC, level DESC
  `, (err, results) => {
    if (err) return res.status(500).send(err);

    
    if (loggedInUser) {
      results.forEach(player => {
        if (player.username === loggedInUser) {
          player.isCurrentUser = true;  
        }
      });
    }

    res.json(results);
  });
});


//scoreboard
app.get('/scoreboard-page', (req, res) => {
  res.sendFile(__dirname + '/public/scoreboard.html');
});

//leaderboard
app.get('/leaderboard-page', (req, res) => {
  res.sendFile(__dirname + '/public/leaderboard.html');
});

//about
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

//registration
app.get('/reg', (req, res) => {
  res.sendFile(__dirname + '/public/register.html');
});


// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
