terraform {
  backend "s3" {
    bucket       = "namson-portfolio-tf-state"
    key          = "ec2_prod/terraform.tfstate"
    region       = "us-west-2"
    use_lockfile = true
    profile      = "portfolio-tf"
    encrypt      = true
  }

  required_version = "~> 1.13.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}
