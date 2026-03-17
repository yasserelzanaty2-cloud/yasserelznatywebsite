import React from 'react';
import { useContent } from '../context/ContentContext';
import { Award, FlaskConical, ExternalLink } from 'lucide-react';

const Certificates: React.FC = () => {
  const { content, t } = useContent();
  const { certificates } = content;

  return (
    <section id="certificates" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4">{t.certificates_title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div key={cert.id} className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10">
              
              {/* Decorative Gradient Blob */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl -z-10 group-hover:bg-emerald-500/10 transition-colors"></div>

              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-900 transition-all duration-300 shadow-lg shadow-black/50">
                  {cert.type === 'workshop' ? <FlaskConical className="w-7 h-7" /> : <Award className="w-7 h-7" />}
                </div>
                <div className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-400">
                  {cert.date}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 leading-tight min-h-[3.5rem] group-hover:text-emerald-400 transition-colors">
                {cert.title}
              </h3>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px flex-1 bg-slate-800"></div>
                <span className="text-emerald-500 font-medium text-sm">{cert.issuer}</span>
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
