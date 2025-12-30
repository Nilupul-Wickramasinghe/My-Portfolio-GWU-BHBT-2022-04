import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Creative } from './components/Creative';
import { Achievements } from './components/Achievements';
import { Certificates } from './components/Certificates';
import { CVSection } from './components/CVSection';
export function App() {
  return <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navigation />

      <main className="pt-20">
        {' '}
        {/* Add padding top to account for fixed header */}
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="creative">
          <Creative />
        </section>
        <section id="achievements">
          <Achievements />
        </section>
        <section id="certificates">
          <Certificates />
        </section>
        <section id="contact">
          <CVSection />
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Nilupul Wickramasingha. All rights
            reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Behance
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>;
}