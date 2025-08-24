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
    description = "Name of the S3 bucket to serve via root"
}

variable "root_domain" {
    description = "Root domain used for the site"
    type        = string
    default     = "namson.io"
}

variable "enable_www" {
    description = "Also issue cert for www"
    type        = bool
    default     = true
}