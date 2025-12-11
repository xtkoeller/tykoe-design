// ==========================================
// CONFIGURATION
// ==========================================

// CHANGE THIS URL to your external host (e.g., Cloudinary, AWS S3, or GitHub Pages URL)
// Example: const ASSET_BASE_URL = "https://res.cloudinary.com/your-cloud-name/image/upload/v1/assets/";
const ASSET_BASE_URL = "https://res.cloudinary.com/dydqxus0f/image/upload/assets/"; 

// ==========================================
// PROJECT DATA
// ==========================================
const PROJECTS = [
    {
        id: "01",
        title: "Almonds",
        category: "MOTION ART",
        file: "almonds.mp4",
        desc: "Cinematic sequence exploring organic forms and fluid motion. A study in texture and light."
    },
    {
        id: "02",
        title: "The Abyss Between",
        category: "ART 3D",
        file: "abyss-between.webp",
        desc: "Visualizing the space between thoughts in a digital void. Rendered in Redshift."
    },
    {
        id: "03",
        title: "Baby Hairs",
        category: "ILLUSTRATION",
        file: "baby-hairs.jpg",
        desc: "Stylized portraiture emphasizing texture and vibrant, neo-pastel palettes."
    },
    {
        id: "04",
        title: "Smile Portal",
        category: "MOTION BRANDING",
        file: "smile-portal.gif",
        desc: "Animated brand portal for the Smile Shop identity system. Loops infinitely."
    },
    {
        id: "05",
        title: "Carlin",
        category: "ILLUSTRATION",
        file: "carlin.jpg",
        desc: "Digital tribute to the legend of stand-up comedy. Vector meets texture."
    },
    {
        id: "06",
        title: "Cosmonaut",
        category: "ART ILLUSTRATION",
        file: "cosmonaut.jpg",
        desc: "Lost in the digital void. A study of isolation in space and retro-futurism."
    },
    {
        id: "07",
        title: "Dayton DJ",
        category: "MOTION BRANDING",
        file: "dayton-mobile-dj.gif",
        desc: "Kinetic logo animation for an audio events company. Rhythm in motion."
    },
    {
        id: "08",
        title: "Eklund Aviation",
        category: "BRANDING DESIGN",
        file: "eklund-aviation.png",
        desc: "Corporate identity design focusing on classic flight aesthetics and gold foil."
    },
    {
        id: "09",
        title: "Gump Series",
        category: "ILLUSTRATION",
        file: "gump-boat.webp",
        desc: "Conceptual art series based on key scenes from Forrest Gump. Minimalist approach."
    },
    {
        id: "10",
        title: "Manual Override",
        category: "MOTION ART",
        file: "IMG_4106.gif",
        desc: "Skeletal motion study examining biological mechanics and x-ray aesthetics."
    },
    {
        id: "11",
        title: "Haus",
        category: "DESIGN",
        file: "haus.webp",
        desc: "Architectural poster design and typography layout. Swiss style influence."
    },
    {
        id: "12",
        title: "In Da Matrix",
        category: "ILLUSTRATION ART",
        file: "in-da-matrix.webp",
        desc: "Cyberpunk character design inspired by digital simulations and glitch art."
    },
    {
        id: "13",
        title: "I'm Clear",
        category: "ILLUSTRATION ART",
        file: "im-clear-1080.webp",
        desc: "Skull motif composition with vibrant gradients and surrealist elements."
    },
    {
        id: "14",
        title: "Loch Doubt",
        category: "MOTION DESIGN",
        file: "loch-doubt-title_001.gif",
        desc: "Title sequence animation for independent film project. Moody and atmospheric."
    },
    {
        id: "15",
        title: "Marc",
        category: "DESIGN BRANDING",
        file: "marc-itunes.jpg",
        desc: "Podcast cover art and layout design. Bold colors for high visibility."
    },
    {
        id: "16",
        title: "Miami Display",
        category: "DESIGN BRANDING",
        file: "miami-display-noedit.jpg",
        desc: "Physical installation mockup for retail display. 80s synthwave aesthetic."
    },
    {
        id: "17",
        title: "Nemesis",
        category: "ILLUSTRATION ART",
        file: "nemesis.jpg",
        desc: "Expressive character illustration with glitch elements and high contrast."
    },
    {
        id: "18",
        title: "Paradise Tanager",
        category: "ILLUSTRATION",
        file: "paradise-tanager.jpg",
        desc: "Avian vector art celebrating natural forms and geometric abstraction."
    },
    {
        id: "19",
        title: "Pizza Studies",
        category: "ILLUSTRATION DESIGN",
        file: "salad-za.webp",
        desc: "Food illustration series exploring stylized textures and appetite appeal."
    },
    {
        id: "20",
        title: "Start Today",
        category: "MOTION DESIGN",
        file: "start-today.gif",
        desc: "Kinetic poster design with bold typography. Motivational branding piece."
    },
    {
        id: "21",
        title: "Synchro",
        category: "DESIGN",
        file: "synchro-noedit.jpg",
        desc: "Event poster design and layout. Focus on symmetry and balance."
    },
    {
        id: "22",
        title: "Water",
        category: "MOTION ART",
        file: "water.gif",
        desc: "Fluid simulation loop exploring liquid physics and blue aesthetics."
    },
    {
        id: "23",
        title: "Balance",
        category: "MOTION ART",
        file: "yin-yang.gif",
        desc: "Animated duality concept with geometric motion and traditional symbolism."
    },
    {
        id: "24",
        title: "Zuu",
        category: "ILLUSTRATION",
        file: "zuu.jpg",
        desc: "Canine portraiture with expressive brushwork and deep color tones."
    }
];

// ==========================================
// APP LOGIC
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Logic ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if(mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
            mobileMenu.classList.add('translate-x-0');
        });

        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            mobileMenu.classList.remove('translate-x-0');
        });
    }

    // --- Helper Functions ---
    const isVideoFile = (filename) => {
        return filename.toLowerCase().endsWith('.mp4') || filename.toLowerCase().endsWith('.webm');
    };

    // --- Render Projects ---
    const projectGrid = document.getElementById('project-grid');

    if (projectGrid) {
        // Clear loading state
        projectGrid.innerHTML = '';

        PROJECTS.forEach(project => {
            const fullSrc = `${ASSET_BASE_URL}${project.file}`;
            const isVid = isVideoFile(project.file);

            // Create Card Element
            const card = document.createElement('div');
            card.className = "project-card group relative mb-2 md:mb-4 break-inside-avoid cursor-pointer";
            card.setAttribute('data-id', project.id);
            card.setAttribute('data-title', project.title);
            card.setAttribute('data-category', project.category);
            card.setAttribute('data-img', fullSrc); // Store full path
            card.setAttribute('data-desc', project.desc);
            if(project.link) card.setAttribute('data-link', project.link);

            // Inner HTML Template
            let mediaHTML = '';
            if (isVid) {
                // For grid videos, we auto-play muted
                mediaHTML = `<video src="${fullSrc}" autoplay loop muted playsinline class="w-full h-auto object-cover filter sepia-[0.2] group-hover:sepia-0 transition-transform duration-700 group-hover:scale-105"></video>`;
            } else {
                mediaHTML = `<img src="${fullSrc}" loading="lazy" class="w-full h-auto object-cover filter sepia-[0.2] group-hover:sepia-0 transition-transform duration-700 group-hover:scale-105">`;
            }

            const mainCategory = project.category.split(' ')[0]; // Take first cat for tag

            card.innerHTML = `
                <div class="relative overflow-hidden bg-nebula-maroon/40">
                    ${mediaHTML}
                    <div class="absolute inset-0 bg-gradient-to-t from-nebula-dark/90 via-transparent to-transparent opacity-60"></div>
                    <div class="absolute inset-0 flex flex-col justify-end p-3 md:p-6">
                        <div class="w-full h-[2px] bg-gradient-to-r from-tykoe-gold to-tykoe-orange mb-2 opacity-50 group-hover:opacity-100"></div>
                        <h3 class="text-sm md:text-2xl font-consolas font-bold text-white group-hover:text-tykoe-gold">${project.title}</h3>
                        <p class="text-[10px] md:text-xs font-mono uppercase tracking-widest text-tykoe-periwinkle/80">// ${mainCategory}</p>
                    </div>
                </div>
            `;

            projectGrid.appendChild(card);
        });
    }

    // --- Project Filtering Logic (Event Delegation) ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    // Re-select cards now that they exist
    const projectCards = document.querySelectorAll('.project-card');

    if(filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state of buttons
                filterButtons.forEach(b => {
                    b.classList.remove('text-tykoe-gold', 'font-bold', 'border-b', 'border-tykoe-gold', 'scale-105');
                    b.classList.add('hover:text-tykoe-periwinkle');
                });
                btn.classList.add('text-tykoe-gold', 'font-bold', 'border-b', 'border-tykoe-gold', 'scale-105');
                btn.classList.remove('hover:text-tykoe-periwinkle');

                const category = btn.getAttribute('data-category');

                projectCards.forEach(card => {
                    const cardCategories = card.getAttribute('data-category').split(' ');
                    // If category is ALL, or if the card's category list includes the selected category
                    if(category === 'ALL' || cardCategories.includes(category)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // --- Modal Logic ---
    const modalBackdrop = document.getElementById('modal-backdrop');
    const closeModalBtn = document.getElementById('close-modal');
    
    // Modal Content Elements
    const modalTitle = document.getElementById('modal-title');
    const modalImg = document.getElementById('modal-img');
    const modalVideo = document.getElementById('modal-video');
    const modalDesc = document.getElementById('modal-desc');
    const modalCat = document.getElementById('modal-cat');
    const modalId = document.getElementById('modal-id');
    const modalLinkBtn = document.getElementById('modal-link-btn');

    function openModal(card) {
        // Populate Data
        modalTitle.textContent = card.getAttribute('data-title');
        
        const src = card.getAttribute('data-img');
        
        if (isVideoFile(src)) {
            // Show Video, Hide Image
            modalVideo.src = src;
            modalVideo.classList.remove('hidden');
            modalVideo.classList.add('block');
            modalImg.classList.add('hidden');
            modalImg.classList.remove('block');
            modalVideo.play();
        } else {
            // Show Image, Hide Video
            modalImg.src = src;
            modalImg.classList.remove('hidden');
            modalImg.classList.add('block');
            modalVideo.classList.add('hidden');
            modalVideo.classList.remove('block');
            modalVideo.pause();
        }

        modalDesc.textContent = card.getAttribute('data-desc');
        modalCat.textContent = card.getAttribute('data-category');
        modalId.textContent = card.getAttribute('data-id');

        // Link Logic
        const link = card.getAttribute('data-link');
        if(link && modalLinkBtn) {
            modalLinkBtn.href = link;
            modalLinkBtn.classList.remove('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
            modalLinkBtn.querySelector('span').textContent = 'VISIT LIVE PROJECT';
        } else if (modalLinkBtn) {
            modalLinkBtn.removeAttribute('href');
            modalLinkBtn.classList.add('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
            modalLinkBtn.querySelector('span').textContent = 'INTERNAL ARCHIVE ONLY';
        }

        // Show Modal
        modalBackdrop.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Lock Scroll
    }

    function closeModal() {
        modalBackdrop.classList.add('hidden');
        document.body.style.overflow = ''; // Unlock Scroll
        if(modalVideo) modalVideo.pause();
    }

    if(modalBackdrop) {
        // Open on Card Click (Delegation for dynamically created cards)
        projectGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.project-card');
            if(card) {
                openModal(card);
            }
        });

        // Close on X Click
        if(closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
        
        // Close on Backdrop Click
        modalBackdrop.addEventListener('click', (e) => {
            // Check if clicking backdrop or the blur layer
            if(e.target === modalBackdrop || (e.target.classList.contains('absolute') && e.target.classList.contains('inset-0'))) {
                closeModal();
            }
        });

        // Close on Escape Key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modalBackdrop.classList.contains('hidden')) {
                closeModal();
            }
        });
    }

});
