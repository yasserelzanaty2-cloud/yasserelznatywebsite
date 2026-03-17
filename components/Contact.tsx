import React from 'react';
import { Mail, Phone, Linkedin, MessageCircle, Github, Download } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Contact: React.FC = () => {
  const { content, isAdmin, updateContent, t } = useContent();
  const { contact } = content;

  return (
    <section id="contact" className="py-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="mb-16">
          <p className="text-emerald-500/80 mb-2 tracking-widest text-sm font-medium">تواصل</p>
          <h2 className="text-4xl md:text-6xl font-bold text-emerald-400">خلينا نتواصل</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            
            {/* LinkedIn */}
            <a 
              href={contact.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="group bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 flex items-center justify-center gap-4 transition-all hover:bg-slate-900"
            >
              <span className="text-white font-bold text-xl">LinkedIn</span>
              <Linkedin className="w-6 h-6 text-white group-hover:text-emerald-400 transition-colors" />
            </a>

            {/* WhatsApp */}
            <a 
              href={`https://wa.me/2${contact.whatsapp.replace(/\s/g, '')}`} 
              target="_blank" 
              rel="noreferrer"
              className="group bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 flex items-center justify-center gap-4 transition-all hover:bg-slate-900"
            >
              <span className="text-white font-bold text-xl">WhatsApp</span>
              <MessageCircle className="w-6 h-6 text-white group-hover:text-emerald-400 transition-colors" />
            </a>

            {/* Email */}
            <a 
              href={`mailto:${contact.email}`}
              className="group bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 flex items-center justify-center gap-4 transition-all hover:bg-slate-900"
            >
              <span className="text-white font-bold text-xl">Email</span>
              <Mail className="w-6 h-6 text-white group-hover:text-emerald-400 transition-colors" />
            </a>

          </div>

          {/* Download CV */}
          <a 
            href={contact.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 flex items-center justify-center gap-4 transition-all hover:bg-slate-900 group"
          >
            <span className="text-white font-bold text-xl">{t.download_cv}</span>
            <Download className="w-6 h-6 text-white group-hover:text-emerald-400 transition-colors" />
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;