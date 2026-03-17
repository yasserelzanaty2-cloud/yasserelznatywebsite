import React from 'react';
import { useContent } from '../context/ContentContext';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const { content, t } = useContent();
  const { experience } = content;

  return (
    <section id="experience" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4">{t.experience_title}</h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute right-4 md:right-1/2 h-full w-0.5 bg-slate-800 transform md:translate-x-1/2"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute right-4 md:right-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-slate-950 transform translate-x-1.5 md:translate-x-1/2 mt-6 z-10 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>

                {/* Content Card */}
                <div className="md:w-1/2">
                  <div className={`bg-slate-900/80 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl hover:border-emerald-500/30 transition-all group hover:-translate-y-1 duration-300 ${index % 2 === 0 ? 'mr-12 md:mr-0 md:ml-12' : 'mr-12 md:mr-12 md:ml-0'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-900 transition-colors">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">{exp.role}</h3>
                        <p className="text-slate-400 text-sm">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs text-emerald-500/80 font-mono mb-4 bg-emerald-950/30 w-fit px-3 py-1 rounded-full border border-emerald-500/10">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Empty Space for the other side */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
