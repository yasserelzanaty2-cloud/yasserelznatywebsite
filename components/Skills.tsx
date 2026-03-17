import React from 'react';
import { useContent } from '../context/ContentContext';
import { Code2, BarChart3 } from 'lucide-react';

const Skills: React.FC = () => {
  const { content, t } = useContent();
  const { skills } = content;

  return (
    <section id="skills" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4">{t.skills_title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-emerald-500/20 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                  {index === 0 ? <Code2 className="w-6 h-6" /> : <BarChart3 className="w-6 h-6" />}
                </div>
                <h3 className="text-2xl font-bold text-white">{skillGroup.category}</h3>
              </div>
              
              <div className="space-y-6">
                {skillGroup.items.map((skill, idx) => (
                  <div key={idx} className="group/skill">
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 font-medium group-hover/skill:text-white transition-colors">{skill.name}</span>
                      <span className="text-emerald-400 font-bold font-mono">{skill.percentage}%</span>
                    </div>
                    <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden p-[1px]">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full relative"
                        style={{ width: `${skill.percentage}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
