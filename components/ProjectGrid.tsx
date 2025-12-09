import React, { useEffect } from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, ExternalLink, Hash, Calendar, Layers, X } from 'lucide-react';
import { Project } from '../types';
import { useProject } from '../contexts/ProjectContext';

interface ProjectGridProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const isVideo = (url: string) => {
  return url.match(/\.(mp4|webm)$/i);
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => (
  <div 
    onClick={() => onClick(project)}
    className="group relative mb-2 md:mb-4 break-inside-avoid cursor-pointer animate-in fade-in duration-500 fill-mode-backwards"
  >
    {/* Card Frame */}
    <div className="relative overflow-hidden bg-nebula-maroon/40 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,179,0,0.1)]">
      
      {/* 
        Custom Gradient Border 
        Using a pseudo-element logic via a div to achieve the gradient border effect.
      */}
      <div className="absolute inset-0 pointer-events-none z-20 border border-tykoe-periwinkle/10 group-hover:border-transparent transition-colors duration-500"></div>
      <div className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
           style={{
             padding: '1px',
             background: 'linear-gradient(to right, #FFB300, #FF8800)',
             WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
             WebkitMaskComposite: 'xor',
             maskComposite: 'exclude'
           }}
      ></div>

      {/* Media: Image or Video */}
      {isVideo(project.imageUrl) ? (
        <video 
            src={project.imageUrl}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105 filter sepia-[0.2] group-hover:sepia-0"
        />
      ) : (
        <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105 filter sepia-[0.2] group-hover:sepia-0"
            loading="lazy"
        />
      )}
      
      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-nebula-dark/90 via-transparent to-transparent opacity-80 md:opacity-60 transition-opacity duration-300" />
      
      {/* Tech Overlay Lines (Decorative) */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-tykoe-periwinkle to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out z-20" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-6 z-30">
        <div className="transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            {/* Gradient Divider Line */}
            <div className="w-full h-[2px] bg-gradient-to-r from-tykoe-gold to-tykoe-orange mb-2 md:mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />

            <div className="flex justify-between items-end">
                <div>
                    <h3 className="text-sm md:text-2xl font-consolas font-bold text-white mb-1 group-hover:text-tykoe-gold transition-colors leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]">
                      {project.title}
                    </h3>
                    <p className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-tykoe-periwinkle/80 group-hover:text-tykoe-periwinkle truncate max-w-[120px] md:max-w-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
                      // {project.category}
                    </p>
                </div>
                <ArrowUpRight size={24} className="hidden md:block text-tykoe-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
        </div>
      </div>
    </div>
  </div>
);

const ProjectModal: React.FC<{ project: Project; onCategorySelect: (cat: string) => void; onClose: () => void }> = ({ project, onCategorySelect, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleCategoryClick = () => {
      onCategorySelect(project.category);
      onClose(); // Close modal to show filtered grid
  };

  return (
    // Updated padding to pt-24 (96px) to ensure content starts below the ~80px fixed header + gold line
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-8 lg:p-12 pt-24 md:pt-24">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-nebula-dark/95 backdrop-blur-xl transition-opacity duration-300" 
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-7xl h-full md:h-auto md:max-h-[85vh] bg-[#050505] border border-tykoe-periwinkle/30 shadow-[0_0_100px_rgba(108,133,255,0.15)] flex flex-col md:flex-row overflow-y-auto md:overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        
        {/* Image Section */}
        <div className="w-full md:w-[60%] h-auto md:h-auto bg-black relative border-b md:border-b-0 md:border-r border-tykoe-periwinkle/20 shrink-0">
          {isVideo(project.imageUrl) ? (
            <video 
                src={project.imageUrl}
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full h-auto md:h-full object-contain md:object-cover"
            />
          ) : (
            <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-auto md:h-full object-contain md:object-cover"
            />
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:hidden pointer-events-none" />
          
          <div className="absolute bottom-4 left-4 text-tykoe-gold font-mono text-xs hidden md:block">
            IMG_SRC: RAW_DATA
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-[40%] flex flex-col h-auto md:h-full">
          
          {/* Header */}
          <div className="p-6 md:p-10 border-b border-white/5 pb-6 relative shrink-0">
             <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-tykoe-gold to-tykoe-periwinkle opacity-50" />
             
            <div className="flex items-center gap-2 text-tykoe-periwinkle mb-2 text-xs font-mono uppercase tracking-widest">
               <Hash size={12} />
               <span>Project_ID: {project.id.padStart(3, '0')}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-consolas font-bold text-white mb-2 leading-none tracking-tighter drop-shadow-md">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-3 mt-4">
                <button 
                    onClick={handleCategoryClick}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-tykoe-gold/10 border border-tykoe-gold/30 text-tykoe-gold text-[10px] md:text-xs uppercase tracking-wider font-bold shadow-sm hover:bg-tykoe-gold hover:text-black transition-colors cursor-pointer"
                    title={`View all ${project.category} projects`}
                >
                    <Layers size={10} /> {project.category}
                </button>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-tykoe-periwinkle/10 border border-tykoe-periwinkle/30 text-tykoe-periwinkle text-[10px] md:text-xs uppercase tracking-wider shadow-sm cursor-default">
                    <Calendar size={10} /> 2024
                </span>
            </div>
          </div>

          {/* Description Scroll Area */}
          <div className="p-6 md:p-10 md:overflow-y-auto flex-grow text-gray-300 font-mono text-sm md:text-base leading-relaxed space-y-6 scrollbar-thin scrollbar-thumb-tykoe-gold/20 scrollbar-track-black">
            <p className="first-letter:text-3xl first-letter:text-tykoe-gold first-letter:font-serif first-letter:mr-2 first-letter:float-left first-letter:leading-none">
              {project.description}
            </p>
            <p className="opacity-80">
              Additional project details, methodology, and creative process documentation would render here. The system loads the high-fidelity assets directly to ensure visual consistency across all viewports.
            </p>
            <p className="opacity-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-tykoe-periwinkle text-xs border-l-2 border-tykoe-crimson pl-4 italic">
              "Visual data reconstructed from archive. Original fidelity maintained."
            </p>
          </div>

          {/* Footer / Action */}
          <div className="p-6 md:p-10 border-t border-white/5 bg-white/[0.02] shrink-0">
            {project.link ? (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between w-full group bg-tykoe-gold hover:bg-tykoe-periwinkle text-black hover:text-white px-6 py-4 font-bold font-consolas transition-all duration-300"
              >
                <span>VISIT LIVE PROJECT</span>
                <ExternalLink size={20} className="group-hover:rotate-45 transition-transform" />
              </a>
            ) : (
                <button 
                    disabled 
                    className="flex items-center justify-between w-full opacity-50 cursor-not-allowed bg-transparent border border-white/20 text-white px-6 py-4 font-bold font-consolas"
                >
                    <span>INTERNAL ARCHIVE ONLY</span>
                    <Hash size={20} />
                </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

const ProjectGrid: React.FC<ProjectGridProps> = ({ selectedCategory, onCategorySelect }) => {
  const { selectedProject, setSelectedProject } = useProject();

  const displayedProjects = selectedCategory === 'ALL' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <>
      {/* 
        Modified Container: 
        - Removed 'container mx-auto px-...' to allow grid to sit flush with parent container padding
        - Reduced gap-3/gap-8 to gap-2/gap-4 for tighter grouping
      */}
      <div className="w-full">
        {/* Mobile: 2 Columns, Tablet/Desktop: 2/3 Columns */}
        <div className="columns-2 md:columns-2 lg:columns-3 gap-2 md:gap-4 space-y-2 md:space-y-4">
          {displayedProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={setSelectedProject}
            />
          ))}
        </div>
        {displayedProjects.length === 0 && (
             <div className="text-center text-gray-500 py-20 font-mono">
                 NO_DATA_FOUND_FOR_CATEGORY: {selectedCategory}
             </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onCategorySelect={onCategorySelect}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default ProjectGrid;