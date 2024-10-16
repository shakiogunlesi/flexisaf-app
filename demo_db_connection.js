var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "shaki_ogunlesi@outlook.com",
  password: "Logan1960@"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});