
#1 /bin/bash
aws lambda invoke --function-name my-function --payload '{"key": "value"}' out
sed -i 's/"//g' out
sleep 15
aws logs get-log-events --log-group-name /aws/lambda/my-function --log-stream-name=file://out --limit 5