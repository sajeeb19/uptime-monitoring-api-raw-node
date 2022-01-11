/*
 * Title: hamdel request response 
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Md Nasir Ahmed
 * Date: 11/1/22
 *
 */
const url = require('url'); // node core url module
const {StringDecoder} =require('string_decoder'); // StringDecoder class of string_decoder model
const routes = require('../route');
const {notFoundHandelar} = require('../handelar/routeHandelar/notFoundHendaler');
const {sampleHandelar} = require('../handelar/routeHandelar/sampleHandelar');

// module scaffolding
const handelar = {} ;

handelar.handelerReqRes = (req,res) =>{
    //request hendalling
    // get the url and parse it
    const parseUrl = url.parse(req.url,true);
    const pathName = parseUrl.pathname;  //console.log(pathName);
    const trimmedPathName = pathName.replace(/^\/+|\/+$/g,''); //console.log(trimmedPathName);
    //method
    const method = req.method.toLowerCase(); //console.log(method);
    //queryStream
    const queryStreamObject = parseUrl.query; //   console.log(queryStreamObject);
    //header
    const headerReqObject = req.headers; //  console.log(headerReqObject);
    //string decoder use { toString() or Uft-8}
    const stringDecoder = new StringDecoder('utf-8');

    const requestObject = {
        parseUrl,
        pathName,
        trimmedPathName,
        method,
        queryStreamObject,
        headerReqObject
    }

    const chosenHendaler = routes[trimmedPathName] ? routes[trimmedPathName] : notFoundHandelar;
    chosenHendaler(requestObject,(statusCode,payload)=>{
        statusCode = typeof(statusCode) === 'number' ? statusCode : 500 ;
        payload = typeof(payload) === 'object' ? payload : {};

        const plyloadString = JSON.stringify(payload);

        res.writeHead(statusCode);
        res.end(plyloadString);
    });
    let realData = '';
    req.on('data',(buffer)=>{
            realData += stringDecoder.write(buffer);
    })
    req.on('end',()=>{
        realData+=stringDecoder.end();
        console.log(realData);
        //response hendalling
        res.end('hello sojib world we will do lots of things');
    });

    
    
}

module.exports = handelar;