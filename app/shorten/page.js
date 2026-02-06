"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Shorten() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [customText, setCustomText] = useState("");
  const [resultUrl, setResultUrl] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("shortHistory")) || [];
    setHistory(stored);
  }, []);

  const saveToHistory = (newLink) => {
    const updated = [newLink, ...history];
    setHistory(updated);
    localStorage.setItem("shortHistory", JSON.stringify(updated));
  };

  const deleteFromHistory = (index) => {
    const updated = history.filter((_, i) => i !== index);
    setHistory(updated);
    localStorage.setItem("shortHistory", JSON.stringify(updated));
  };

  const handleGenerate = async () => {
    if (!originalUrl || !customText) {
      alert("⚠️ Please fill in both fields!");
      return;
    }

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: originalUrl, shorturl: customText }),
      });

      const data = await res.json();

      if (data.success) {
        const final = `${process.env.NEXT_PUBLIC_HOST}/${customText}`;
        setResultUrl(final);
        saveToHistory({ originalUrl, shortUrl: final });

        // ✅ SUCCESS ALERT ADDED HERE
        alert(`✅ Short link generated successfully!\n${final}`);

        setOriginalUrl("");
        setCustomText("");
      } else {
        alert(data.message || "❌ Failed to generate short link");
      }
    } catch (error) {
      alert("Something went wrong ❌");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(resultUrl);
    alert("✅ Link copied!");
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-purple-200 to-pink-200 flex flex-col items-center px-6 py-20 relative overflow-hidden">
      <div className="absolute top-[-10rem] left-[-10rem] w-[25rem] h-[25rem] bg-purple-400/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-8rem] right-[-8rem] w-[22rem] h-[22rem] bg-pink-400/40 rounded-full blur-3xl animate-pulse delay-2000"></div>

      <div className="w-full max-w-xl bg-white/80 backdrop-blur-2xl shadow-2xl rounded-3xl p-10 space-y-6 border border-white/50 transition-all hover:scale-[1.01] duration-300">
        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
          Generate Your Short URLs ✨
        </h1>

        <p className="text-center text-gray-600 text-sm tracking-wide -mt-3">
          Simple • Fast • Reliable
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="🔗 Enter your long URL..."
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            className="rounded-2xl p-4 bg-white/90 border border-purple-300 focus:border-pink-500 shadow-sm outline-none transition-all focus:ring-2 focus:ring-purple-200"
          />

          <input
            type="text"
            placeholder="✨ Custom short handle (e.g. mylink123)"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            className="rounded-2xl p-4 bg-white/90 border border-purple-300 focus:border-pink-500 shadow-sm outline-none transition-all focus:ring-2 focus:ring-purple-200"
          />

          <button
            onClick={handleGenerate}
            className="py-3 rounded-xl text-lg font-semibold bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            Generate Short Link 🚀
          </button>
        </div>

        {resultUrl && (
          <div className="mt-8 p-6 bg-white/90 rounded-2xl text-center shadow-xl border border-purple-300 animate-fade-in space-y-4 transition-all duration-300">
            <p className="text-gray-700 text-lg font-semibold">
              Your Short URL:
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link
                href={resultUrl}
                target="_blank"
                className="text-xl font-bold text-purple-600 underline hover:text-purple-800 transition"
              >
                {resultUrl}
              </Link>

              <button
                onClick={copyToClipboard}
                className="px-6 py-2 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700 transition-all active:scale-95"
              >
                Copy Link 📋
              </button>
            </div>
          </div>
        )}
      </div>

      {history.length > 0 && (
        <div className="mt-16 w-full max-w-3xl bg-white/70 backdrop-blur-2xl p-8 rounded-3xl shadow-lg border border-white/40">
          <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
            Your Short Link History 📜
          </h2>

          <div className="space-y-4">
            {history.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-xl shadow flex justify-between items-center hover:shadow-lg transition"
              >
                <div className="flex flex-col">
                  <p className="text-gray-700 truncate max-w-[250px]">
                    {item.originalUrl}
                  </p>

                  <Link
                    href={item.shortUrl}
                    target="_blank"
                    className="text-purple-600 font-medium underline hover:text-purple-800 transition"
                  >
                    {item.shortUrl}
                  </Link>
                </div>

                <button
                  onClick={() => deleteFromHistory(index)}
                  className="px-3 py-1 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 active:scale-95 transition-all"
                >
                  Delete 🗑️
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <footer className="mt-12 text-gray-700 text-sm opacity-80 text-center">
        Made with ❤️ by{" "}
        <span className="font-semibold text-purple-700">
          Ashvin Lohana
        </span>
      </footer>
    </main>
  );
}
