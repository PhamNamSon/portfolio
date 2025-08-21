// infra/S3_prod/variables.tf
variable "region" {
  type        = string
  description = "AWS region to deploy to"
}

variable "aws_profile" {
  type        = string
  description = "AWS CLI profile name"
  default     = "portfolio-tf"
}

variable "project_name" {
  type        = string
  description = "Short name used for naming"
}
