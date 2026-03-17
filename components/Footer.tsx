import React from 'react';
import { useContent } from '../context/ContentContext';
import { Linkedin, Mail, MessageCircle, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const { content, t } = useContent();
  const { contact } = content;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo & Copyright */}
          <div className="text-center md:text-start">
            <div className="text-2xl font-bold text-white mb-2 font-sans tracking-wide">
              YE<span className="text-emerald-500">.</span>
            </div>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} {content.about.name}. {t.copyright}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href={contact.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href={`https://wa.me/2${contact.whatsapp.replace(/\s/g, '')}`} 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a 
              href={`mailto:${contact.email}`}
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Scroll to Top */}
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all group"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
