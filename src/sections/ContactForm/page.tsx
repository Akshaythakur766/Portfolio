"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Loader2,
} from "lucide-react";
import toast from "react-hot-toast";
import * as yup from "yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

interface ContactFormInterface {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const schema = yup.object().shape({
  name: yup.string().trim().required("Name is required").min(2),
  email: yup.string().trim().email("Invalid email").required("Email is required"),
  subject: yup.string().trim().required("Subject is required").min(3),
  message: yup.string().trim().required("Message is required").min(10),
});

const defaultValues: ContactFormInterface = {
  email: "",
  message: "",
  name: "",
  subject: "",
};

export const ContactForm = () => {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<ContactFormInterface>({
    defaultValues,
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<ContactFormInterface> = async (data) => {
    try {
      await axios.post("/api/contact", data);

      // Success Animation Toast
      toast.custom((t) => (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-gray-900 border border-green-500/30 rounded-2xl p-4 shadow-2xl flex items-center gap-4"
        >
          <div className="bg-green-500/20 p-2 rounded-full">
            <Send className="size-6 text-green-500" />
          </div>
          <div>
            <h4 className="font-bold text-white">Message Sent!</h4>
            <p className="text-sm text-gray-400">Thanks {data.name}, I'll be in touch.</p>
          </div>
        </motion.div>
      ), { duration: 4000 });

      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Akshaythakur766", label: "GitHub" },
    { icon: Linkedin, href: "https://in.linkedin.com/in/akshay-thakur1766", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/akshay_thakur_03", label: "Instagram" },
  ];

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have an idea? Let's build it together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-8 bg-gray-900/50 backdrop-blur-xl border-white/10 shadow-2xl">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <div className="space-y-2 group">
                        <Label className="group-focus-within:text-primary transition-colors">Name</Label>
                        <Input
                          {...field}
                          placeholder="John Doe"
                          className="bg-white/5 border-white/10 focus:border-primary/50 transition-all h-12"
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                      </div>
                    )}
                  />
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <div className="space-y-2 group">
                        <Label className="group-focus-within:text-primary transition-colors">Email</Label>
                        <Input
                          {...field}
                          placeholder="john@example.com"
                          className="bg-white/5 border-white/10 focus:border-primary/50 transition-all h-12"
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                      </div>
                    )}
                  />
                </div>

                <Controller
                  name="subject"
                  control={control}
                  render={({ field }) => (
                    <div className="space-y-2 group">
                      <Label className="group-focus-within:text-primary transition-colors">Subject</Label>
                      <Input
                        {...field}
                        placeholder="Project collaboration"
                        className="bg-white/5 border-white/10 focus:border-primary/50 transition-all h-12"
                      />
                      {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>}
                    </div>
                  )}
                />

                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <div className="space-y-2 group">
                      <Label className="group-focus-within:text-primary transition-colors">Message</Label>
                      <Textarea
                        {...field}
                        placeholder="Tell me about your project..."
                        rows={6}
                        className="bg-white/5 border-white/10 focus:border-primary/50 transition-all resize-none"
                      />
                      {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                    </div>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-gradient-primary text-white font-bold text-lg hover:shadow-glow transition-all active:scale-[0.98]"
                >
                  {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : <Send className="w-5 h-5 mr-2" />}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {[
                { icon: Mail, title: "Email", value: "takshay766@gmail.com", color: "from-blue-500 to-cyan-500" },
                { icon: Phone, title: "Phone", value: "+91 82199-81467", color: "from-green-500 to-emerald-500" },
                { icon: MapPin, title: "Location", value: "Mohali, Punjab (India)", color: "from-purple-500 to-pink-500" },
              ].map((item, i) => (
                <Card key={i} className="p-6 bg-gray-900/40 border-white/5 flex items-center gap-4 hover:border-white/20 transition-colors group">
                  <div className={`size-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon className="size-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">{item.title}</p>
                    <p className="text-lg font-bold text-white">{item.value}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Socials */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 text-center">
              <h3 className="text-2xl font-bold mb-6">Connect on Socials</h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    target="_blank"
                    key={social.label}
                    href={social.href}
                    className="size-14 bg-white/5 hover:bg-white/10 rounded-2xl flex items-center justify-center transition-all hover:-translate-y-1 hover:shadow-lg border border-white/5"
                    aria-label={social.label}
                  >
                    <social.icon className="size-6 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
