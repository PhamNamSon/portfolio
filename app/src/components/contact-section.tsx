import { Linkedin, Mail, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center mb-12 max-w-2xl mx-auto">
          I'm currently open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hello, feel free to reach out!
        </p>

        <div className="max-w-lg mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium text-left">Email</h4>
                  <a href="mailto:phamnamson1999@gmail.com" className="hover:text-primary hover:underline transition-colors">
                    phamnamson1999@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium text-left">Phone</h4>
                  <a href="tel:5789743105" className="hover:text-primary hover:underline transition-colors">
                    578-974-3105
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium text-left">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/nam-son-pham/" target="_blank" rel="noreferrer" className="hover:text-primary hover:underline transition-colors">
                    linkedin.com/in/nam-son-pham
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
