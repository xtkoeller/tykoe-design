// ==========================================
// CONFIGURATION
// ==========================================

// Your Cloudinary Configuration
const CLOUD_NAME = "dydqxus0f";

// ⚠️ IMPORTANT: Based on your settings screenshot, "Prepend a path" is OFF.
// This means we should NOT include the folder name in the URL generation.
const CLOUD_FOLDER = ""; 

// Helper to generate the correct Cloudinary URL based on file type
const getAssetUrl = (filename) => {
    const isVideo = filename.toLowerCase().endsWith('.mp4') || filename.toLowerCase().endsWith('.webm');
    const resourceType = isVideo ? 'video' : 'image';
    
    // Cloudinary Transformations:
    const params = isVideo ? 'q_auto' : 'f_auto,q_auto';

    // Handle root vs folder path correctly
    const folderPath = CLOUD_FOLDER ? `${CLOUD_FOLDER}/` : '';

    return `https://res.cloudinary.com/${CLOUD_NAME}/${resourceType}/upload/${params}/${folderPath}${filename}`;
};

// ==========================================
// PROJECT DATA
// ==========================================
const PROJECTS = [
    // --- EXISTING 24 ---
    {
        id: "01",
        title: "Almonds",
        category: "MOTION ART",
        file: "almonds_cn4acj.mp4",
        desc: "Cinematic sequence exploring organic forms and fluid motion. A study in texture and light."
    },
    {
        id: "02",
        title: "The Abyss Between",
        category: "ART 3D",
        file: "abyss-between_cndtwf.webp",
        desc: "Visualizing the space between thoughts in a digital void. Rendered in Redshift."
    },
    {
        id: "03",
        title: "Baby Hairs",
        category: "ILLUSTRATION",
        file: "baby-hairs_tlalg3.jpg",
        desc: "Stylized portraiture emphasizing texture and vibrant, neo-pastel palettes."
    },
    {
        id: "04",
        title: "Smile Portal",
        category: "MOTION BRANDING",
        file: "smile-portal_auvlou.gif",
        desc: "Animated brand portal for the Smile Shop identity system. Loops infinitely."
    },
    {
        id: "05",
        title: "Carlin",
        category: "ILLUSTRATION",
        file: "carlin-2_sntssj.jpg",
        desc: "Digital tribute to the legend of stand-up comedy. Vector meets texture."
    },
    {
        id: "06",
        title: "Cosmonaut",
        category: "ART ILLUSTRATION",
        file: "cosmonaut_gordwu.jpg",
        desc: "Lost in the digital void. A study of isolation in space and retro-futurism."
    },
    {
        id: "07",
        title: "Dayton DJ",
        category: "MOTION BRANDING",
        file: "dayton-mobile-dj_xfz5oz.gif",
        desc: "Kinetic logo animation for an audio events company. Rhythm in motion."
    },
    {
        id: "08",
        title: "Eklund Aviation",
        category: "BRANDING DESIGN",
        file: "eklund-aviation_y4qikz.png",
        desc: "Corporate identity design focusing on classic flight aesthetics and gold foil."
    },
    {
        id: "09",
        title: "Gump Series: Boat",
        category: "ILLUSTRATION",
        file: "gump-boat_yafenw.webp",
        desc: "Conceptual art series based on key scenes from Forrest Gump. Minimalist approach."
    },
    {
        id: "10",
        title: "Manual Override",
        category: "MOTION ART",
        file: "IMG_4106_vszt7u.gif",
        desc: "Skeletal motion study examining biological mechanics and x-ray aesthetics."
    },
    {
        id: "11",
        title: "Haus",
        category: "DESIGN",
        file: "haus_l3lyqs.webp",
        desc: "Architectural poster design and typography layout. Swiss style influence."
    },
    {
        id: "12",
        title: "In Da Matrix",
        category: "ILLUSTRATION ART",
        file: "in-da-matrix_v0wsqk.webp",
        desc: "Cyberpunk character design inspired by digital simulations and glitch art."
    },
    {
        id: "13",
        title: "I'm Clear",
        category: "ILLUSTRATION ART",
        file: "im-clear-1080_xwue7l.webp",
        desc: "Skull motif composition with vibrant gradients and surrealist elements."
    },
    {
        id: "14",
        title: "Loch Doubt",
        category: "MOTION DESIGN",
        file: "loch-doubt-title_001_rzdapq.gif",
        desc: "Title sequence animation for independent film project. Moody and atmospheric."
    },
    {
        id: "15",
        title: "Marc",
        category: "DESIGN BRANDING",
        file: "marc-itunes_w6bkyn.jpg",
        desc: "Podcast cover art and layout design. Bold colors for high visibility."
    },
    // Removed Miami Display as it was missing from the new upload batch
    {
        id: "17",
        title: "Nemesis",
        category: "ILLUSTRATION ART",
        file: "nemesis-2_k2qcjz.jpg",
        desc: "Expressive character illustration with glitch elements and high contrast."
    },
    {
        id: "18",
        title: "Paradise Tanager",
        category: "ILLUSTRATION",
        file: "paradise-tanager_jyxzvh.jpg",
        desc: "Avian vector art celebrating natural forms and geometric abstraction."
    },
    {
        id: "19",
        title: "Pizza Studies: Salad",
        category: "ILLUSTRATION DESIGN",
        file: "salad-za_vp1oij.webp",
        desc: "Food illustration series exploring stylized textures and appetite appeal."
    },
    {
        id: "20",
        title: "Start Today",
        category: "MOTION DESIGN",
        file: "start-today_ars6dh.gif",
        desc: "Kinetic poster design with bold typography. Motivational branding piece."
    },
    {
        id: "21",
        title: "Synchro",
        category: "DESIGN",
        file: "synchro_dicpkh.jpg",
        desc: "Event poster design and layout. Focus on symmetry and balance."
    },
    {
        id: "22",
        title: "Water",
        category: "MOTION ART",
        file: "water_ywwq6p.gif",
        desc: "Fluid simulation loop exploring liquid physics and blue aesthetics."
    },
    {
        id: "23",
        title: "Balance",
        category: "MOTION ART",
        file: "yin-yang_eitv9v.jpg",
        desc: "Animated duality concept with geometric motion and traditional symbolism."
    },
    {
        id: "24",
        title: "Zuu",
        category: "ILLUSTRATION",
        file: "zuu_jctede.jpg",
        desc: "Canine portraiture with expressive brushwork and deep color tones."
    },
    
    // --- NEWLY ADDED FROM SCREENSHOT ---
    {
        id: "25",
        title: "Be Not Afraid",
        category: "ILLUSTRATION",
        file: "be-not-afraid_001_qvrkco.jpg",
        desc: "Surrealist composition inspired by biblical angel descriptions."
    },
    {
        id: "26",
        title: "Bill Murray",
        category: "ILLUSTRATION",
        file: "bill-murray1_x7cfop.webp",
        desc: "Stylized portrait of the cultural icon."
    },
    {
        id: "27",
        title: "Collab Mural",
        category: "DESIGN ART",
        file: "collab-mural_kl2if8.jpg",
        desc: "Collaborative wall art piece exploring community themes."
    },
    {
        id: "28",
        title: "Create Better",
        category: "DESIGN",
        file: "create-better_cpb6na.jpg",
        desc: "Motivational typography and graphic design experiment."
    },
    {
        id: "29",
        title: "Danger Matches",
        category: "ILLUSTRATION",
        file: "danger-matches_kcohfs.jpg",
        desc: "Vintage packaging inspired illustration."
    },
    {
        id: "30",
        title: "Die of Cancer",
        category: "MOTION ART",
        file: "die-of-cancer_sto8c5.gif",
        desc: "Animated commentary on vice and mortality."
    },
    {
        id: "31",
        title: "Don't Think",
        category: "ILLUSTRATION",
        file: "dont-think-too-much_kpmset.webp",
        desc: "Mental health awareness graphic with vibrant textures."
    },
    {
        id: "32",
        title: "Dynoflower",
        category: "ILLUSTRATION",
        file: "dynoflower_001_kwreot.jpg",
        desc: "Organic shapes meeting explosive color palettes."
    },
    {
        id: "33",
        title: "Grandpa's 80th",
        category: "DESIGN",
        file: "grandpas-80_x615wy.jpg",
        desc: "Commemorative design piece with retro styling."
    },
    {
        id: "34",
        title: "Gump Series: Left",
        category: "ILLUSTRATION",
        file: "gump-left_bf71xq.webp",
        desc: "Character study from the Gump Series."
    },
    {
        id: "35",
        title: "Gump Series: Nam",
        category: "ILLUSTRATION",
        file: "gump-nam_w2dggg.webp",
        desc: "Landscape study from the Gump Series."
    },
    {
        id: "36",
        title: "Gus Fring",
        category: "ILLUSTRATION",
        file: "gus-fring-2_sebw8v.jpg",
        desc: "Portrait of the calculating antagonist."
    },
    {
        id: "37",
        title: "If You Knew Better",
        category: "ILLUSTRATION",
        file: "if-you-knew-better-2_ret02p.jpg",
        desc: "Abstract geometric composition."
    },
    {
        id: "38",
        title: "Abstract 0039",
        category: "ART",
        file: "IMG_0039_ro7pll.png",
        desc: "Digital abstract art experiment."
    },
    {
        id: "39",
        title: "In My Head",
        category: "ILLUSTRATION ART",
        file: "in-my-head_yvyfjz.webp",
        desc: "Psychological landscape visualization."
    },
    {
        id: "40",
        title: "Inside The Beast",
        category: "ILLUSTRATION",
        file: "inside-the-beast_cvbfyx.webp",
        desc: "Interior biological landscape study."
    },
    {
        id: "41",
        title: "Kramer",
        category: "ILLUSTRATION",
        file: "kramer-smoking_001_pwe1eo.jpg",
        desc: "The neighbor. A portrait study."
    },
    {
        id: "42",
        title: "Made Man",
        category: "DESIGN",
        file: "made-man_rzsiyu.webp",
        desc: "Logo and identity concept."
    },
    {
        id: "43",
        title: "Marc (Alt)",
        category: "ILLUSTRATION",
        file: "marc_kxqpvt.jpg",
        desc: "Alternative composition for the Marc series."
    },
    {
        id: "44",
        title: "Millertov",
        category: "ART",
        file: "millertov_001_bblfvk.jpg",
        desc: "Mixed media digital composition."
    },
    {
        id: "45",
        title: "No Dawg",
        category: "ILLUSTRATION",
        file: "no-dawg_rotr07.jpg",
        desc: "Tattoo style illustration design."
    },
    {
        id: "46",
        title: "No Dawg (Logan)",
        category: "ILLUSTRATION",
        file: "no-dawg-logan-noedit_jj7x8d.jpg",
        desc: "Variant character design."
    },
    {
        id: "47",
        title: "Open Roads",
        category: "DESIGN",
        file: "open-roads_bqhh76.webp",
        desc: "Badge and emblem design."
    },
    {
        id: "48",
        title: "Remy Shiftin",
        category: "ILLUSTRATION",
        file: "REMY-SHIFTIN_001_gsh02p.jpg",
        desc: "Dynamic character pose study."
    },
    {
        id: "49",
        title: "Remy Sunset",
        category: "ILLUSTRATION",
        file: "remy-sunset_001_qlyhz3.jpg",
        desc: "Atmospheric color study."
    },
    {
        id: "50",
        title: "Smile Loop",
        category: "MOTION",
        file: "smile-gif_gwnwau.gif",
        desc: "Alternative glitch motion loop."
    },
    {
        id: "51",
        title: "Smile Shop BG",
        category: "DESIGN",
        file: "smileshop-bg_a3xalw.jpg",
        desc: "Background texture and pattern design."
    },
    {
        id: "52",
        title: "Smirnoff Alexei",
        category: "ILLUSTRATION",
        file: "smirnoff-alexei1_w1gviu.jpg",
        desc: "Character design based on Stranger Things."
    },
    {
        id: "53",
        title: "Spiral Snake",
        category: "ART",
        file: "Spiral-snake_rlholr.jpg",
        desc: "Geometric pattern and form study."
    },
    {
        id: "54",
        title: "TK-35",
        category: "ART",
        file: "tk-35_004_jddfss.jpg",
        desc: "Dark art composition."
    },
    {
        id: "55",
        title: "Veggie Za",
        category: "ILLUSTRATION",
        file: "veggie-za_pwtd1n.webp",
        desc: "Vegetarian variant from the Pizza Studies series."
    },
    {
        id: "56",
        title: "Whadupa",
        category: "ART",
        file: "whadupa_001_s0q0ky.jpg",
        desc: "Abstract digital graffiti."
    },
    {
        id: "57",
        title: "Who Know",
        category: "MOTION ART",
        file: "who-know_zyfkld.gif",
        desc: "Psychedelic motion loop."
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
            // Use the new Cloudinary helper function
            const fullSrc = getAssetUrl(project.file);
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

            // Inner HTML Template with Error Logging
            let mediaHTML = '';
            // Added onerror to help debug 404s
            const onErrorHandler = `this.style.display='none'; this.parentElement.innerHTML='<div class="p-4 text-xs font-mono text-red-500 border border-red-500/30 bg-red-900/10">IMG_ERR: 404</div>'; console.error('Cloudinary 404: failed to load ' + this.src);`;
            
            if (isVid) {
                // For grid videos, we auto-play muted
                mediaHTML = `<video src="${fullSrc}" autoplay loop muted playsinline onerror="${onErrorHandler}" class="w-full h-auto object-cover filter sepia-[0.2] group-hover:sepia-0 transition-transform duration-700 group-hover:scale-105"></video>`;
            } else {
                mediaHTML = `<img src="${fullSrc}" loading="lazy" onerror="${onErrorHandler}" class="w-full h-auto object-cover filter sepia-[0.2] group-hover:sepia-0 transition-transform duration-700 group-hover:scale-105">`;
            }

            const mainCategory = project.category.split(' ')[0]; // Take first cat for tag

            card.innerHTML = `
                <div class="relative overflow-hidden bg-nebula-maroon/40 min-h-[200px]">
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
