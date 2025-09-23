variable "source_path"   {
    type = string
}

variable "environment"   { 
    type = map(string)
    default = {}
}

variable "inline_policies" {
  type    = list(object({ name = string, policy = string }))
  default = []
}
