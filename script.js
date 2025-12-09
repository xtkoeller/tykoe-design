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

    // --- Project Filtering Logic (Index Page) ---
    const filterButtons = document.querySelectorAll('.filter-btn');
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
                    if(category === 'ALL' || card.getAttribute('data-category') === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // --- Modal Logic (Index Page) ---
    const modalBackdrop = document.getElementById('modal-backdrop');
    const closeModalBtn = document.getElementById('close-modal');
    
    // Modal Content Elements
    const modalTitle = document.getElementById('modal-title');
    const modalImg = document.getElementById('modal-img');
    const modalDesc = document.getElementById('modal-desc');
    const modalCat = document.getElementById('modal-cat');
    const modalId = document.getElementById('modal-id');
    const modalLinkBtn = document.getElementById('modal-link-btn');

    function openModal(card) {
        // Populate Data
        modalTitle.textContent = card.getAttribute('data-title');
        modalImg.src = card.getAttribute('data-img');
        modalDesc.textContent = card.getAttribute('data-desc');
        modalCat.textContent = card.getAttribute('data-category');
        modalId.textContent = card.getAttribute('data-id').padStart(3, '0');

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
    }

    if(modalBackdrop) {
        // Open on Card Click
        projectCards.forEach(card => {
            card.addEventListener('click', () => openModal(card));
        });

        // Close on X Click
        if(closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
        
        // Close on Backdrop Click
        modalBackdrop.addEventListener('click', (e) => {
            // Check if clicking backdrop or the blur layer
            if(e.target === modalBackdrop || e.target.classList.contains('absolute') && e.target.classList.contains('inset-0')) {
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
