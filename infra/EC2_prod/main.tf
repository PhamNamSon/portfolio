module "vpc" {
  source              = "../modules/vpc"
  name                = var.name
  azs                 = var.azs
  public_subnet_cidrs = var.public_subnet_cidrs
}

module "alb" {
  source            = "../modules/alb"
  name              = var.name
  vpc_id            = module.vpc.vpc_id
  public_subnet_ids = module.vpc.public_subnet_ids
}
