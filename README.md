```bash
aws lambda create-function --region ap-southeast-2 --function-name bulkdownload --handler index.handler --runtime nodejs10.x --role arn:aws:iam::634891114081:role/service-role/lambda-service --code S3Bucket=generic-lambda-function,S3Key=generic-lambda.zip
```