import { useState } from "react";
import { Send, Mail, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('subject', formData.subject);
      submitData.append('message', formData.message);

      const response = await fetch('https://formspree.io/f/mrbyqjew', {
        method: 'POST',
        body: submitData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-screen h-screen object-cover z-0"
        style={{ minHeight: '100vh', minWidth: '100vw', opacity: '0.9' }}
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
      </video>

      {/* Very light overlay for minimal text readability */}
      <div className="absolute inset-0 bg-black/10 z-1"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple/20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-cyan/20 animate-float-delayed"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-pink/20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Mail className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-opacity-90 text-white">
              Let's Get In Touch!
            </h2>
          </div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd be happy to hear from you!
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-card/30 backdrop-blur-md border-white/10 shadow-glow hover:shadow-glow-lg transition-all duration-500">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center mr-4 border border-primary/30">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-white/90">Email</p>
                        <a 
                          href="mailto:srivastavadev626@gmail.com"
                          className="text-primary hover:text-primary/80 transition-colors duration-300"
                        >
                          srivastavadev626@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-cyan/20 backdrop-blur-sm flex items-center justify-center mr-4 border border-cyan/30">
                        <User className="w-6 h-6 text-cyan" />
                      </div>
                      <div>
                        <p className="font-medium text-white/90">LinkedIn</p>
                        <a 
                          href="https://www.linkedin.com/in/dev-pratap-srivastava-991811294"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan hover:text-cyan/80 transition-colors duration-300"
                        >
                          Connect with me
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-pink/20 backdrop-blur-sm flex items-center justify-center mr-4 border border-pink/30">
                        <MessageSquare className="w-6 h-6 text-pink" />
                      </div>
                      <div>
                        <p className="font-medium text-white/90">Response Time</p>
                        <p className="text-white/70">Usually within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Decorative element */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-purple/10 animate-float mx-auto"></div>
                <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-cyan/20 animate-float-delayed"></div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-card/30 backdrop-blur-md border-white/10 shadow-glow hover:shadow-glow-lg transition-all duration-500">
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white/90 font-medium">
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary/50 backdrop-blur-sm"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white/90 font-medium">
                        Your Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary/50 backdrop-blur-sm"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white/90 font-medium">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary/50 backdrop-blur-sm"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white/90 font-medium">
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary/50 backdrop-blur-sm resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-purple hover:bg-purple/90 text-white hover:scale-105 transition-all duration-300 shadow-glow-sm hover:shadow-glow"
                    size="lg"
                  >
                                        {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                        Send Message
                      </>
                    )}
                  </Button>
                  
                  {/* OR Separator */}
                  <div className="flex items-center pt-4">
                    <div className="flex-1 h-px bg-white/20"></div>
                    <span className="px-4 text-white/60 font-medium">OR</span>
                    <div className="flex-1 h-px bg-white/20"></div>
                  </div>
                  
                  <div className="pt-4">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-cyan/30 hover:border-cyan hover:bg-cyan/10 text-white transition-all duration-300"
                      size="lg"
                    >
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdnoFP-usy9ITNF_VQJ0OF32QOvTo67GNAIbZgH579TTkCeGg/viewform?usp=dialog"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open Contact Form
                      </a>
                    </Button>
                  </div>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;