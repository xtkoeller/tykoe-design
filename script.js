// ==========================================
// CONFIGURATION
// ==========================================

// Your Cloudinary Configuration
const CLOUD_NAME = "dydqxus0f";
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

// Helper to create URL slugs from titles (e.g., "Baby Hairs" -> "baby-hairs")
const createSlug = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
};

// ==========================================
// PROJECT DATA
// ==========================================
const PROJECTS = [
    // --- GROUP 1: MOTION / KINETIC ---
    {
        id: "01",
        title: "Almonds",
        category: "MOTION ART",
        file: "almonds_cn4acj.mp4",
        desc: "Cinematic sequence exploring organic forms and fluid motion. A study in texture and light."
    },
    {
        id: "22",
        title: "Water",
        category: "MOTION ART",
        file: "water_ywwq6p.gif",
        desc: "Fluid simulation loop exploring liquid physics and blue aesthetics."
    },
    {
        id: "10",
        title: "Manual Override",
        category: "MOTION ART",
        file: "IMG_4106_vszt7u.gif",
        desc: "Skeletal motion study examining biological mechanics and x-ray aesthetics."
    },
    {
        id: "04",
        title: "Smile Portal",
        category: "MOTION BRANDING",
        file: "smile-portal_auvlou.gif",
        desc: "Animated brand portal for the Smile Shop identity system. Loops infinitely."
    },
    {
        id: "50",
        title: "Smile Loop",
        category: "MOTION",
        file: "smile-gif_gwnwau.gif",
        desc: "Alternative glitch motion loop."
    },
    // {
    //     id: "57",
    //     title: "Who Know",
    //     category: "ILLUSTRATION",
    //     file: "who-know_zyfkld.gif",
    //     desc: "Psychedelic still loop.",
    // },
    {
        id: "20",
        title: "Start Today",
        category: "MOTION DESIGN",
        file: "start-today_ars6dh.gif",
        desc: "Kinetic poster design with bold typography. Motivational branding piece."
    },
    {
        id: "30",
        title: "Die of Cancer",
        category: "MOTION ART",
        file: "die-of-cancer_sto8c5.gif",
        desc: "Animated commentary on vice and mortality.",
    },
    {
        id: "07",
        title: "Dayton DJ",
        category: "MOTION BRANDING",
        file: "dayton-mobile-dj_xfz5oz.gif",
        desc: "Kinetic logo animation for an audio events company. Rhythm in motion."
    },
    {
        id: "14",
        title: "Loch Doubt",
        category: "MOTION DESIGN",
        file: "loch-doubt-title_001_rzdapq.gif",
        desc: "Title sequence animation for independent film project. Moody and atmospheric.",

    },
    {
        id: "23",
        title: "Balance",
        category: "MOTION ART",
        file: "yin-yang_eitv9v.gif",
        desc: "Animated duality concept with geometric motion and traditional symbolism."
    },

    // --- GROUP 2: PORTRAITS / CHARACTERS ---
    {
        id: "26",
        title: "Bill Murray",
        category: "ILLUSTRATION",
        file: "bill-murray1_x7cfop.webp",
        desc: "Stylized portrait of the cultural icon."
    },
    {
        id: "36",
        title: "Gus Fring",
        category: "ILLUSTRATION",
        file: "gus-fring-2_sebw8v.jpg",
        desc: "Portrait of the calculating antagonist."
    },
    {
        id: "41",
        title: "Kramer",
        category: "ILLUSTRATION",
        file: "kramer-smoking_001_pwe1eo.jpg",
        desc: "The neighbor. A portrait study."
    },
    {
        id: "05",
        title: "Carlin",
        category: "ILLUSTRATION",
        file: "carlin-2_sntssj.jpg",
        desc: "Digital tribute to the legend of stand-up comedy. Vector meets texture."
    },
    {
        id: "03",
        title: "Baby Hairs",
        category: "ILLUSTRATION",
        file: "baby-hairs_tlalg3.jpg",
        desc: "Stylized portraiture emphasizing texture and vibrant, neo-pastel palettes."
    },
    {
        id: "24",
        title: "Zuu",
        category: "ILLUSTRATION",
        file: "zuu_jctede.jpg",
        desc: "Canine portraiture with expressive brushwork and deep color tones."
    },
    {
        id: "52",
        title: "Smirnoff Alexei",
        category: "ILLUSTRATION",
        file: "smirnoff-alexei1_w1gviu.jpg",
        desc: "Character design based on Stranger Things."
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
        id: "12",
        title: "In Da Matrix",
        category: "ILLUSTRATION ART",
        file: "in-da-matrix_v0wsqk.webp",
        desc: "Cyberpunk character design inspired by digital simulations and glitch art."
    },
    {
        id: "17",
        title: "Nemesis",
        category: "ILLUSTRATION ART",
        file: "nemesis-2_k2qcjz.jpg",
        desc: "Expressive character illustration with glitch elements and high contrast."
    },
    {
        id: "06",
        title: "Cosmonaut",
        category: "ART ILLUSTRATION",
        file: "cosmonaut_gordwu.jpg",
        desc: "Lost in the digital void. A study of isolation in space and retro-futurism."
    },

    // --- GROUP 3: ILLUSTRATION / ART ---
    {
        id: "25",
        title: "Be Not Afraid",
        category: "ILLUSTRATION",
        file: "be-not-afraid_001_qvrkco.jpg",
        desc: "Surrealist composition inspired by biblical angel descriptions."
    },
    {
        id: "18",
        title: "Paradise Tanager",
        category: "ILLUSTRATION",
        file: "paradise-tanager_jyxzvh.jpg",
        desc: "Avian vector art celebrating natural forms and geometric abstraction."
    },
    {
        id: "32",
        title: "Dynoflower",
        category: "ILLUSTRATION",
        file: "dynoflower_001_kwreot.jpg",
        desc: "Organic shapes meeting explosive color palettes."
    },
    {
        id: "40",
        title: "Inside The Beast",
        category: "ILLUSTRATION",
        file: "inside-the-beast_cvbfyx.webp",
        desc: "Interior biological landscape study."
    },
    {
        id: "39",
        title: "In My Head",
        category: "ILLUSTRATION ART",
        file: "in-my-head_yvyfjz.webp",
        desc: "Psychological landscape visualization."
    },
    {
        id: "13",
        title: "I'm Clear",
        category: "ILLUSTRATION ART",
        file: "im-clear-1080_xwue7l.webp",
        desc: "Skull motif composition with vibrant gradients and surrealist elements."
    },
    {
        id: "09",
        title: "Gump Series: Boat",
        category: "ILLUSTRATION",
        file: "gump-boat_yafenw.webp",
        desc: "Conceptual art series based on key scenes from Forrest Gump. Minimalist approach."
    },
    {
        id: "35",
        title: "Gump Series: Nam",
        category: "ILLUSTRATION",
        file: "gump-nam_w2dggg.webp",
        desc: "Landscape study from the Gump Series."
    },
    {
        id: "34",
        title: "Gump Series: Left",
        category: "ILLUSTRATION",
        file: "gump-left_bf71xq.webp",
        desc: "Character study from the Gump Series."
    },
    {
        id: "19",
        title: "Pizza Studies: Salad",
        category: "ILLUSTRATION DESIGN",
        file: "salad-za_vp1oij.webp",
        desc: "Food illustration series exploring stylized textures and appetite appeal."
    },
    {
        id: "55",
        title: "Veggie Za",
        category: "ILLUSTRATION",
        file: "veggie-za_pwtd1n.webp",
        desc: "Vegetarian variant from the Pizza Studies series."
    },
    {
        id: "29",
        title: "Danger Matches",
        category: "ILLUSTRATION",
        file: "danger-matches_kcohfs.jpg",
        desc: "Vintage packaging inspired illustration."
    },

    // --- GROUP 4: DESIGN / BRANDING / TYPOGRAPHY ---
    {
        id: "11",
        title: "Haus",
        category: "DESIGN",
        file: "haus_l3lyqs.webp",
        desc: "Architectural poster design and typography layout. Swiss style influence."
    },
    {
        id: "08",
        title: "Eklund Aviation",
        category: "BRANDING DESIGN",
        file: "eklund-aviation_y4qikz.png",
        desc: "Corporate identity design focusing on classic flight aesthetics and gold foil."
    },
    {
        id: "28",
        title: "Create Better",
        category: "DESIGN",
        file: "create-better_cpb6na.jpg",
        desc: "Motivational typography and graphic design experiment."
    },
    {
        id: "31",
        title: "Don't Think",
        category: "ILLUSTRATION",
        file: "dont-think-too-much_kpmset.webp",
        desc: "Mental health awareness graphic with vibrant textures."
    },
    {
        id: "33",
        title: "Grandpa's 80th",
        category: "DESIGN",
        file: "grandpas-80_x615wy.jpg",
        desc: "Commemorative design piece with retro styling."
    },
    {
        id: "42",
        title: "Made Man",
        category: "DESIGN",
        file: "made-man_rzsiyu.webp",
        desc: "Logo and identity concept."
    },
    {
        id: "15",
        title: "Marc",
        category: "DESIGN BRANDING",
        file: "marc-itunes_w6bkyn.jpg",
        desc: "Podcast cover art and layout design. Bold colors for high visibility."
    },
    {
        id: "43",
        title: "Marc (Alt)",
        category: "ILLUSTRATION",
        file: "marc_kxqpvt.jpg",
        desc: "Alternative composition for the Marc series."
    },
    {
        id: "47",
        title: "Open Roads",
        category: "DESIGN",
        file: "open-roads_bqhh76.webp",
        desc: "Badge and emblem design."
    },
    {
        id: "21",
        title: "Synchro",
        category: "DESIGN",
        file: "synchro_dicpkh.jpg",
        desc: "Event poster design and layout. Focus on symmetry and balance."
    },
    {
        id: "27",
        title: "Collab Mural",
        category: "DESIGN ART",
        file: "collab-mural_kl2if8.jpg",
        desc: "Collaborative wall art piece exploring community themes."
    },

    // --- GROUP 5: ABSTRACT / TEXTURES ---
    {
        id: "02",
        title: "The Abyss Between",
        category: "ART 3D",
        file: "abyss-between_cndtwf.webp",
        desc: "Visualizing the space between thoughts in a digital void. Rendered in Redshift."
    },
    {
        id: "38",
        title: "Abstract 0039",
        category: "ART",
        file: "IMG_0039_ro7pll.png",
        desc: "Digital abstract art experiment."
    },
    {
        id: "37",
        title: "If You Knew Better",
        category: "ILLUSTRATION",
        file: "if-you-knew-better-2_ret02p.jpg",
        desc: "Abstract geometric composition."
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
    // {
    //     id: "53",
    //     title: "Spiral Snake",
    //     category: "ART",
    //     file: "Spiral-snake_rlholr.jpg",
    //     desc: "Geometric pattern and form study."
    // },
    {
        id: "54",
        title: "TK-35",
        category: "ART",
        file: "tk-35_004_jddfss.jpg",
        desc: "Dark art composition."
    },
    {
        id: "56",
        title: "Whadupa",
        category: "ART",
        file: "whadupa_001_s0q0ky.jpg",
        desc: "Abstract digital graffiti."
    },
    {
        id: "51",
        title: "Smile Shop BG",
        category: "DESIGN",
        file: "smileshop-bg_a3xalw.jpg",
        desc: "Background texture and pattern design."
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

    if (mobileMenuBtn && mobileMenu) {
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

    // --- Scroll-Linked Wavy Lines ---
    // Moved to CSS dash offset animation (see index.html and tailwind config)

    // --- Magnetic 3D Hover Logic ---
    // Removed global orientation parallax in favor of localized magnetic behavior.

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
                // Determine the actual card element
                const card = entry.target;
                const innerWrapper = card.querySelector('.kinetic-inner');

                if (innerWrapper) {
                    // Swap opacity class instead of setting style inline, so nested hover logic isn't destroyed
                    setTimeout(() => {
                        innerWrapper.classList.remove('opacity-0');
                        innerWrapper.classList.add('opacity-100');
                    }, idx * 100);
                }
                fadeObserver.unobserve(card);
            }
        });
    }, { threshold: 0.1 });

    // --- Render Projects ---
    const projectGrid = document.getElementById('project-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Function to handle filtering logic
    const filterProjects = (category) => {
        const projectCards = document.querySelectorAll('.project-card');

        // Update UI buttons
        filterButtons.forEach(b => {
            const btnCat = b.getAttribute('data-category');
            if (btnCat.toLowerCase() === category.toLowerCase() || (category === 'ALL' && btnCat === 'ALL')) {
                b.classList.add('text-tykoe-gold', 'font-bold', 'border-b', 'border-tykoe-gold', 'scale-105');
                b.classList.remove('hover:text-tykoe-periwinkle');
            } else {
                b.classList.remove('text-tykoe-gold', 'font-bold', 'border-b', 'border-tykoe-gold', 'scale-105');
                b.classList.add('hover:text-tykoe-periwinkle');
            }
        });

        // Filter Grid
        projectCards.forEach(card => {
            const cardCategories = card.getAttribute('data-category').split(' ');
            if (category === 'ALL' || cardCategories.some(c => c.toLowerCase() === category.toLowerCase())) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    };

    if (projectGrid) {
        // Clear loading state
        projectGrid.innerHTML = '';

        PROJECTS.forEach(project => {
            const fullSrc = getAssetUrl(project.file);
            const isVid = isVideoFile(project.file);
            const slug = createSlug(project.title);
            const shouldHideOverlay = project.hideOverlay === true;

            // Create Card Element
            // Removed opacity/translate classes from the outer card to fix layout jumping in columns, logic moved to inner wrapper.
            // Adjusted margins
            const card = document.createElement('div');
            card.className = "project-card relative mb-16 break-inside-avoid cursor-pointer";
            card.setAttribute('data-id', project.id);
            card.setAttribute('data-slug', slug);
            card.setAttribute('data-title', project.title);
            card.setAttribute('data-category', project.category);
            card.setAttribute('data-img', fullSrc);
            card.setAttribute('data-desc', project.desc);
            if (project.link) card.setAttribute('data-link', project.link);

            let mediaHTML = '';
            // Removed sepia classes
            if (isVid) {
                // Remove h-auto constraint so it flows naturally in columns
                mediaHTML = `<video src="${fullSrc}" autoplay loop muted playsinline class="w-full object-contain transition-transform duration-1000 group-hover/card:scale-105"></video>`;
            } else {
                mediaHTML = `<img src="${fullSrc}" loading="lazy" class="w-full object-contain transition-transform duration-1000 group-hover/card:scale-105">`;
            }

            // Logic for hiding the text overlay
            // Tighter tracking, 2px border, layout tweaks
            const mainCategory = project.category.split(' ')[0];
            const textContent = shouldHideOverlay ? '' : `
                <div class="mt-4 flex flex-col items-start transition-all duration-300">
                    <h3 class="text-sm md:text-base font-consolas font-bold tracking-tight text-white md:group-hover/card:text-tykoe-gold transition-colors duration-[280ms] drop-shadow-sm">${project.title}</h3>
                    <p class="text-[10px] font-mono uppercase tracking-widest text-tykoe-periwinkle/60 md:group-hover/card:text-tykoe-periwinkle transition-colors duration-[280ms] block w-full border-t-2 border-tykoe-gold/10 pt-1 mt-1">// ${mainCategory}</p>
                </div>
            `;

            card.innerHTML = `
                <div class="kinetic-inner group/card w-full h-full opacity-0 md:hover:!opacity-100 md:group-hover/grid:opacity-80 md:group-hover/grid:grayscale-[50%] md:hover:!grayscale-0 transition-opacity duration-[280ms] ease-out relative z-10 hover:z-50">
                    <div class="image-wrapper relative overflow-hidden bg-nebula-maroon/20 rounded-sm border border-transparent md:group-hover/card:border-tykoe-gold/40 md:group-hover/card:shadow-[0_0_40px_rgba(255,179,0,0.2)] transition-all duration-[280ms] will-change-transform transform-style-preserve-3d pb-[2px]">
                        ${mediaHTML}
                        <!-- Subtle glass shine -->
                        <div class="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 md:group-hover/card:opacity-100 transform -translate-x-full md:group-hover/card:translate-x-full transition-transform duration-[280ms] z-10 pointer-events-none"></div>
                    </div>
                    ${textContent}
                </div>
            `;

            projectGrid.appendChild(card);
            fadeObserver.observe(card);
        });

        // Filter click events -> Update Hash
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.getAttribute('data-category');
                if (category === 'ALL') {
                    history.pushState(null, null, ' '); // Clear hash
                    filterProjects('ALL');
                } else {
                    window.location.hash = category.toLowerCase();
                }
            });
        });
    }

    // --- Modal Logic ---
    const modalBackdrop = document.getElementById('modal-backdrop');
    const closeModalBtn = document.getElementById('close-modal');
    const modalContentBox = document.getElementById('modal-content-box');

    // Modal Content Elements
    const modalTitle = document.getElementById('modal-title');
    const modalImg = document.getElementById('modal-img');
    const modalVideo = document.getElementById('modal-video');
    const modalDesc = document.getElementById('modal-desc');
    const modalCat = document.getElementById('modal-cat');
    const modalId = document.getElementById('modal-id');
    const modalLinkBtn = document.getElementById('modal-link-btn');
    const modalImgContainer = document.getElementById('modal-img-container');

    // Zoom Toggle Handler
    function toggleZoom() {
        if (!modalImgContainer) return;

        const isZoomed = modalImg.classList.contains('zoomed');

        if (isZoomed) {
            // Revert to Fit
            // Remove zoom classes
            modalImg.classList.remove('zoomed', 'max-w-none', 'max-h-none', 'cursor-zoom-out');
            // Add fit classes
            modalImg.classList.add('max-w-full', 'max-h-full', 'cursor-zoom-in');

            // Revert container (center, no scroll)
            modalImgContainer.classList.remove('overflow-auto', 'block');
            modalImgContainer.classList.add('overflow-hidden', 'flex', 'items-center', 'justify-center');
        } else {
            // Zoom In
            // Add zoom classes (allow natural size)
            modalImg.classList.add('zoomed', 'max-w-none', 'max-h-none', 'cursor-zoom-out');
            // Remove fit classes
            modalImg.classList.remove('max-w-full', 'max-h-full', 'cursor-zoom-in');

            // Allow Scroll (block display to respect scrolling of large content)
            modalImgContainer.classList.add('overflow-auto', 'block');
            modalImgContainer.classList.remove('overflow-hidden', 'flex', 'items-center', 'justify-center');
        }
    }

    if (modalImg) {
        modalImg.addEventListener('click', toggleZoom);
    }

    let currentProjectIndex = -1;

    function getVisibleProjects() {
        const hash = window.location.hash;
        const category = hash.startsWith('#') && hash.length > 2 && !hash.startsWith('#?') ? hash.substring(1).toUpperCase() : 'ALL';

        const projectCards = document.querySelectorAll('.project-card');
        const visibleCards = [];

        projectCards.forEach(card => {
            if (card.style.display !== 'none') {
                visibleCards.push(card);
            }
        });
        return visibleCards;
    }

    function showNextProject() {
        const visibleCards = getVisibleProjects();
        if (visibleCards.length === 0 || currentProjectIndex === -1) return;

        currentProjectIndex++;
        if (currentProjectIndex >= visibleCards.length) {
            currentProjectIndex = 0; // Wrap around
        }
        openModal(visibleCards[currentProjectIndex], false); // false prevents pushing state repeatedly
    }

    function showPrevProject() {
        const visibleCards = getVisibleProjects();
        if (visibleCards.length === 0 || currentProjectIndex === -1) return;

        currentProjectIndex--;
        if (currentProjectIndex < 0) {
            currentProjectIndex = visibleCards.length - 1; // Wrap around
        }
        openModal(visibleCards[currentProjectIndex], false);
    }

    function openModal(card, updateHistory = true) {
        // Update URL state
        const slug = card.getAttribute('data-slug');
        if (updateHistory) {
            history.pushState(null, null, `#?${slug}`);
        }

        const pid = card.getAttribute('data-id');

        // find current index
        const visibleCards = getVisibleProjects();
        currentProjectIndex = Array.from(visibleCards).findIndex(c => c.getAttribute('data-id') === pid);

        // Populate Data
        modalTitle.textContent = card.getAttribute('data-title');
        const src = card.getAttribute('data-img');

        // Reset Zoom State on Open to "Fit"
        if (modalImgContainer) {
            modalImgContainer.classList.remove('overflow-auto', 'block');
            modalImgContainer.classList.add('overflow-hidden', 'flex', 'items-center', 'justify-center');
            modalImgContainer.scrollTop = 0;
            modalImgContainer.scrollLeft = 0;
        }

        if (isVideoFile(src)) {
            modalVideo.src = src;
            modalVideo.classList.remove('hidden');
            modalVideo.classList.add('block');
            modalImg.classList.add('hidden');
            modalImg.classList.remove('block');

            // Re-trigger animation
            modalVideo.style.opacity = 0;
            setTimeout(() => {
                modalVideo.style.opacity = 1;
            }, 50);

            modalVideo.play();
        } else {
            modalImg.src = src;
            modalImg.classList.remove('hidden');
            modalImg.classList.add('block');
            modalVideo.classList.add('hidden');
            modalVideo.classList.remove('block');
            modalVideo.pause();

            // Re-trigger animation
            modalImg.style.opacity = 0;
            setTimeout(() => {
                modalImg.style.opacity = 1;
            }, 50);

            // RESET TO FIT STATE
            // Base classes + Fit classes
            modalImg.className = "max-w-full max-h-full object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100 cursor-zoom-in";
        }

        modalDesc.textContent = card.getAttribute('data-desc');
        modalCat.textContent = card.getAttribute('data-category');
        modalId.textContent = pid;

        // Hide link button completely for now
        if (modalLinkBtn) modalLinkBtn.parentElement.style.display = 'none';

        // Show Modal (Smooth Transition)
        modalBackdrop.classList.remove('opacity-0', 'pointer-events-none');
        modalBackdrop.classList.add('opacity-100', 'pointer-events-auto');

        // Trigger content animations
        setTimeout(() => {
            modalContentBox.classList.remove('opacity-0', 'translate-y-8', 'scale-95');
            modalContentBox.classList.add('opacity-100', 'translate-y-0', 'scale-100');
            closeModalBtn.classList.remove('opacity-0', 'translate-y-4');
            closeModalBtn.classList.add('opacity-100', 'translate-y-0');
        }, 50);

        document.body.style.overflow = 'hidden'; // prevent bg scroll
    }

    function closeModal() {
        modalContentBox.classList.remove('opacity-100', 'translate-y-0', 'scale-100');
        modalContentBox.classList.add('opacity-0', 'translate-y-8', 'scale-95');
        closeModalBtn.classList.remove('opacity-100', 'translate-y-0');
        closeModalBtn.classList.add('opacity-0', 'translate-y-4');

        setTimeout(() => {
            modalBackdrop.classList.remove('opacity-100', 'pointer-events-auto');
            modalBackdrop.classList.add('opacity-0', 'pointer-events-none');
            // Cleanup media on close
            if (modalVideo) modalVideo.pause();

            const currentHash = window.location.hash;
            if (currentHash.includes('?')) {
                history.pushState(null, null, ' ');
            }
            document.body.style.overflow = '';
        }, 300); // Wait for transition
    }

    if (modalBackdrop) {
        // Open on Card Click (Delegation)
        if (projectGrid) {
            projectGrid.addEventListener('click', (e) => {
                const card = e.target.closest('.project-card');
                if (card) {
                    openModal(card);
                }
            });
        }

        if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop || (e.target.classList.contains('absolute') && e.target.classList.contains('inset-0'))) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (modalBackdrop.classList.contains('pointer-events-none')) return;

            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowRight') {
                showNextProject();
            } else if (e.key === 'ArrowLeft') {
                showPrevProject();
            }
        });

        // --- Touch Swipe Logic for Modal ---
        let touchStartX = 0;
        let touchEndX = 0;
        const swipeThreshold = 50;

        modalBackdrop.addEventListener('touchstart', (e) => {
            // Only care about first touch
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        modalBackdrop.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            // Ignore zoom states if possible, but keep it simple for now
            if (modalImg && modalImg.classList.contains('zoomed')) return;

            const distance = touchEndX - touchStartX;
            if (Math.abs(distance) < swipeThreshold) return;

            // Swipe left (next)
            if (distance < 0) {
                showNextProject();
            }
            // Swipe right (prev)
            else if (distance > 0) {
                showPrevProject();
            }
        }
    }

    // --- Router / Hash Handler ---
    const handleHashChange = () => {
        const hash = window.location.hash;

        if (!hash) return;

        if (hash.startsWith('#?')) {
            // Project View: #?baby-hairs
            const slug = hash.substring(2);
            // Wait for grid to render if necessary (simple check)
            const card = document.querySelector(`.project-card[data-slug="${slug}"]`);
            if (card) {
                openModal(card);
            }
        } else {
            // Category View: #illustration
            const category = hash.substring(1).toUpperCase();
            // Validate category exists in filters
            const validFilter = Array.from(filterButtons).some(b => b.getAttribute('data-category').toUpperCase() === category);
            if (validFilter || category === 'ALL') {
                filterProjects(category);
            }
        }
    };

    // Initialize Router
    window.addEventListener('hashchange', handleHashChange);
    // Trigger on load if hash exists
    if (window.location.hash) {
        // slight delay to ensure DOM is ready
        setTimeout(handleHashChange, 100);
    }

    // ==========================================
    // MAGNETIC 3D HOVER & MOBILE TILTING
    // ==========================================
    function initializeMagneticHover() {
        const cards = document.querySelectorAll('.project-card');
        const isMobile = window.innerWidth < 768;

        // Mobile Gyroscope Tilting
        if (isMobile && window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', (e) => {
                const tiltX = Math.min(Math.max(e.gamma || 0, -45), 45) / 45; // -1 to 1
                const tiltY = Math.min(Math.max((e.beta - 45) || 0, -45), 45) / 45; // -1 to 1

                cards.forEach(card => {
                    const inner = card.querySelector('.kinetic-inner');
                    if (!inner) return;

                    const rotateY = tiltX * 8;
                    const rotateX = -tiltY * 8;
                    const translateZ = 15;

                    inner.style.transition = 'transform 0.1s ease-out';
                    inner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`;
                });
            });
        }

        // Desktop localized mouse magnetic hover
        if (!isMobile) {
            cards.forEach(card => {
                const inner = card.querySelector('.kinetic-inner');
                if (!inner) return;

                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
                    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

                    const rotateY = x * 10;
                    const rotateX = -y * 10;
                    const translateZ = 30;
                    const shadowX = -x * 20;
                    const shadowY = -y * 20;

                    inner.style.transition = 'transform 0.1s ease-out, box-shadow 0.1s ease-out';
                    inner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`;
                    inner.querySelector('.image-wrapper').style.boxShadow = `${shadowX}px ${shadowY}px 50px rgba(0,0,0,0.6), 0 0 30px rgba(255,179,0,0.2)`;
                });

                card.addEventListener('mouseleave', () => {
                    inner.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease';
                    inner.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
                    inner.querySelector('.image-wrapper').style.boxShadow = '';
                });
            });
        }
    }

    // Initialize hover logic once assets are loaded
    setTimeout(initializeMagneticHover, 500);

});
