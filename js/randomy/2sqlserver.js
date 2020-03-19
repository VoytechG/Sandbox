const sql = require("msnodesqlv8");

const connectionString =
  "server=localhost;Database=iwc_crm;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const query = "SELECT * FROM test1";

const cd =
  "CREATE TABLE test2 (id int PRIMARY KEY, c1 nvarchar(MAX), c2 smalldatetime)";

// sql.query(connectionString, cd, (err, rows) => {
//   console.log(err);

//   console.log(rows);

// var a = rows[0].date;
//   // a = new Date(a);
//   // console.log(a);
// });

// sql.open(connectionString, function(err, conn) {
//   conn.query(cd, function(err, res) {
//     console.log(err, res);
//   });
// });
const q = `

 SELECT * FROM TagsOfCategory WHERE _Id = @@Identity;
 


 
 `;

sql.query(connectionString, q, (err, rows, qq, a, b) => {
  //   console.log(err);

  console.log(rows, err, qq, a, b);

  // var a = rows[0].date;
  // a = new Date(a);
  // console.log(a);
});
