const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Middleware to parse JSON bodies for POST requests
app.use(express.json());

// GET test endpoint
app.get('/test', (req, res) => {
    res.send('Express test endpoint is working.');
});

// GET endpoint to add two numbers via URL query params
// Example: http://localhost:3000/add?num1=10&num2=5
app.get('/add', (req, res) => {
    // get numbers from URL query and convert to floats
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // Validate both inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            error: 'Invalid input. Please enter two valid numbers in the format ?num1=X&num2=Y'
        });
    }

    const sum = num1 + num2;

    // Return the result as a JSON response
    res.json({
        operation: 'addition',
        num1: num1,
        num2: num2,
        result: sum
    });
});

// POST endpoint for basic calculator operations
app.post('/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: 'num1 and num2 must be numbers in the JSON body.' });
    }

    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) return res.status(400).json({ error: 'Cannot divide by zero.' });
            result = num1 / num2;
            break;
        default:
            return res.status(400).json({ error: 'Unsupported operation. Use add, subtract, multiply, or divide.' });
    }

    res.json({ operation, num1, num2, result });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
