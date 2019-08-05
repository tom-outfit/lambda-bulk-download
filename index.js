// var json = require('./media_library_item.json').data;
var https = require('https');
var AWS = require('aws-sdk');
var params, body = {};

var credentials = new AWS.SharedIniFileCredentials({profile: 'default', filename: '/Users/thomasdoyle/.aws/credentials'});
AWS.config.credentials = credentials;
AWS.config.update({region: 'ap-southeast-2'});

var s3 = new AWS.S3();

params = {
    Bucket: "bulk-journey-beyond"
};

body = {
    "tagName": ""
}

s3.listObjectsV2(params, function(err, data) {
    if (err)    console.log(err, err.stack);
    else        console.log(data);
});


