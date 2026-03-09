import React from "react";
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'

const Contact = () => {
    const form = useRef();

    const [loading,setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);


        emailjs.sendForm(
            "service_8p0wyxn",
            "template_ujvpgg8",
            form.current,
            "WCnb9ga9dvUFlK47f"
        )
        .then(() => {
                setLoading(false);
                setSuccess(true);
                form.current.reset();

                setTimeout(() => {
                    setSuccess(false);
                },4000);
            })
            .catch((error) => { 
                setLoading(false);
                console.log("something went wrong!")
                console.log(error)});
    }
  return (
    <div id="contact" className="w-full bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Get In Touch
            </h3>

            <p className="text-gray-300 mb-6">
              If you have any questions, project ideas, or want to work
              together, feel free to contact me. I will try to respond as
              soon as possible.
            </p>

            <div className="space-y-4 text-gray-300">
              <p><span className="font-semibold">Name:</span> Abdul Rahim</p>
              <p><span className="font-semibold">Email:</span> raheemkhan.rk12345@gmail.com</p>
              <p><span className="font-semibold">Location:</span> Pakistan</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-800 p-8 rounded-lg shadow-lg"
           ref={form}
           onSubmit={sendEmail}
           >

            <div className="mb-4">
              <label className="block mb-2 text-sm">Your Name</label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm">Your Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-md font-semibold"
            >
              Send Message
            </button>

            { success && (
                <p className="text-green-400 mt-4 text-center">Message Sent Successfully!</p>
            )}
          </form>

        </div>

      </div>
    </div>
  );
};

export default Contact;