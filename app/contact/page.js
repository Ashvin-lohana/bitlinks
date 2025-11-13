import React from "react";

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white flex items-center justify-center px-6 py-20">

      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-10 space-y-10">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-center tracking-wide">
          Contact <span className="text-cyan-300">Ashvin</span>
        </h1>

        <p className="text-center text-gray-300 max-w-2xl mx-auto text-lg">
          Feel free to reach out anytime. I usually reply within a few hours.
        </p>

        <form className="grid md:grid-cols-2 gap-6 w-full">

          <input
            type="text"
            placeholder="Your Name"
            className="bg-white/10 border border-white/20 p-4 rounded-xl outline-none focus:border-cyan-300 transition-all"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="bg-white/10 border border-white/20 p-4 rounded-xl outline-none focus:border-cyan-300 transition-all"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="bg-white/10 border border-white/20 p-4 rounded-xl outline-none resize-none focus:border-purple-300 transition-all md:col-span-2"
          ></textarea>

          <button
            className="md:col-span-2 py-3 rounded-xl font-bold text-lg bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 hover:scale-105 transition-transform shadow-xl"
          >
            Send Message
          </button>

        </form>

        <div className="text-center space-y-2 text-gray-300 pt-6">
          <p><span className="text-white font-semibold">Name:</span> Ashvin Lohana</p>
          <p><span className="text-white font-semibold">Email:</span> ashvinlohana4@gmail.com</p>
          <p><span className="text-white font-semibold">Phone:</span> 0345 3460806</p>
        </div>

      </div>

    </main>
  );
}
