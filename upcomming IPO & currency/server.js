const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Dummy user data
const users = [
    { username: 'user123', password: 'pass123' }
];

// Dummy IPO and exchange rate data
const upcomingIPOs = [/* ... */];
const exchangeRates = { /* ... */ };

// Middleware to check authentication
function authenticate(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // Implement token validation logic here
    // For simplicity, just check for a dummy token
    if (token !== 'dummyToken') {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    next();
}

// Routes
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Implement real authentication logic here
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        return res.status(200).json({ token: 'dummyToken', username });
    } else {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.get('/ipo-calendar', authenticate, (req, res) => {
    // Implement logic to fetch upcoming IPOs
    res.json({ upcomingIPOs });
});

app.get('/exchange-rates', authenticate, (req, res) => {
    // Implement logic to fetch exchange rates
    res.json({ exchangeRates });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
