
let express = require('express')
let app = express();
var port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Hello Batch 13 - KENZO-26'));
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});
