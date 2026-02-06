export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-950 to-black" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 blur-[140px] opacity-40" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500 blur-[160px] opacity-30" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-8 py-20">

        <h1 className="text-5xl font-extrabold mb-6">
          Privacy <span className="text-yellow-300">Policy</span>
        </h1>

        <p className="text-white/70 mb-12 text-lg">
          Your data safety is our top priority. BitLinks is designed with
          privacy-first architecture and zero-tracking philosophy.
        </p>

        <div className="space-y-8">

          {[
            ["🔒 Zero Personal Data", "No signup required. We never collect personal identity info."],
            ["🍪 No Tracking Cookies", "We do not run behavioral tracking or ad pixels."],
            ["🛡 Secure Storage", "All links are stored with secure hashing methods."],
            ["⚙ Minimal Logs", "Only technical logs for abuse & security protection."],
            ["🚫 No Selling Data", "We never sell or share link data with third parties."]
          ].map(([title, desc]) => (
            <div
              key={title}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
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
