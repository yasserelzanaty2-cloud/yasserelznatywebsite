import React from 'react';
import { Upload, Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Hero: React.FC = () => {
  const { content, updateContent, isAdmin, t, language } = useContent();
  const { hero, about } = content;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateContent('about', { image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className="relative min-h-[88vh] flex items-center justify-center overflow-hidden pt-20 bg-slate-950">
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,rgba(34,197,94,0.08),transparent),radial-gradient(ellipse_50%_40%_at_70%_30%,rgba(168,85,247,0.06),transparent)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Content (Left side in LTR, Right in RTL - handled by grid order) */}
          <div className={`relative flex justify-center ${language === 'ar' ? 'lg:order-last' : 'lg:order-first'}`}>
            <div className="hero-image-container">
              <div className="hero-image-inner">
                <img 
                  src={about.image} 
                  alt={about.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {isAdmin && (
              <div className="absolute bottom-0 right-10 z-50">
                <label className="cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center">
                  <Upload className="w-5 h-5" />
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                </label>
              </div>
            )}
          </div>

          {/* Text Content */}
          <div className={`text-center ${language === 'ar' ? 'lg:text-right' : 'lg:text-left'}`}>
            <h2 className="text-xl md:text-2xl text-emerald-400 font-semibold mb-2 tracking-wide">
              {about.role}
            </h2>
            
            <div className="mb-4">
              {isAdmin ? (
                <input
                  value={about.name}
                  onChange={(e) => updateContent('about', { name: e.target.value })}
                  className="text-5xl md:text-6xl font-extrabold text-white bg-transparent border-b border-dashed border-slate-600 focus:border-primary outline-none w-full"
                />
              ) : (
                <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-2 tracking-tight">
                  {about.name}
                </h1>
              )}
            </div>

            <div className="mb-8 max-w-lg mx-auto lg:mx-0">
              {isAdmin ? (
                <textarea
                  value={hero.subtitle}
                  onChange={(e) => updateContent('hero', { subtitle: e.target.value })}
                  className="w-full bg-slate-800/50 p-2 rounded text-slate-300 border border-slate-600 focus:border-primary outline-none resize-none"
                  rows={3}
                />
              ) : (
                <p className="text-lg text-slate-400 leading-relaxed">
                  {hero.subtitle}
                </p>
              )}
            </div>

            <div className={`flex flex-wrap gap-4 justify-center ${language === 'ar' ? 'lg:justify-start' : 'lg:justify-start'}`}>
              <a
                href="#contact"
                className="px-7 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20 hover:-translate-y-1"
              >
                <span>{t.nav_contact}</span>
                <ArrowRight className={`w-5 h-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
              </a>
              
              <a 
                href={content.contact.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-purple-500/20 hover:-translate-y-1"
              >
                <span>{t.download_cv}</span>
                <Download className="w-5 h-5" />
              </a>
            </div>

            <div className={`mt-8 flex items-center gap-3 justify-center ${language === 'ar' ? 'lg:justify-start' : 'lg:justify-start'}`}>
              <a href={`mailto:${content.contact.email}`} className="w-11 h-11 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500 transition-all hover:scale-105">
                <Mail className="w-5 h-5" />
              </a>
              <a href={content.contact.linkedin} target="_blank" rel="noreferrer" className="w-11 h-11 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500 transition-all hover:scale-105">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;