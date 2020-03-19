var sql = require("mssql");

var dbConfig = {
  server: "WOJTEK-BOOK",
  database: "iwc_crm",
  user: "crm_manager",
  password: "iwccrmtool",
  port: 1433,
  options: {
    trustedConnection: true
  }
};

const getEmp = () => {
  var conn = new sql.Connection(dbConfig);
  console.log(conn);
  var req = new sql.Request(conn);
  conn.connect(function(err) {
    if (err) {
      console.log(err);
      return;
    }
    req.query("SELECT * FROM clients", function(err, recordset) {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log(recordset);
      }
      conn.close();
    });
  });
};

getEmp();
