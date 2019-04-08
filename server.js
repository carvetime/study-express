var express = require('express');
var app = express()
var http = require('http')

app.use('*',function(req,res,next){
    console.log("all request")
    next()
})

app.use('/home',function(req,res,next){
    res.end('home page ...')
})

app.get('/admin',function(req,res){
    res.end('admin page ...')
})

app.get('/hello/:who',function(req,res){
    res.end('hello:'+req.params.who)
})


var router = require('./router/router')(app)


app.listen(8081)



