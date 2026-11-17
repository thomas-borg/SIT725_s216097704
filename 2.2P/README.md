# SIT725 Task 2.2P - Express Web Servers

A Node.js and Express web application serving a static calculator frontend and REST API endpoints for simple math.

## Setup & Run
1. From your terminal or shell, navigate to the `2.2P` directory.
2. Run `npm install` to install dependencies.
3. Run `node server.js` to start the server at `http://localhost:3000`.

## API Endpoints
- `GET /` - Serves static web interface from `public/`.
- `GET /test` - Returns simple test message.
- `GET /add?num1=10&num2=5` - Adds two numbers passed via query params.
- `POST /calculate` - Accepts JSON `{ "num1": 10, "num2": 5, "operation": "multiply" }`.
