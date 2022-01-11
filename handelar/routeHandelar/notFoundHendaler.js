/*
 * Title: not found Handelar
 * Description: 404 not found
 * Author: Md Nasir Ahmed
 * Date: 11/1/22
 *
 */

const handelar = {};

handelar.notFoundHandelar = (requestObject,callback)=>{
    callback(404,{
        messege : ' url not found'
    });
}
module.exports = handelar;