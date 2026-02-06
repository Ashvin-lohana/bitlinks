export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 to-indigo-950 text-white px-8 py-20">
      <h1 className="text-5xl font-extrabold text-center mb-16">
        Simple <span className="text-yellow-300">Pricing</span>
      </h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          ["Free", "$0", ["Unlimited Links", "Fast Redirects", "No Login"]],
          ["Pro", "$5/mo", ["Custom Aliases", "Analytics", "Priority Speed"]],
          ["Business", "$15/mo", ["Team Access", "API Usage", "Advanced Stats"]],
        ].map(([name, price, features]) => (
          <div key={name} className="bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition">
            <h2 className="text-2xl font-bold mb-2">{name}</h2>
            <div className="text-4xl font-extrabold text-yellow-300 mb-6">{price}</div>
            <ul className="space-y-3 text-white/80">
              {features.map(f => <li key={f}>✔ {f}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
