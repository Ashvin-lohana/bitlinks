import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: '--font-poppins',
  weight: "100 900"
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white overflow-hidden">
      <main>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-8 py-20 items-center">
          <div className="flex flex-col gap-6 md:gap-7 relative z-10">
            <span className="self-start bg-white/10 border border-white/20 px-4 py-1 rounded-full text-sm backdrop-blur-lg">
              ✨ No Login · No Tracking · 100% Free
            </span>

            <h1 className={`text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg ${poppins.className}`}>
              The Most Elegant <span className="text-yellow-300">URL Shortener</span> Ever
            </h1>

            <p className="text-lg text-white/90 leading-relaxed max-w-md">
              Simplify your links with style. No signups. No ads. Just instant URL shortening — secure, fast & beautifully designed for everyone.
            </p>

            <div className='flex gap-4 pt-4'>
              <Link href="/generate">
                <button className='px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 font-bold hover:from-yellow-500 hover:to-orange-600 transition duration-300 shadow-lg hover:shadow-yellow-400/50 hover:scale-105'>
                  🚀 Get Started
                </button>
              </Link>
               
              <Link href="https://github.com/Ashvin-lohana" target="_blank">
              
                <button className='px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 font-medium hover:bg-white/10 backdrop-blur-md transition duration-300 hover:scale-105'>
                  🌍 GitHub
                </button>
              </Link>
            </div>

            <div className="flex gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">100K+</div>
                <div className="text-white/70 text-sm">Links Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-300">99.9%</div>
                <div className="text-white/70 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-300">0ms</div>
                <div className="text-white/70 text-sm">Redirect Speed</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-[350px] md:w-[500px] drop-shadow-2xl animate-float">
              <Image
                src="/vector1.png"
                alt="URL Shortener Illustration"
                width={500}
                height={500}
                className="mix-blend-lighten select-none pointer-events-none"
              />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-8 py-20">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${poppins.className}`}>Why Choose <span className="text-yellow-300">BitLinks</span>?</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">Experience the future of URL shortening with cutting-edge features</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-purple-500/30 transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-white/70">Instant URL shortening with zero latency and blazing fast redirects</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-blue-500/30 transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
              <p className="text-white/70">No tracking, no ads, complete privacy protection for all your links</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-green-500/30 transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
              <p className="text-white/70">Beautiful dashboard with detailed insights about your shortened URLs</p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-8 py-20">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${poppins.className}`}>Ready to Shorten Your Links?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Join thousands of users who trust BitLinks for their URL shortening needs</p>
            <Link href="/generate">
              <button className='px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 font-bold hover:from-yellow-500 hover:to-orange-600 transition duration-300 shadow-2xl hover:shadow-yellow-400/30 hover:scale-105 text-lg'>
                🚀 Start Shortening Now
              </button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-3xl font-extrabold text-white mb-4">
                Bit<span className="text-yellow-300">Links</span>
              </div>
              <p className="text-white/70 max-w-md">
                The most elegant URL shortener ever created. Free forever, no signups required, and built with modern technology.
              </p>
              <div className="flex gap-4 mt-6">
                <button className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-4 py-2 transition-all duration-300 hover:scale-105 hover:text-yellow-300">📘</button>
                <button className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-4 py-2 transition-all duration-300 hover:scale-105 hover:text-cyan-300">🐦</button>
                <button className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-4 py-2 transition-all duration-300 hover:scale-105 hover:text-pink-300">📷</button>
                <button className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-4 py-2 transition-all duration-300 hover:scale-105 hover:text-green-300">💼</button>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="/generate" className="text-white/70 hover:text-yellow-300 transition-colors">Shorten URL</Link></li>
                <li><Link href="/features" className="text-white/70 hover:text-yellow-300 transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="text-white/70 hover:text-yellow-300 transition-colors">Pricing</Link></li>
                <li><Link href="/api-docs" className="text-white/70 hover:text-yellow-300 transition-colors">API</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-white/70 hover:text-yellow-300 transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-white/70 hover:text-yellow-300 transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="text-white/70 hover:text-yellow-300 transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="text-white/70 hover:text-yellow-300 transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">© 2025 BitLinks. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-white/50 hover:text-yellow-300 text-sm transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-white/50 hover:text-yellow-300 text-sm transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="text-white/50 hover:text-yellow-300 text-sm transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>

      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-500 blur-[140px] opacity-40"></div>
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-yellow-400 blur-[160px] opacity-30"></div>
      <div className="absolute top-20 right-1/3 w-64 h-64 bg-pink-500 blur-[120px] opacity-20"></div>
    </div>
  );
}

