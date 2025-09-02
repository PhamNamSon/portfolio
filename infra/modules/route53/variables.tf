variable "root_domain" {
  description = "Hosted zone root (e.g., namson.io)"
  type        = string
}

variable "alias_name" {
  description = "CloudFront distribution domain name"
  type        = string
}

variable "alias_zone_id" {
  description = "CloudFront hosted zone id"
  type        = string
}

variable "acm_domain_validation_options" {
  description = "List from aws_acm_certificate.site.domain_validation_options"
  type = list(object({
    domain_name           = string
    resource_record_name  = string
    resource_record_type  = string
    resource_record_value = string
  }))
  default = []
}