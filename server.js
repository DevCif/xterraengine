var express = require('express');
const app = express()

app.set('port', (process.env.PORT || 5000))

app.get('/', function (req, res) {

})

app.listen(app.get('port'), function () {
    console.log("running: port")
})
