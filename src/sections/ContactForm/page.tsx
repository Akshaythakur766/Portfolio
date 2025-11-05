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
} from "lucide-react";
import toast from "react-hot-toast";
import * as yup from "yup"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import { motion } from "framer-motion"
interface ContactFormInterface {
  name: string,
  email: string;
  subject: string;
  message: string
}


const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Please enter your name.")
    .min(2, "Name must be at least 2 characters long.")
    .max(50, "Name cannot exceed 50 characters."),

  email: yup
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .required("Email is required."),

  subject: yup
    .string()
    .trim()
    .required("Please enter a subject.")
    .min(3, "Subject must be at least 5 characters long.")
    .max(100, "Subject cannot exceed 100 characters."),

  message: yup
    .string()
    .trim()
    .required("Please enter your message.")
    .min(10, "Message must be at least 10 characters long.")
  // .max(1000, "Message cannot exceed 1000 characters."),
});

const defaultValues: ContactFormInterface = {
  email: '',
  message: '',
  name: '',
  subject: ''
}

export const Contact = () => {

  const { control, formState: { errors }, handleSubmit } = useForm<ContactFormInterface>({
    defaultValues,
    resolver: yupResolver(schema),
    mode: "onSubmit"
  })


  const onSubmit: SubmitHandler<ContactFormInterface> = async (data) => {


    try {
      // Show loading toast (optional)
      const loadingToast = toast.loading("Sending your message...");

      // Send request to your API route
      await axios.post("/api/contact", data);

      // Close loading toast
      toast.dismiss(loadingToast);


      toast.custom((t) => (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className={`max-w-sm w-full bg-gray-900 border border-green-500/50 text-white rounded-xl shadow-lg p-4 flex items-start gap-3 ${t.visible ? "animate-in" : "animate-out"
            }`}
        >
          {/* ✅ Left icon with motion */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-green-400"
          >
            💌
          </motion.div>

          {/* Text content */}
          <div className="flex flex-col">
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="font-semibold text-green-400 text-base"
            >
              Message Sent Successfully 🎉
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm text-gray-300 mt-1"
            >
              Thank you, <span className="font-medium text-white">{data.name}</span> — I'll get back to you soon.
            </motion.p>
          </div>
        </motion.div>
      ), {
        duration: 4000,
        position: "top-right",
      });


    } catch (error: any) {
      console.error("❌ Error sending message:", error);

      // Dismiss any active toast
      toast.dismiss();

      // Handle known errors
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        toast.error(
          <div>
            <p className="font-semibold">Failed to Send Message</p>
            <p className="text-sm text-gray-200">{error.response.data.message}</p>
          </div>
        );
      } else {
        // Generic fallback
        toast.error(
          <div>
            <p className="font-semibold">Sorry, something went wrong 😢</p>
            <p className="text-sm text-gray-200">
              Please try again later or contact me directly.
            </p>
          </div>
        );
      }
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Akshaythakur766",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://in.linkedin.com/in/akshay-thakur1766",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/akshay_thakur_03",
      label: "Instagram",
    },
    // { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <div className="pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="p-8 glass-effect">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Controller
                    name="name"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={value ?? ''}
                          onChange={onChange}
                          placeholder="Enter your full name"
                          className="bg-secondary border-border focus:border-primary"
                        />
                        {
                          errors?.name && <p className="text-red-500 text-xs">{errors?.name?.message}</p>
                        }
                      </div>
                    )}
                  />
                  <Controller
                    name="email"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={value ?? ''}
                          onChange={onChange}
                          placeholder="Enter your email address"
                          className="bg-secondary border-border focus:border-primary"
                        />
                        {
                          errors?.email && <p className="text-red-500 text-xs">{errors?.email?.message}</p>
                        }
                      </div>
                    )}
                  />

                </div>
                <Controller
                  name="subject"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={value ?? ''}
                        onChange={onChange}
                        placeholder="What is your message about?"
                        className="bg-secondary border-border focus:border-primary"
                      />
                      {
                        errors?.subject && <p className="text-red-500 text-xs">{errors?.subject?.message}</p>
                      }
                    </div>
                  )}
                />
                <Controller
                  name="message"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={value}
                        onChange={onChange}
                        placeholder="Write your message here..."
                        rows={6}
                        className="bg-secondary border-border focus:border-primary resize-none"
                      />
                      {
                        errors?.message && <p className="text-red-500 text-xs">{errors?.message?.message}</p>
                      }
                    </div>
                  )}
                />





                <Button
                  type="submit"
                  className="w-full bg-gradient-primary text-white border-0 shadow-glow cursor-pointer"
                  onClick={handleSubmit(onSubmit)}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-slide-up ">
            <Card className="p-8 glass-effect">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">
                      takshay766@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+91 82199-81467</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">
                      Mohali, Punjab (India){" "}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 glass-effect">
              <h2 className="text-2xl font-bold mb-6">Follow Me</h2>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    target="_blank"
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-gradient-secondary hover:bg-gradient-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-glow"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-8 glass-effect">
              <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-muted-foreground mb-4">
                I'm always open to discussing new opportunities, interesting
                projects, and creative collaborations.
              </p>
              <p className="text-muted-foreground">
                Whether you need a complete website, a React component, or
                technical consultation, let's chat about how I can help bring
                your ideas to life.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
