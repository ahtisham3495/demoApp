const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB CONNECTED")
}).catch(() => {
    console.log("UNABLE to connect to DB")
})
module.exports = connect