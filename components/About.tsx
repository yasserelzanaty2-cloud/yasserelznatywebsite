import React from 'react';
import { useContent } from '../context/ContentContext';
import { GraduationCap, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const { content, updateContent, isAdmin, t } = useContent();
  const { about } = content;

  return (
    <section id="about" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <p className="text-emerald-500/80 mb-2 tracking-widest text-sm font-medium">تعرّف علي</p>
          <h2 className="text-4xl md:text-6xl font-bold text-emerald-400">نبذة عني</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (Cards) - 4 cols */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Education Card */}
            <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-3xl p-6 flex items-center gap-4 hover:border-emerald-500/30 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/5 group">
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-emerald-400 transition-colors">{t.education_title}</h3>
                <p className="text-slate-300 text-sm font-medium">{about.education.degree}</p>
                <p className="text-slate-400 text-xs mt-1">{about.education.institution}</p>
                <div className="mt-3 inline-block px-3 py-1 rounded-full bg-slate-800 text-emerald-400 text-xs font-mono border border-slate-700">
                  {about.education.year}
                </div>
              </div>
              <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-slate-900 transition-all duration-300">
                <GraduationCap className="w-6 h-6" />
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-3xl p-6 flex items-center gap-4 hover:border-emerald-500/30 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/5 group">
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-emerald-400 transition-colors">{t.location_title}</h3>
                <p className="text-slate-300 text-sm font-medium dir-ltr text-right">{about.location}</p>
              </div>
              <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-slate-900 transition-all duration-300">
                <MapPin className="w-6 h-6" />
              </div>
            </div>

          </div>

          {/* Right Column (Bio) - 8 cols */}
          <div className="lg:col-span-8 text-right">
            {isAdmin ? (
              <textarea
                value={about.bio}
                onChange={(e) => updateContent('about', { bio: e.target.value })}
                className="w-full h-64 bg-slate-800 border border-slate-600 rounded-lg p-4 text-emerald-400 text-xl leading-relaxed focus:border-emerald-500 outline-none"
              />
            ) : (
              <div className="space-y-8 bg-slate-900/30 p-8 rounded-3xl border border-slate-800/50">
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-relaxed border-b border-slate-800 pb-6">
                  {about.bio.split('\n')[0]}
                </h3>
                <div className="text-slate-300 text-lg leading-loose whitespace-pre-line">
                  {about.bio.split('\n').slice(1).join('\n')}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;