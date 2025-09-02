module "vpc" {
  source              = "../modules/vpc"
  name                = var.name
  azs                 = var.azs
  public_subnet_cidrs = var.public_subnet_cidrs
}
