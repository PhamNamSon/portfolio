output "domain" {
  value = aws_ses_domain_identity.this.domain
}

output "identity_arn" {
  value = aws_ses_domain_identity.this.arn
}

output "verification_token" {
  value = aws_ses_domain_identity.this.verification_token
}

output "dkim_tokens" {
  value = aws_ses_domain_dkim.this.dkim_tokens
}

output "mail_from_domain" {
  value = aws_ses_domain_mail_from.this.mail_from_domain
}

output "hosted_zone_id" {
  value = data.aws_route53_zone.root.zone_id
}
