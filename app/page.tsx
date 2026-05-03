export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] flex flex-col items-center px-4 py-16">
      {/* Hero */}
      <section className="max-w-2xl w-full text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          Health Tracking · Mobile-First
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Log Blood Sugar by{" "}
          <span className="text-[#58a6ff]">Photographing</span> Your Meter
        </h1>
        <p className="text-lg text-[#8b949e] mb-8">
          Point your phone at any glucose meter. GlucoSnap reads the display with OCR, logs the reading instantly, and shows your trends over time — no manual entry needed.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-xl transition-colors"
        >
          Start Logging for $5/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Works on any smartphone browser.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          <div className="bg-[#161b22] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">📷</div>
            <div className="text-sm font-semibold text-white">Snap a Photo</div>
            <div className="text-xs text-[#8b949e] mt-1">Point at your meter display</div>
          </div>
          <div className="bg-[#161b22] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">🔍</div>
            <div className="text-sm font-semibold text-white">OCR Reads It</div>
            <div className="text-xs text-[#8b949e] mt-1">Tesseract.js extracts the value</div>
          </div>
          <div className="bg-[#161b22] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">📈</div>
            <div className="text-sm font-semibold text-white">See Trends</div>
            <div className="text-xs text-[#8b949e] mt-1">Charts updated automatically</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm w-full mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$5</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited photo readings",
              "Automatic OCR — no typing",
              "30-day trend charts",
              "Export to CSV",
              "Caregiver sharing link",
              "Works on any glucose meter"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl w-full mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which glucose meters are supported?</h3>
            <p className="text-[#8b949e] text-sm">GlucoSnap works with virtually any meter that has a digital display — Accu-Chek, OneTouch, Contour, FreeStyle, and more. If you can read the screen, so can our OCR.</p>
          </div>
          <div className="bg-[#161b22] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my health data private?</h3>
            <p className="text-[#8b949e] text-sm">OCR processing happens entirely in your browser — your photos never leave your device. Only the extracted numeric reading is stored securely in your account.</p>
          </div>
          <div className="bg-[#161b22] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I share readings with my doctor or caregiver?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Generate a read-only sharing link from your dashboard that lets caregivers or healthcare providers view your trend data without needing an account.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} GlucoSnap. Not a medical device. Always consult your healthcare provider.
      </footer>
    </main>
  );
}
