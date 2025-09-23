variable "root_domain" {
  description = "Root domain you own in Route 53 (e.g., namson.io)"
  type        = string
}

variable "region" {
  description = "AWS region for SES (same as Lambda/API GW)"
  type        = string
}
