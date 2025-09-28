
# Kaito Random Quote API ✨

A simple **Node.js + Express API** that returns random quotes.

## Features
- `/quote` endpoint → returns a random quote
- Express.js setup
- Jest test setup
- GitHub Actions CI
- `.env.example`

## Setup
```bash
git clone https://github.com/AirbotDao/kaito-random-quote-api.git
cd kaito-random-quote-api
npm install
npm run dev

kaito-random-quote-api/
├── src/
│   └── app.js
├── tests/
│   └── app.test.js
├── .github/workflows/
│   └── ci.yml
├── .env.example
├── package.json
├── .gitignore
└── README.md
