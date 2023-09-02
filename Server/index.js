//import json server
const jsonserver = require('json-server');

//create server
 const server = jsonserver.create()

 //set up the path for db.json file
//db.json avaliable on net then we can fetch

const router = jsonserver.router('db.json')

//return a middleware used by json server
const middleware = jsonserver.defaults()

//set a port for backend 
const port  =process.env.PORT || 3001 //default port number

//use srever
server.use(middleware)
server.use(router)


//to run the port
server.listen (port, ()=>{
    console.log('jsonserver listiening on port 3001');
})