import React, { useState, useEffect } from 'react';
import { Menu, X, Map, Lock, LogOut, Settings, Globe, Palette } from 'lucide-react';
import { NavItem } from '../types';
import { useContent } from '../context/ContentContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const { isAdmin, login, logout, content, language, setLanguage, t } = useContent();

  // Order: Home -> About -> Skills -> Projects -> Experience -> Certificates -> Contact
  const navItems: NavItem[] = [
    { label: t.nav_home, href: '#home' },
    { label: t.nav_about, href: '#about' },
    { label: t.nav_skills, href: '#skills' },
    { label: t.nav_projects, href: '#projects' },
    { label: t.nav_experience, href: '#experience' },
    { label: t.nav_certificates, href: '#certificates' },
    { label: t.nav_contact, href: '#contact' },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      setShowLogin(false);
      setPassword('');
    } else {
      alert(t.password_error);
    }
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setActiveSection(href.substring(1));
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  // Simple scroll spy
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [navItems]);

  return (
    <>
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Right Side (in RTL): Logo */}
            <div className="flex items-center gap-4">
               {isAdmin ? (
                  <button 
                    onClick={logout}
                    className="flex items-center gap-2 text-red-400 hover:text-red-300 px-3 py-2 text-sm font-medium"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                ) : (
                  <button 
                    onClick={() => setShowLogin(true)}
                    className="text-gray-500 hover:text-white px-3 py-2"
                    title={t.admin_login}
                  >
                    <Lock className="w-4 h-4" />
                  </button>
                )}
              
              <div className="flex-shrink-0 text-white font-bold text-3xl tracking-wider font-sans group cursor-pointer">
                YE
                <span className="w-2 h-2 bg-emerald-500 rounded-full inline-block ml-1 group-hover:animate-pulse"></span>
              </div>
            </div>

            {/* Center: Navigation Links (Desktop) */}
            <div className="hidden lg:block">
              <div className="flex items-center gap-8">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleScroll(e, item.href)}
                      className={`relative text-base font-medium transition-all hover:text-emerald-400 py-2
                        ${isActive ? 'text-emerald-400' : 'text-slate-300'}
                      `}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 rounded-full"></span>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Left Side (in RTL): Language & Theme */}
            <div className="flex items-center gap-3">
               <button 
                  onClick={toggleLanguage}
                  className="flex items-center justify-center px-4 py-2 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 transition-all font-bold text-sm"
                >
                  {language === 'ar' ? 'AR' : 'EN'}
                </button>
                
                <button className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 transition-all">
                  <Palette className="w-5 h-5" />
                </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              >
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-950 border-b border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-gray-300 hover:text-emerald-400 block px-3 py-2 rounded-md text-base font-medium text-right"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-slate-800 p-6 rounded-2xl w-full max-w-sm border border-slate-700 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" />
                {t.admin_panel}
              </h3>
              <button onClick={() => setShowLogin(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1">{t.password}</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:border-primary outline-none"
                  placeholder="******"
                  autoFocus
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-emerald-400 text-slate-900 font-bold py-2 rounded-lg transition-colors"
              >
                {t.enter}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;