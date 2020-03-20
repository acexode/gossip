const express = require('express'),
    mongoose = require('mongoose'),
    bodyparser = require('body-parser'),
    http = require("http"),
     passport = require("passport"),
    app = express(),
    dotenv = require('dotenv').config,
    auth = require('./routes/auth'),
    gossips = require('./routes/gossip'),
    comments = require('./model/comment')
    cors = require('cors')
    // require('./model/seed')
    console.log(process.env.MONGODBURI);
    console.log('process.env.MONGODBURI');
    // MIDDLEWARES
    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({extended:true}));

    //Not yet connected to mongodb mlab
    mongoose.connect('mongodb://localhost:27017/gossip', {useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
        console.log("connected to MongoDB");
    }).catch(err =>{
        console.log("Couldn't connect to db",err)
      })
console.log('object')

    // app.use(passport.initialize)
    app.use('/api', auth)
    app.use('/api', gossips)

    const normalizePort = (val)=> {
        var port = parseInt(val, 10);
      
        if (isNaN(port)) {
          // named pipe
          return val;
        }
      
        if (port >= 0) {
          // port number
          return port;
        }
      
        return false;
      }
    const port = normalizePort(4000);
    app.set('port', port);
    
    const server = http.createServer(app);
    server.listen(port, ()=>{
        console.log(`Running on port ${port}.....`);
    });
    

