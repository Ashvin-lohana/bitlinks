export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-800 to-purple-950 text-white px-8 py-20">
      <h1 className="text-5xl font-extrabold mb-12 text-center">
        Powerful <span className="text-yellow-300">Features</span>
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          ["⚡", "Instant Shortening", "Generate short links in milliseconds"],
          ["🔒", "Private by Default", "No login, no tracking, full privacy"],
          ["📊", "Smart Analytics", "See clicks & usage insights"],
          ["🌍", "Global Access", "Works everywhere instantly"],
          ["🎯", "Custom Aliases", "Create branded short URLs"],
          ["☁️", "Cloud Powered", "Reliable & scalable infra"],
        ].map(([icon, title, desc]) => (
          <div key={title} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:scale-105 transition">
            <div className="text-3xl mb-4">{icon}</div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
