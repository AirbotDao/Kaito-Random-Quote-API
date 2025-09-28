import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

const quotes = [
  "Talk is cheap. Show me the code. – Linus Torvalds",
  "Programs must be written for people to read. – Harold Abelson",
  "Simplicity is the soul of efficiency. – Austin Freeman",
  "First, solve the problem. Then, write the code. – John Johnson",
  "Code never lies, comments sometimes do. – Ron Jeffries",
  "Fix the cause, not the symptom. – Steve Maguire"
];

app.get("/quote", (req, res) => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: random });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
