
#1 /bin/bash
aws lambda invoke --function-name bulkdownload --payload '{"key": "value"}' out
# sed -i 's/"//g' out
# sleep 5
# aws logs get-log-events --log-group-name /aws/lambda/bulkdownload --log-stream-name=file://out --limit 5