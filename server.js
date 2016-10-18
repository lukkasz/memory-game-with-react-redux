const express = require('express');
const PORT = process.env.PORT || 1337;
// Create out app
const app = express();

app.use(express.static('public'));

app.listen(PORT, process.env.IP, function(){
   console.log('server running on port: ' + PORT );
});