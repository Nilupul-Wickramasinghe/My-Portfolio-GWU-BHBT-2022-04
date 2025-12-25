import React from 'react';
import { Award, Calendar } from 'lucide-react';
interface Certificate {
  title: string;
  issuer: string;
  date: string;
}
const certificates: Certificate[] = [{
  title: 'Google UX Design Professional Certificate',
  issuer: 'Coursera',
  date: '2023'
}, {
  title: 'Biomedical Engineering Fundamentals',
  issuer: 'University of Moratuwa',
  date: '2022'
}, {
  title: 'Advanced React & Redux',
  issuer: 'Udemy',
  date: '2023'
}, {
  title: 'Human-Computer Interaction',
  issuer: 'Interaction Design Foundation',
  date: '2022'
}];
export function Certificates() {
  return <section id="certificates" className="py-24 px-4 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-16 text-center">
          Certificates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificates.map((cert, index) => <div key={index} className="bg-[#1A1A1A] p-8 rounded-xl border-l-4 border-[#FF6B35] hover:bg-[#222] transition-colors duration-300">
              <div className="flex items-start justify-between mb-4">
                <Award className="w-8 h-8 text-[#FF6B35]" />
                <div className="flex items-center gap-2 text-sm text-gray-500 bg-black px-3 py-1 rounded-full">
                  <Calendar size={14} />
                  <span>{cert.date}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-400 font-medium">{cert.issuer}</p>
            </div>)}
        </div>
      </div>
    </section>;
}