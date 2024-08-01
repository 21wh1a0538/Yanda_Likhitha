
import boto3
import json

def lambda_handler(event, context):
   
    sqs = boto3.client('sqs')
    
    
    source_queue_name = event['source_queue']
    destination_queue_name = event['destination_queue']
    
    
    is_fifo_queue = source_queue_name.endswith('.fifo')
    
    
    response = sqs.get_queue_url(QueueName=source_queue_name)
    source_queue_url = response['QueueUrl']
    
   
    response = sqs.get_queue_url(QueueName=destination_queue_name)
    destination_queue_url = response['QueueUrl']
    
   
    response = sqs.receive_message(
        QueueUrl=source_queue_url,
        AttributeNames=['All'], 
        MaxNumberOfMessages=10    
    )
    
    if 'Messages' in response:
        messages = response['Messages']
        for message in messages:
            
            message_body = message['Body']
            message_attributes = message.get('MessageAttributes', {})
            
            
            if is_fifo_queue:
                
                if 'MessageGroupId' in message_attributes and 'StringValue' in message_attributes['MessageGroupId']:
                    message_group_id = message_attributes['MessageGroupId']['StringValue']
                else:
                    message_group_id = None
                
                
                if 'MessageDeduplicationId' in message_attributes and 'StringValue' in message_attributes['MessageDeduplicationId']:
                    message_deduplication_id = message_attributes['MessageDeduplicationId']['StringValue']
                else:
                    message_deduplication_id = None
                
                
                additional_attributes = {}
                if message_group_id is not None:
                    additional_attributes['MessageGroupId'] = {'StringValue': message_group_id, 'DataType': 'String'}
                if message_deduplication_id is not None:
                    additional_attributes['MessageDeduplicationId'] = {'StringValue': message_deduplication_id, 'DataType': 'String'}
                
                message_attributes.update(additional_attributes)
            
            
            sqs.send_message(
                QueueUrl=destination_queue_url,
                MessageBody=message_body,
                MessageAttributes=message_attributes
            )
            
            
            sqs.delete_message(
                QueueUrl=source_queue_url,
                ReceiptHandle=message['ReceiptHandle']
            )
    
    return {
        'statusCode': 200,
        'body': json.dumps('Messages transferred successfully')
    }