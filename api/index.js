const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", (req, res) => res.send("Express on Vercel"));

app.use("/api", require("./routes/indexRouter"));

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor en el puerto  http://localhost:${PORT}`);
});