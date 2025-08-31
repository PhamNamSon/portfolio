module "s3_static_site" {
    source       = "../modules/s3_static_site"
    bucket_name  = var.bucket_name

    cloudfront_distribution_id = module.cloudfront.distribution_id
}

data "aws_route53_zone" "root" {
    name         = var.root_domain
    private_zone = false
}

resource "aws_acm_certificate" "site" {
    provider                  = aws.us_east_1
    domain_name               = var.root_domain
    validation_method         = "DNS"
    subject_alternative_names = ["www.${var.root_domain}"]

    lifecycle {
        create_before_destroy = true
    }
}

module "dns" {
    source      = "../modules/route53"
    root_domain = var.root_domain

    alias_name    = module.cloudfront.distribution_domain_name
    alias_zone_id = module.cloudfront.hosted_zone_id

    acm_domain_validation_options = aws_acm_certificate.site.domain_validation_options
}

resource "aws_acm_certificate_validation" "site" {
    provider                = aws.us_east_1
    certificate_arn         = aws_acm_certificate.site.arn
    validation_record_fqdns = module.dns.validation_record_fqdns
}

module "cloudfront" {
    source = "../modules/cloudfront"

    bucket_name         = var.bucket_name
    s3_region           = var.region
    domain_name         = var.root_domain
    acm_certificate_arn = aws_acm_certificate.site.arn

    depends_on = [aws_acm_certificate_validation.site]
}
