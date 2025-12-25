import React from 'react';
import { Download } from 'lucide-react';
export function CVSection() {
  return <section className="py-32 px-4 bg-black text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF6B35]/10 via-black to-black" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
          Ready to collaborate?
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          I'm currently open to new opportunities in UI/UX design and biomedical
          technology projects.
        </p>

        <a href="#" className="inline-flex items-center gap-3 bg-[#FF6B35] text-white text-lg font-bold px-10 py-5 rounded-full hover:bg-[#ff8559] hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,107,53,0.3)]">
          <Download className="w-6 h-6" />
          Download CV
        </a>
      </div>
    </section>;
}