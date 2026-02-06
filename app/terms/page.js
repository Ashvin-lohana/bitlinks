export default function TermsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-black" />
      <div className="absolute top-10 right-24 w-72 h-72 bg-indigo-500 blur-[150px] opacity-40" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500 blur-[150px] opacity-30" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-8 py-20">

        <h1 className="text-5xl font-extrabold mb-6">
          Terms of <span className="text-yellow-300">Service</span>
        </h1>

        <p className="text-white/70 mb-12 text-lg">
          Using BitLinks means agreeing to responsible and lawful usage.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {[
            ["✅ Allowed Use", "Shorten normal, legal, and safe URLs."],
            ["❌ Prohibited", "Spam, malware, phishing links are blocked."],
            ["⚡ Auto Blocking", "Harmful URLs may be disabled instantly."],
            ["📦 Service Updates", "Features may change anytime."],
            ["🔐 User Responsibility", "You are responsible for shared links."],
            ["📜 Policy Changes", "Terms can update without notice."]
          ].map(([title, desc]) => (
            <div
              key={title}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-purple-500/20 hover:shadow-2xl"
            >
              <h3 className="text-xl font-bold mb-3 text-yellow-300">{title}</h3>
              <p className="text-white/80 leading-relaxed">{desc}</p>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}
