const express = require('express');
const app = express();
const port = 3000;
const comp322 = require('./comp322');

app.use('/comp322', comp322);

comp322.get('/grade', function(req,res){
    res.send('Got a GET request at /grade, Charles Randall')});


comp322.post('/grade', function(req,res){
    res.send('Got a POST request at /grade, Charles Randall')});

comp322.put('/grade', function(req,res){
    res.send('Got a PUT request at /grade, Charles Randall')});

comp322.delete('/grade', function(req,res){
    res.send('Got a DELETE request at /grade, Charles Randall')});
// TODO: Add your own router

app.listen(port, () => console.log(`Example app listening on port ${port}!`));