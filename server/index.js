const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.get("/", (req, res, next) => {
  return res.json({ message: "Server Running" });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
