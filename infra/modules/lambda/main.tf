data "archive_file" "zip" {
  type        = "zip"
  source_dir  = var.source_path
  output_path = "${path.module}/build/contact-form-email.zip"
}

resource "aws_iam_role" "this" {
  name = "contact-form-email-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{ Effect = "Allow", Principal = { Service = "lambda.amazonaws.com" }, Action = "sts:AssumeRole" }]
  })
}

# Basic logging
resource "aws_iam_role_policy_attachment" "logs" {
  role       = aws_iam_role.this.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_iam_role_policy" "inline" {
  for_each = { for p in var.inline_policies : p.name => p }
  name   = each.value.name
  role   = aws_iam_role.this.id
  policy = each.value.policy
}

resource "aws_cloudwatch_log_group" "lg" {
  name              = "/aws/lambda/contact-form-email"
  retention_in_days = 14
}

resource "aws_lambda_function" "this" {
  function_name = "contact-form-email"
  role          = aws_iam_role.this.arn
  filename      = data.archive_file.zip.output_path
  source_code_hash = data.archive_file.zip.output_base64sha256

  runtime  = "python3.12"
  handler  = "email_handler.lambda_handler"
  timeout  = 10
  memory_size = 128
  architectures = "x86_64"

  environment {
    variables = var.environment
  }
}
