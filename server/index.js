const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3001;
const db = require("./queries.js");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

app.get("/event", db.getEvents);
app.get("/event/:id", db.getEventById);
app.post("/event", db.createEvent);
app.put("/event/:id", db.updateEvent);
app.delete("/event/:id", db.deleteEvent);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
