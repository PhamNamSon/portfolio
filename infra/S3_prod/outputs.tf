output "acm_certificate_arn" {
  value = aws_acm_certificate.site.arn
}

output "cloudfront_distribution_id" {
  value = module.cloudfront.distribution_id
}