variable "bucket_name" {
    type        = string
    description = "Exact S3 bucket name to create"
}

variable "cloudfront_distribution_id" {
    type        = string
    description = "CloudFront distribution ID for OAC"
}
