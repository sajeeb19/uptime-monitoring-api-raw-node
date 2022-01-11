/*
 * Title: routing
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Md Nasir Ahmed
 * Date: 11/1/22
 *
 */
const {sampleHandelar} = require('./handelar/routeHandelar/sampleHandelar')

const routes = {
    sample :sampleHandelar,
}

module.exports =routes;