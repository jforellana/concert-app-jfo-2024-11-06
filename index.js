let express = require("express");
let app = express();

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
	let html = "<body><ul>";
	for (let i=0;i<result.length;i++) {
		html += "<li>" + result[i].location + "</li>";
	}
	html += "</body>"
  res.send(html);
 })
.catch((error) => {
	console.error(error);
	res.status(500).send("Error getting data from db");
});
});

app.listen(3000, () => {
	console.log("listening");
});
