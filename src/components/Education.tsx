import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
export function Education() {
  return <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Education
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="relative pl-8 border-l-2 border-purple-200 space-y-12">
            {/* Education Item */}
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-purple-600 border-4 border-white shadow-md" />
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Biomedical Technology
                    </h3>
                    <p className="text-purple-600 font-medium">
                      Undergraduate Degree
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 flex items-center text-gray-500 text-sm bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                    <Calendar size={14} className="mr-2" />
                    <span>Present</span>
                  </div>
                </div>

                <div className="flex items-start mb-4 text-gray-600">
                  <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-purple-500" />
                  <span>
                    Gampaha Wickramarachchi University of Indigenous Medicine
                    (GWUIM)
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  Focusing on the intersection of modern technology and medical
                  science. Developing skills in medical instrumentation,
                  healthcare IT, and biomedical engineering principles.
                </p>
              </div>
            </div>

            {/* Placeholder for future education or previous schooling if needed */}
            {/* <div className="relative">
             <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-gray-300 border-4 border-white" />
             <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 opacity-70">
             <h3 className="text-lg font-bold text-gray-700">Secondary Education</h3>
             <p className="text-gray-500">Science Stream</p>
             </div>
             </div> */}
          </motion.div>
        </div>
      </div>
    </section>;
}