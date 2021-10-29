const express = require("express");
const multer = require('multer');
const app = express();
require("dotenv").config()
const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './uploads');
    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now());
    }
});
const upload = multer({ storage: storage }).single('userPhoto');

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post('/api/photo', function(req, res) {
    upload(req, res, function(err) {
        if (err) {
            return res.end("Error uploading file.");
        }
        res.end("Profile Image uploaded");
    });
});

const upload1 = multer({ storage: storage }).single('coverPhoto');

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post('/api/coverphoto', function(req, res) {
    upload(req, res, function(err) {
        if (err) {
            return res.end("Error uploading file.");
        }
        res.end("Cover Image Uploaded");
    });
});
app.use('/uploads', express.static('uploads'))


app.listen(3000, function() {
    console.log("Working on port 3000");
});