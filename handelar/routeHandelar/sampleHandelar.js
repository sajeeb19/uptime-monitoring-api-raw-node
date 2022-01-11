/*
 * Title: sample Handelar
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Md Nasir Ahmed
 * Date: 11/1/22
 *
 */

const handelar = {};

handelar.sampleHandelar = (requestObject,callback)=>{
     callback(200,{
         messege : 'this is sample hendlar'
     });
}
module.exports = handelar;