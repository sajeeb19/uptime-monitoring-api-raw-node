/*
 * Title: Uptiming monitor application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Md Nasir Ahmed
 * Date: 11/1/22
 *
 */

//dependence 
const http = require('http');
const url = require('url'); // node core url module
const {StringDecoder} =require('string_decoder'); // StringDecoder class of string_decoder model
const {handelerReqRes} = require('./helper/hendelerReqRes');

//app object or module scaffolding
const app = {};

app.config ={
    port:3000,
};

app.createServer = ()=>{   // also using can function 
    const server = http.createServer(app.handelerReqRes);

    server.listen(app.config.port,()=>{
        console.log(`lisition port :${app.config.port}`);
    });
}

app.handelerReqRes = handelerReqRes;

//start server

app.createServer();