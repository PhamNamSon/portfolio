module "s3_static_site" {
    source       = "../modules/s3_static_site"
    bucket_name  = var.bucket_name
}
