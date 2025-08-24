resource "aws_cloudfront_origin_access_control" "oac" {
    name                              = "${var.bucket_name}-oac"
    description                       = "OAC for ${var.bucket_name}"
    origin_access_control_origin_type = "s3"
    signing_behavior                  = "always"
    signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "this" {
    enabled             = true
    is_ipv6_enabled     = true
    price_class         = "PriceClass_100"
    default_root_object = "index.html"
    comment             = "Static site for ${var.domain_name}"
    http_version        = "http2and3"

    aliases = [
        var.domain_name,
        "www.${var.domain_name}"
    ]

    origin {
        domain_name = "${var.bucket_name}.s3.${var.s3_region}.amazonaws.com"
        origin_id   = "s3-${var.bucket_name}"
        origin_access_control_id = aws_cloudfront_origin_access_control.oac.id
    }

    default_cache_behavior {
        target_origin_id = "s3-${var.bucket_name}"
        viewer_protocol_policy = "redirect-to-https"
        allowed_methods  = ["GET", "HEAD"]
        cached_methods   = ["GET", "HEAD"]
        compress = true
    }

    custom_error_response {
        error_code            = 404
        response_code         = 404
        response_page_path    = "/404.html"
    }

    restrictions {
        geo_restriction {
            restriction_type = "none"
        }
    }

    viewer_certificate {
        acm_certificate_arn            = var.acm_certificate_arn
        ssl_support_method             = "sni-only"
        minimum_protocol_version       = "TLSv1.2_2021"
    }

}
