output "zone_id" {
  value = data.aws_route53_zone.root.zone_id
}

output "validation_record_fqdns" {
  value = [for r in aws_route53_record.validation : r.fqdn]
}

output "alias_fqdns" {
  value = [
    aws_route53_record.root_a.fqdn,
    aws_route53_record.www_a.fqdn
  ]
}
