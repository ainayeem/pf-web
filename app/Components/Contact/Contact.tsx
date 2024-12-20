"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import Image from "next/image";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      toast.error("EmailJS configuration is missing.");
      return;
    }

    const templateParams = { name, email, message };

    try {
      toast.promise(
        emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        ),
        {
          loading: "Sending message...",
          success: "Message sent successfully!",
          error: "Failed to send the message. Please try again.",
        }
      );

      // Reset form fields on success
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Email send error:", error);
      toast.error("An error occurred while sending your message.");
    }
  };
  return (
    <div>
      <div className="bg-[#eef2ff]">
        <div>
          <div className=" py-20 px-5 xl:p-20 xl:pb-10 border-b">
            <div>
              <h1 className="text-4xl font-semibold text-center">contact</h1>
              <span className="w-20 h-1 mx-auto bg-primaryColor rounded block"></span>
            </div>
            <div className="mt-16 grid grid-cols-1 xl:grid-cols-3 gap-10 xl:gap-20 align-middle">
              <form onSubmit={handleSendEmail} className="xl:col-span-2 grid grid-cols-1 xl:grid-cols-2 gap-2 xl:gap-y-5 xl:gap-x-10 align-middle">
                <label className="relative w-full">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-primaryColor transition-colors duration-300 mb-3"
                  />
                  <span
                    className={`absolute top-3.5 left-5 transition-all duration-300 rounded ${
                      name ? "bg-white left-2 scale-[0.9] text-primaryColor -px-1 -top-2.5" : "text-[#777777]"
                    } peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-primaryColor peer-focus:px-1`}
                  >
                    Enter your name
                  </span>
                </label>
                <label className="relative w-full">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-primaryColor transition-colors duration-300 mb-3"
                  />
                  <span
                    className={`absolute top-3.5 left-5 transition-all duration-300 rounded ${
                      email ? "bg-white left-2 scale-[0.9] text-primaryColor -px-1 -top-2.5" : "text-[#777777]"
                    } peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-primaryColor peer-focus:px-1`}
                  >
                    Enter your email
                  </span>
                </label>
                <label className="relative xl:col-span-2 w-full">
                  <textarea
                    name="message"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="peer border-[#e5eaf2] border rounded-md outline-none px-4 min-h-[200px] py-3 w-full focus:border-primaryColor transition-colors duration-300"
                  />
                  <span
                    className={`absolute top-3.5 left-5 transition-all duration-300 rounded ${
                      message ? "bg-white left-2 scale-[0.9] text-primaryColor -px-1 -top-2.5" : "text-[#777777]"
                    } peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-primaryColor peer-focus:px-1`}
                  >
                    Write your message
                  </span>
                </label>
                <div className="xl:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 py-2 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-primaryColorButton border border-transparent rounded-md focus:outline-none hover:bg-primaryColorHovar"
                  >
                    Contact Me
                  </button>
                </div>
              </form>
              <div>
                <Image src="/assets/gif/contact.png" alt="Project Image" className="h-auto w-full" width={500} height={500} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
