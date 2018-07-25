var connection = require("./connection.js");

var orm = { 
    selectAll: function (tableInput, colToSearch,valofCol) {
        var queryString = "Select * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput,colToSearch,valofCol], function (err,result) {
            if (err) throw err;
            console.log(result);
        });
    },
}