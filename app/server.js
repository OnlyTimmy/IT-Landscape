const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="nl">
      <head>
        <meta charset="UTF-8">
        <title>IT Landscape CI/CD</title>
      </head>
      <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
        <h1>IT Landscape CI/CD</h1>
        <p>Deze applicatie draait in een Docker-container.</p>
        <p>De pipeline start automatisch wanneer ik een wijziging push.</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App draait op poort ${port}`);
});