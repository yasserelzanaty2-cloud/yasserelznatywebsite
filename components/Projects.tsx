import React from 'react';
import { CheckCircle2, Upload, Plus, Trash2, ExternalLink } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Projects: React.FC = () => {
  const { content, isAdmin, updateProject, addProject, deleteProject, t } = useContent();
  
  const handleImageUpload = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateProject(id, { image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4">{t.projects_title}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{t.projects_subtitle}</p>
        </div>

        {isAdmin && (
          <div className="mb-12 flex justify-center">
            <button 
              onClick={addProject}
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-3 px-8 rounded-full transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-1"
            >
              <Plus className="w-5 h-5" />
              {t.add_project}
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {content.projects.map((project) => (
            <div key={project.id} className="group relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col h-full">
              
              {/* Image Section */}
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Tags Overlay */}
                <div className="absolute top-6 left-6 z-20 flex flex-wrap gap-2">
                  {project.tags?.map((tag, idx) => (
                    <span key={idx} className="bg-slate-950/80 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-emerald-500/20 shadow-lg">
                      {tag}
                    </span>
                  ))}
                </div>

                {isAdmin && (
                  <div className="absolute top-4 right-4 z-30">
                     <label className="cursor-pointer bg-slate-900/80 p-3 rounded-full hover:bg-emerald-500 hover:text-slate-900 transition-all block text-white border border-slate-700 hover:border-emerald-500 shadow-lg backdrop-blur-sm">
                        <Upload className="w-4 h-4" />
                        <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(project.id, e)} />
                     </label>
                  </div>
                )}
              </div>
              
              {/* Content Section */}
              <div className="p-8 flex-1 flex flex-col relative z-20 -mt-12">
                <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 shadow-xl flex-1 flex flex-col transition-colors group-hover:border-emerald-500/20">
                  {isAdmin ? (
                    <div className="space-y-4 mb-6">
                      <input 
                        value={project.title}
                        onChange={(e) => updateProject(project.id, { title: e.target.value })}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white font-bold text-lg focus:border-emerald-500 outline-none"
                        placeholder="Project Title"
                      />
                      <textarea 
                        value={project.description}
                        onChange={(e) => updateProject(project.id, { description: e.target.value })}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-400 text-sm h-24 focus:border-emerald-500 outline-none resize-none"
                        placeholder="Project Description"
                      />
                    </div>
                  ) : (
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                      <p className="text-slate-400 leading-relaxed text-sm">
                        {project.description}
                      </p>
                    </div>
                  )}

                  {/* Features List */}
                  <div className="space-y-3 mt-auto border-t border-slate-800 pt-6">
                    {project.features?.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-slate-300 text-sm group/item">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                        <span className="group-hover/item:text-white transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {isAdmin && (
                    <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
                      <button 
                        onClick={() => deleteProject(project.id)}
                        className="text-red-400 hover:text-red-300 p-2 hover:bg-red-500/10 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete Project
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;