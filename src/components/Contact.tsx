```tsx
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
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submitData = new FormData();

      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("subject", formData.subject);
      submitData.append("message", formData.message);

      const response = await fetch("https://formspree.io/f/mrbyqjew", {
        method: "POST",
        body: submitData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description:
            "Thank you for reaching out. I'll get back to you soon.",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Form submission failed");
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
    <section
      id="contact"
      className="scroll-mt-20 min-h-[100svh] md:min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
        style={{ opacity: 0.9 }}
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
      </video>

      {/* Very light overlay for minimal text readability */}
      <div className="absolute inset-0 bg-black/10 z-[1]" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple/20 animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-cyan/20 animate-float-delayed" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-pink/20 animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto w-full px-4 sm:px-6 py-14 sm:py-20 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
            <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-primary shrink-0" />

            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-bold text-white">
              Let's Get In Touch!
            </h2>
          </div>

          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed px-2">
            Have a project in mind or just want to chat? I'd be happy to hear
            from you!
          </p>

          <div className="w-20 sm:w-24 h-1 bg-primary mx-auto rounded-full mt-5 sm:mt-6" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card/30 backdrop-blur-md border-white/10 shadow-glow hover:shadow-glow-lg transition-all duration-500">
                <div className="p-5 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                    Get In Touch
                  </h3>

                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-white/90 mb-1">
                          Email
                        </p>

                        <a
                          href="mailto:srivastavadev626@gmail.com"
                          className="text-primary hover:text-primary/80 transition-colors duration-300 break-all"
                        >
                          srivastavadev626@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* LinkedIn */}
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full bg-cyan/20 backdrop-blur-sm flex items-center justify-center border border-cyan/30">
                        <User className="w-5 h-5 sm:w-6 sm:h-6 text-cyan" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-white/90 mb-1">
                          LinkedIn
                        </p>

                        <a
                          href="https://www.linkedin.com/in/dev-pratap-srivastava"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan hover:text-cyan/80 transition-colors duration-300 break-words"
                        >
                          Connect with me
                        </a>
                      </div>
                    </div>

                    {/* Response Time */}
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full bg-pink/20 backdrop-blur-sm flex items-center justify-center border border-pink/30">
                        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-pink" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-white/90 mb-1">
                          Response Time
                        </p>

                        <p className="text-white/70">
                          Usually within 24 hours
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Decorative Element */}
              <div className="relative hidden sm:block">
                <div className="w-32 h-32 rounded-full bg-purple/10 animate-float mx-auto" />

                <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-cyan/20 animate-float-delayed" />
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-card/30 backdrop-blur-md border-white/10 shadow-glow hover:shadow-glow-lg transition-all duration-500">
              <div className="p-5 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-white/90 font-medium"
                      >
                        Your Name
                      </Label>

                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary/50 backdrop-blur-sm"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-white/90 font-medium"
                      >
                        Your Email
                      </Label>

                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary/50 backdrop-blur-sm"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="text-white/90 font-medium"
                    >
                      Subject
                    </Label>

                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary/50 backdrop-blur-sm"
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-white/90 font-medium"
                    >
                      Your Message
                    </Label>

                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary/50 backdrop-blur-sm resize-none"
                      placeholder="Tell me about your project or just say hello!"
                      required
                    />
                  </div>

                  {/* Send Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-purple hover:bg-purple/90 text-white hover:scale-[1.02] transition-all duration-300 shadow-glow-sm hover:shadow-glow"
                    size="lg"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {/* OR Separator */}
                  <div className="flex items-center pt-4">
                    <div className="flex-1 h-px bg-white/20" />

                    <span className="px-3 sm:px-4 text-white/60 font-medium">
                      OR
                    </span>

                    <div className="flex-1 h-px bg-white/20" />
                  </div>

                  {/* Google Form */}
                  <div className="pt-2 sm:pt-4">
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
```
