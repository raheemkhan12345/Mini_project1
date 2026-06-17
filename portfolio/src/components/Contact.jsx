import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiMapPin,
  FiUser,
  FiSend,
  FiCheckCircle,
  FiLoader,
} from "react-icons/fi";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_8p0wyxn",
        "template_ujvpgg8",
        form.current,
        "WCnb9ga9dvUFlK47f",
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        form.current.reset();

        setTimeout(() => {
          setSuccess(false);
        }, 4000);
      })
      .catch((error) => {
        setLoading(false);
        console.log("Something went wrong!");
        console.log(error);
      });
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#0b0f19] text-slate-100 py-20 md:py-32 relative overflow-hidden border-t border-slate-900"
    >
      {/* Soft Developer Cyber Grids & Neon Ambient Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] opacity-[0.12] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 rounded-full inline-block backdrop-blur-md">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mt-4 mb-4">
            Let's Collaborate
          </h2>
          <div className="w-16 h-0.75 bg-linear-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto items-start">
          {/* Left Column: Contact Information Premium Cards */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-100 mb-4">
                Have a project in mind?
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed font-normal">
                If you have any questions, project ideas, or want to work
                together, feel free to contact me. I will try to respond as soon
                as possible.
              </p>
            </div>

            {/* Info Items Stacks */}
            <div className="space-y-4 pt-4">
              {/* Item: Name */}
              <div className="group flex items-center gap-4 p-4 bg-slate-900/30 border border-slate-800/80 rounded-xl transition-all duration-300 hover:border-indigo-500/40">
                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20 text-xl shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <FiUser />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    Name
                  </span>
                  <span className="text-sm font-semibold text-slate-200 block truncate">
                    Abdul Rahim
                  </span>
                </div>
              </div>

              {/* Item: Email */}
              <div className="group flex items-center gap-4 p-4 bg-slate-900/30 border border-slate-800/80 rounded-xl transition-all duration-300 hover:border-cyan-500/40">
                <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20 text-xl shrink-0 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
                  <FiMail />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    Email Address
                  </span>
                  <a
                    href="mailto:raheemkhan.rk12345@gmail.com"
                    className="text-sm font-semibold text-slate-200 hover:text-indigo-400 transition-colors block truncate"
                  >
                    raheemkhan.rk12345@gmail.com
                  </a>
                </div>
              </div>

              {/* Item: Location */}
              <div className="group flex items-center gap-4 p-4 bg-slate-900/30 border border-slate-800/80 rounded-xl transition-all duration-300 hover:border-amber-500/40">
                <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20 text-xl shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                  <FiMapPin />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-slate-200 block truncate">
                    Pakistan
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form Glass Element */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="lg:col-span-3 bg-slate-900/20 border border-slate-800/80 p-6 md:p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] space-y-5 backdrop-blur-xs"
          >
            <div>
              <label className="block mb-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                Your Name
              </label>
              <input
                name="name"
                type="text"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-sm transition-all"
              />
            </div>

            <div>
              <label className="block mb-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                Your Email
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="johndoe@example.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-sm transition-all"
              />
            </div>

            <div>
              <label className="block mb-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Hi Rahim, let's build something awesome..."
                className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-sm transition-all resize-none"
              ></textarea>
            </div>

            {/* Form CTA Action Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-xl text-sm transition-all duration-200 ${
                loading
                  ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-500 text-white cursor-pointer hover:shadow-[0_0_20px_rgba(79,70,229,0.3)]"
              }`}
            >
              {loading ? (
                <>
                  <FiLoader className="animate-spin text-lg" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <FiSend className="text-base" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {/* Success Box */}
            {success && (
              <div className="flex items-center justify-center gap-2 p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-sm font-medium animate-fadeIn">
                <FiCheckCircle className="text-base shrink-0" />
                <span>Message Sent Successfully!</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
