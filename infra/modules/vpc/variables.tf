variable "name" {
  type        = string
  description = "The name of the VPC"
}

variable "azs" {
  type = list(string)
}

variable "public_subnet_cidrs" {
  type = list(string)
}
