resource "aws_route53_record" "root_a" {
    zone_id = data.aws_route53_zone.root.zone_id
    name    = var.root_domain
    type    = "A"
    alias {
        name                   = var.alias_name
        zone_id                = var.alias_zone_id
        evaluate_target_health = false
    }
}

resource "aws_route53_record" "root_aaaa" {
    zone_id = data.aws_route53_zone.root.zone_id
    name    = var.root_domain
    type    = "AAAA"
    alias {
        name                   = var.alias_name
        zone_id                = var.alias_zone_id
        evaluate_target_health = false
    }
}

resource "aws_route53_record" "www_a" {
    zone_id = data.aws_route53_zone.root.zone_id
    name    = "www.${var.root_domain}"
    type    = "A"
    alias {
        name                   = var.alias_name
        zone_id                = var.alias_zone_id
        evaluate_target_health = false
    }
}


resource "aws_route53_record" "validation" {
    for_each = {
        for dvo in var.acm_domain_validation_options :
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
