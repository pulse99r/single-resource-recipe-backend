// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;

// LISTEN
app.listen(PORT, () => {
  console.log(`Recipe Backend Server is Listening on port ${PORT}`);
});