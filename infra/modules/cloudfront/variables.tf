variable "bucket_name" {
  description = "Private S3 bucket name that stores the site"
  type        = string
}

variable "s3_region" {
  description = "Region of the S3 bucket"
  type        = string
}

variable "domain_name" {
  description = "Root domain"
  type        = string
}

variable "acm_certificate_arn" {
  description = "ACM certificate ARN in us-east-1"
  type        = string
}
