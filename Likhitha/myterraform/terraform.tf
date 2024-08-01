provider "aws" {
  region = "us-east-1"  
}

resource "aws_iam_role" "lambda_role" {
  name = "lambda_sqs_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = "sts:AssumeRole",
        Effect = "Allow",
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })
}

resource "aws_iam_policy" "lambda_policy" {
  name = "lambda_sqs_policy"

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = [
          "sqs:SendMessage",
          "sqs:ReceiveMessage",
          "sqs:DeleteMessage",
          "sqs:GetQueueAttributes",
          "sqs:GetQueueUrl"
        ],
        Effect = "Allow",
        Resource = [
          "arn:aws:sqs:us-east-1:381491921420:MainQueue", 
          "arn:aws:sqs:us-east-1:381491921420:DeadLetterQueue"  
        ]
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_role_policy_attach" {
  role       = aws_iam_role.lambda_role.name
  policy_arn = aws_iam_policy.lambda_policy.arn
}
#lambda
resource "aws_lambda_function" "sqs_lambda" {
  filename         = "/workspaces/Yanda_Likhitha/.devcontainer/myterraform/python.py"  
  function_name    = "lambda_handler"
  role             = aws_iam_role.lambda_role.arn
  handler          = "index.handler"
  runtime          = "python3.8"  
  source_code_hash = filebase64sha256("/workspaces/Yanda_Likhitha/.devcontainer/myterraform/python.py") 

  environment {
    variables = {
      MAIN_QUEUE_URL       = "https://sqs.us-east-1.amazonaws.com/381491921420/MainQueue"  
      DEAD_LETTER_QUEUE_URL = "https://sqs.us-east-1.amazonaws.com/381491921420/DeadLetterQueue" 
    }
  }
}

