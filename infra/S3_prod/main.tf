module "s3_static_site" {
    source       = "../modules/s3_static_site"
    bucket_name  = var.bucket_name
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

resource "aws_route53_record" "validation" {
    for_each = {
        for dvo in aws_acm_certificate.site.domain_validation_options :
        dvo.domain_name => {
            name  = dvo.resource_record_name
            type  = dvo.resource_record_type
            value = dvo.resource_record_value
        }
    }

    zone_id = data.aws_route53_zone.root.zone_id
    name    = each.value.name
    type    = each.value.type
    ttl     = 60
    records = [each.value.value]
}

resource "aws_acm_certificate_validation" "site" {
    provider                = aws.us_east_1
    certificate_arn         = aws_acm_certificate.site.arn
    validation_record_fqdns = [for r in aws_route53_record.validation : r.fqdn]
}

module "cloudfront" {
    source = "../modules/cloudfront"

    bucket_name         = var.bucket_name
    s3_region           = var.region
    domain_name         = var.root_domain
    acm_certificate_arn = aws_acm_certificate.site.arn

    providers = { aws = aws.us_east_1 }

    depends_on = [aws_acm_certificate_validation.site]
}
