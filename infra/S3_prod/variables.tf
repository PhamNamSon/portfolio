variable "region" {
  type        = string
  description = "AWS region to deploy to"
}

variable "aws_profile" {
  type        = string
  description = "AWS CLI profile name"
  default     = "portfolio-tf"
}

variable "bucket_name" {
    type        = string
    description = "Override bucket name"
}
