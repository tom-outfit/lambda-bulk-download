/**
 * 
 */
var params, body = {};

var AWS = require('aws-sdk');
var s3 = new AWS.S3();

exports.handler = (event, context, callback) => {
    params = {
        Bucket: "bulk-journey-beyond",
        // Key: event.queryStringParameters.key
    };
    // s3.getObject(params, function (err, data) {
    s3.listObjectsV2(params, function (err, data) {
        if (err) {
            callback(err, null);
        } else {
            let response = {
                "statusCode": 200,
                "headers": {},
                "body": JSON.stringify(data.Contents),
                "isBase64Encoded": false
            };
            callback(null, response);
        }
    });
};