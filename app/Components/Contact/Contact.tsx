"use client";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { toast } from "sonner";

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

    // console.log("🚀 ~ handleSendEmail ~ templateParams:", templateParams);
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
    <div className="bg-[#eef2ff] py-20 px-5 xl:p-20">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-lg">
        <h1 className="text-4xl font-semibold text-center mb-4">Contact</h1>
        <span className="w-20 h-1 mx-auto bg-primaryColor rounded block"></span>

        <div className="mt-16 grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
          <form onSubmit={handleSendEmail} className="xl:col-span-2 grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium">Name:</label>
              <input
                type="text"
                placeholder="Enter your name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primaryColor"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Email:</label>
              <input
                type="email"
                placeholder="Enter your email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primaryColor"
              />
            </div>
            <div className="xl:col-span-2">
              <label className="text-sm font-medium">Message:</label>
              <textarea
                className="border border-gray-300 rounded-md px-4 py-2 w-full h-32 focus:outline-none focus:ring-2 focus:ring-primaryColor"
                placeholder="Write your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="xl:col-span-2">
              <button
                type="submit"
                className="w-full bg-primaryColorButton text-white py-3 rounded-md font-semibold hover:bg-primaryColorHovar transition duration-300"
              >
                Contact Me
              </button>
            </div>
          </form>
          {/* <div>
            <Image src="/assets/gif/contact.png" alt="Contact" width={500} height={500} className="rounded-md shadow-md" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
