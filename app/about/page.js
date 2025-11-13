import React from "react";

const AboutPage = () => {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white">
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-extrabold tracking-wide mb-6">
          About <span className="text-cyan-300">BitLinks</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          BitLinks is a modern and powerful URL shortener built for simplicity, speed, and seamless user experience.
          We help users convert long and complex URLs into short, clean, and shareable links — instantly.
        </p>
      </section>

      {/* Cards Section */}
      <section className="max-w-6xl mx-auto px-6 pb-32 grid md:grid-cols-3 gap-10">
        
        {/* Card 1 */}
        <div className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold mb-3 text-cyan-300">Fast Performance</h2>
          <p className="text-gray-300">
            Built using Next.js and advanced caching strategies to ensure lightning-fast redirect speeds globally.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold mb-3 text-purple-300">Secure & Reliable</h2>
          <p className="text-gray-300">
            Every link is encrypted and protected. We ensure the highest level of safety and reliability.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold mb-3 text-pink-300">Simple To Use</h2>
          <p className="text-gray-300">
            With a clean UI and easy steps, shortening your URLs takes just a few clicks — no complications.
          </p>
        </div>

      </section>

      {/* Team / Vision Section */}
      <section className="max-w-5xl mx-auto px-6 pb-28 text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-cyan-300">Our Mission</h2>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          We are dedicated to building simple yet powerful web solutions that enhance efficiency, improve digital
          sharing, and help people communicate more effectively online.
        </p>
      </section>

    </main>
  );
};

export default AboutPage;
