let express = require("express");
let app = express();
app.set("view engine","ejs");

// set up database connection
const knex = require("knex")({
 client: "mysql",
 connection: {
  host:"concert-db.cl8qs2ywg9rc.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "ATpSDeIO0uqdniHfmitP",
  database:"paradise-concerts",
  port: 3306,
 },
});

app.get("/",(req,res) => {
 knex
 .select()
 .from("venues")
 .then((result) => {
  res.render("index", {aConcerts: result});
 })
.catch((error) => {
	console.error(error);
	res.status(500).send("Error getting data from db");
});
});

app.listen(3000, () => {
	console.log("listening");
});
