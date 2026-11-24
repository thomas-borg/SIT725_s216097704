# SIT725 Task 3.2P - Getting Graphical

A Node.js and Express web application featuring a Materialize CSS frontend ("Tom's Bookshelf") with dynamic book cards, modals, and a REST API endpoint.

## Setup & Run
1. From your terminal or shell, navigate to the `3.2P` directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` (or `node server.js`) to start the server at `http://localhost:3000`.

## API Endpoints
- `GET /` - Serves the static Materialize web interface from `public/`.
- `GET /api/books` - Returns a JSON array of book objects (`title`, `author`, `image`, `description`) rendered dynamically as cards on the client.

## Features
- **Dynamic Book Grid:** Fetches book data from the Express server on load and renders uniform Materialize cards.
- **Add Book Modal:** Interactive popup form that generates book cover URLs via Open Library ISBNs and appends new cards to the shelf.
- **Book Details Modal:** Displays full title, author, and description when clicking "More Info" on any card.
