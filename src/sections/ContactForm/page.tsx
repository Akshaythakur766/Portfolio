"use client";

import Card from "@/components/Card/Card";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { ContactType } from "@/types/app/contact/contactType";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup
      .string()
      .typeError("Enter a valid phone number")
      .matches(
        /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
        "Enter a valid phone number"
      )
      .required("Phone number is required"),
    message: yup.string(),
  });

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactType>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ContactType) => {
    console.log(data);
    // Add form submission logic (e.g., API call) here
  };

  return (
    <div className="pt-16 h-[1000px] ">
      <div className="container px-32  ">
        <Card className="py-10 ">
          <SectionHeader title="Contact Me" eyebrow="Greetings" />
          <form>
            <input type="text" {...register("name")} />
          </form>
        </Card>
      </div>
    </div>
  );
}
