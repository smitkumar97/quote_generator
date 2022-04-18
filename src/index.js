const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 3000;
const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
