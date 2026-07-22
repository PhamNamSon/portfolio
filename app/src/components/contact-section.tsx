import { Linkedin, Mail, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center mb-12 max-w-2xl mx-auto">
          I'm currently open to new opportunities and collaborations. Whether you
          have a question, a project idea, or just want to say hello, feel free to
          reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-4 p-6 rounded-lg gradient-border card-hover">
            <div className="p-3 rounded-full bg-primary/10">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-1">Email</h4>
              <a href="mailto:..." className="text-sm hover:text-primary hover:underline">
                phamnamson1999@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 p-6 rounded-lg gradient-border card-hover">
            <div className="p-3 rounded-full bg-primary/10">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-1">Phone</h4>
              <a href="tel:..." className="text-sm hover:text-primary hover:underline">
                578-974-3105
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 p-6 rounded-lg gradient-border card-hover">
            <div className="p-3 rounded-full bg-primary/10">
              <Linkedin className="w-6 h-6 text-primary" />
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-1">LinkedIn</h4>
              <a href="..." className="text-sm hover:text-primary hover:underline">
                linkedin.com/in/nam-son-pham
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};