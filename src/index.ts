import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.json({ Hello: "Theodorus Karli anak dari kampus STMIK KHARISMA MAKASSAR dan umur 21 " });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
