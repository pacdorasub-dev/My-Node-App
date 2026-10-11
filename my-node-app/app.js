
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello from my Node.js application!",
    status: "success",
    environment: "Docker + AWS EC2"
  });
});

app.get("/hello", (req, res) => {
  res.json({
    message: "Hello from the server!",
    server: "Node.js + Express"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
