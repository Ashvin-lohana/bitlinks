export default function ApiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-950 text-white px-8 py-20">
      <h1 className="text-5xl font-bold mb-10 text-yellow-300">API Access</h1>

      <div className="max-w-4xl space-y-6 text-white/80">
        <p>Integrate BitLinks directly into your apps using our REST API.</p>

        <div className="bg-black/40 rounded-xl p-6 border border-white/20 font-mono text-sm">
          POST /api/shorten<br/>
          {"{"}<br/>
          &nbsp;&nbsp;"url": "https://example.com"<br/>
          {"}"}
        </div>

        <p>Response:</p>

        <div className="bg-black/40 rounded-xl p-6 border border-white/20 font-mono text-sm">
          {"{"}<br/>
          &nbsp;&nbsp;"shortUrl": "https://bit.ly/abc123"<br/>
          {"}"}
        </div>
      </div>
    </div>
  );
}
