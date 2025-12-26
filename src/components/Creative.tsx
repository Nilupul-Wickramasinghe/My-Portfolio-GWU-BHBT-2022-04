import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Scissors, Sparkles } from 'lucide-react';
import { image } from 'framer-motion/client';
type Category = 'modeling' | 'makeup';
export function Creative() {
  const [activeTab, setActiveTab] = useState<Category>('modeling');
  const items = {
    modeling: [{
      title: 'Tamil Shoot',
      desc: 'Outdoor shoot concept',
      color: 'bg-blue-100'
     
    }, {
      title: 'Portrait Series',
      desc: 'Studio lighting study',
      color: 'bg-indigo-100'
    }, {
      title: 'Commercial',
      desc: 'Brand ambassador work',
      color: 'bg-violet-100'
    }],
    makeup: [{
      title: 'Bridal Glam',
      desc: 'Traditional & Modern',
      color: 'bg-pink-100'
    }, {
      title: 'Creative SFX',
      desc: 'Special effects makeup',
      color: 'bg-rose-100'
    }, {
      title: 'Editorial Look',
      desc: 'High fashion concept',
      color: 'bg-fuchsia-100'
    }]
  };
  return <section id="creative" className="py-20 bg-gray-50">
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
      }} className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Creative Portfolio
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Exploring the artistic side through modeling and professional hair &
            makeup artistry.
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <button onClick={() => setActiveTab('modeling')} className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'modeling' ? 'bg-purple-600 text-white shadow-lg scale-105' : 'bg-white text-gray-600 hover:bg-purple-50'}`}>
              <Camera size={18} className="mr-2" />
              Modeling
            </button>
            <button onClick={() => setActiveTab('makeup')} className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'makeup' ? 'bg-pink-600 text-white shadow-lg scale-105' : 'bg-white text-gray-600 hover:bg-pink-50'}`}>
              <Scissors size={18} className="mr-2" />
              Hair & Makeup
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          duration: 0.4
        }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items[activeTab].map((item, index) => <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                {/* Placeholder Image Area */}
                <div className={`h-64 w-full ${item.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                  <Sparkles className={`w-12 h-12 ${activeTab === 'modeling' ? 'text-purple-300' : 'text-pink-300'}`} />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.desc}
                  </p>
                </div>
              </div>)}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>;
}