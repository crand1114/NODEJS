const express = require('express');
const app = express();
const port = 3000;
const comp322 = require('./comp322');
const Randall = require('./Randall');

app.use('/comp322', comp322);
app.use('/Randall', Randall);

comp322.get('/grade', function(req,res){
    res.send('Got a GET request at /grade, Charles Randall')});


comp322.post('/grade', function(req,res){
    res.send('Got a POST request at /grade, Charles Randall')});

comp322.put('/grade', function(req,res){
    res.send('Got a PUT request at /grade, Charles Randall')});

comp322.delete('/grade', function(req,res){
    res.send('Got a DELETE request at /grade, Charles Randall')});
// TODO: Add your own router

//route1
Randall.get('/route1', function (req, res) {
    res.send('Get-route1: Hello Charles')
});

Randall.post('/route1', function (req, res) {
    res.send('Post-route1: Hello Charles')
});

Randall.put('/route1', function (req, res) {
    res.send('Put-route1: Hello Charles')
});

Randall.delete('/route1', function (req, res) {
    res.send('Delete-route1: Hello Charles')
});

//route 2
Randall.get('/route2', function (req, res) {
    res.send('Get-route2: Hello Mr.Randall')
});

Randall.post('/route2', function (req, res) {
    res.send('Post-route2: Hello Mr.Randall')
});

Randall.put('/route2', function (req, res) {
    res.send('Put-route2: Hello Mr.Randall')
});

Randall.delete('/route2', function (req, res) {
    res.send('Delete-route2: Hello Mr.Randall')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));