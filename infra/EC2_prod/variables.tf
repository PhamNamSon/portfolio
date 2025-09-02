variable "region" {
  type        = string
  description = "AWS region to deploy to"
}

variable "aws_profile" {
  type        = string
  description = "AWS CLI profile name"
  default     = "portfolio-tf"
}

variable "name" {
  type        = string
  description = "The name of the VPC"
  default     = "portfolio"
}

variable "azs" {
  type    = list(string)
  default = ["us-west-2a", "us-west-2b"]
}

variable "public_subnet_cidrs" {
  type    = list(string)
  default = ["10.0.0.0/24", "10.0.1.0/24"]
}
